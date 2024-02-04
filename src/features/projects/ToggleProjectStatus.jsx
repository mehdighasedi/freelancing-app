import { useState } from "react";
import { Switch } from "@headlessui/react";
import useToggleProjectStatus from "./useToggleProjectStatus";
import Loader from "../../ui/Loader";
import Toggle from "../../ui/Toggle";

function ToggleProjectStatus({ project }) {
  const { status } = project;

  const { isUpdating, toggleProject } = useToggleProjectStatus();
  const toggleHandler = () => {
    toggleProject(
      { id: project._id, status },
      {
        onSuccess: () => {},
      }
    );
  };
  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loader />
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
