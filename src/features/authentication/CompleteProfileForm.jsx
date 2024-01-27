import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../ui/RadioInputGroup";
import Loader from "../../ui/Loader";

function CompleteProfileForm() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [role, setRole] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const onSubmit = async (data) => {
    // e.preventDefault();

    try {
      const { user, message } = await mutateAsync({ data });

      toast.success(message);
      if (user?.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", {
          icon: "✔",
        });
        return;
      }
      if (user?.role === "OWNER") return navigate("/owner");
      if (user?.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="pt-10 w-full sm:max-w-sm">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <p className="font-bold text-3xl text-secondary-400 text-center border-b-2 pb-5">
            تکمیل اطلاعات کاربر
          </p>
          <TextField
            label="نام و نام خانوادگی"
            name="name"
            register={register}
            validationSchema={{
              required: "نام و نام خانوادگی ضروری است",
            }}
            errors={errors}
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="ایمیل"
            name="email"
            register={register}
            validationSchema={{
              required: "ایمیل ضروری است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل نامعتبر است",
              },
            }}
            errors={errors}

            // onChange={(e) => setEmail(e.target.value)}
            // value={email}
          />
          <div className="flex items-center justify-center gap-x-10 p-4">
            <RadioInputGroup
              errors={errors}
              register={register}
              watch={watch}
              configs={{
                name: "role",
                validationSchema: { required: "انتخاب نقش ضروری است" },
                options: [
                  {
                    value: "OWNER",
                    label: "کارفرما",
                  },
                  { value: "FREELANCER", label: "فریلنسر" },
                ],
              }}
            />
          </div>
          {isPending ? (
            <Loader />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تایید
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
