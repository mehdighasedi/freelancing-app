import { useState } from "react";
import { Switch } from "@headlessui/react";
import useToggleProjectStatus from "./useToggleProjectStatus";
import Loader from "../../ui/Loader";
import Toggle from "../../ui/Toggle";

function ToggleProjectStatus({ project }) {
  const { status } = project;

  const { isUpdating, toggleProject } = useToggleProjectStatus();
  const toggleHandler = () => {
    const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProject({ id: project._id, data: { status: newStatus } });
  };
  return (
    <div className="w-[8rem]">
      {isUpdating ? (
        <Loader height={20} width={50} />
      ) : (
        <Toggle
          onChange={toggleHandler}
          label={status === "OPEN" ? "باز" : "بسته"}
          enabled={status === "OPEN" ? true : false}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
