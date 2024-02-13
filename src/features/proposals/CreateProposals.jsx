import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Loader from "./../../ui/Loader";
import useCreateProposals from "./useCreateProposals";

function CreateProposals({ onClose, projectId }) {
  const { isCreatingProposals, createProposals } = useCreateProposals();

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    createProposals(
      {
        ...data,
        projectId,
      },
      {
        onSuccess: () => {
          onClose();
          reset();
        },
      }
    );
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="description"
          label="توضیحات"
          register={register}
          AddationalCls="text-right"
          required
          validationSchema={{
            required: "توضیحات ضروری است",
            minLength: {
              value: 20,
              message: "طول عنوان نباید زیر 20 کاراکتر باشد",
            },
          }}
          errors={errors}
        />
        <TextField
          name="price"
          label="قیمت"
          type="number"
          register={register}
          AddationalCls="text-right"
          required
          validationSchema={{
            required: "قیمت ضروری است",
          }}
          errors={errors}
        />
        <TextField
          name="duration"
          label="مدت زمان"
          type="number"
          register={register}
          AddationalCls="text-right"
          required
          validationSchema={{
            required: "مدت زمان ضروری است",
          }}
          errors={errors}
        />
        {isCreatingProposals ? (
          <Loader />
        ) : (
          <button type="submit" className="btn btn--primary w-full ">
            تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default CreateProposals;
