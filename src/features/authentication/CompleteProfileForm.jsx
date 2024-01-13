import { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  console.log(role);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { message, user } = await mutateAsync({ name, email, role });
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", {
          icon: "✔",
        });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="pt-10 w-full sm:max-w-sm">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <p className="font-bold text-3xl text-secondary-400 text-center border-b-2 pb-5">
            تکمیل اطلاعات کاربر
          </p>
          <TextField
            label="نام و نام خانوادگی"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="ایمیل"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="flex items-center justify-center gap-x-10 p-4">
            <RadioInput
              label="کارفرما"
              role={role === "OWNER"}
              onChange={(e) => setRole("OWNER")}
            />
            <RadioInput
              label="فریلنسر"
              role={role === "FREELANCER"}
              onChange={(e) => setRole("FREELANCER")}
            />
          </div>
          <button className="btn btn--primary w-full">تایید</button>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
