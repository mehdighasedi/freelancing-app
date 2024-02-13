import { useForm } from "react-hook-form";
import RHFSelect from "./../../ui/RHFSelect";
import useChangeProposalStatus from "./useChangeProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loader from "../../ui/Loader";

const options = [
  {
    label: "رد شده",
    value: "0",
  },
  {
    label: "در انتظار تایید",
    value: "1",
  },
  {
    label: "تایید شده",
    value: "2",
  },
];

function ChangeProposalStatus({ proposalId, onClose }) {
  const { register, handleSubmit } = useForm();
  const { isChangingProposalStatus, changeProposalStatus } =
    useChangeProposalStatus();
  const queryClient = useQueryClient();
  const { id: projectId } = useParams();

  const changeProposalHandler = (data) => {
    changeProposalStatus(
      { proposalId, projectId, ...data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["project", projectId] });
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(changeProposalHandler)}>
        <RHFSelect
          label="تغییر وضعیت"
          name="status"
          register={register}
          required
          options={options}
        />
        <div className=" mt-8">
          {isChangingProposalStatus ? (
            <Loader />
          ) : (
            <button className="btn btn--primary w-full">تایید</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ChangeProposalStatus;
