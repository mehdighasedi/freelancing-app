import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import Loader from "../../ui/Loader";

const RESEND_TIME = 60;

function CheckOTPForm({ phoneNumber, onBack, onResendOtp, otpResponse }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const navigate = useNavigate();
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const checkOtpHandler = async (e) => {
    e.preventDefault();

    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });

      toast.success(message);

      if (!user.isActive) return navigate("/complete-profile");
      if (Number(user.status) !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", {
          icon: "✔",
        });
        return;
      } else {
        if (user.role === "OWNER") return navigate("/owner");
        if (user.role === "FREELANCER") return navigate("/freelancer");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <p className="font-bold text-3xl text-center text-secondary-400 mb-5">
        فریلنسرینگ
      </p>

      <form onSubmit={checkOtpHandler}>
        <p className="font-bold text-secondary-800 text-center ">
          کد تایید را وارد کنید
        </p>

        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse justify-center gap-x-4"
          inputStyle={{
            margin: "1rem 0 1rem 0",
            padding: "0.5rem 0.2rem",
            width: "2.5rem",
            border: "1px solid rgb(var(--color-primary-300))",
            borderRadius: "0.5rem",
            fontFamily: "Vazir",
          }}
        />
        {isPending ? (
          <Loader />
        ) : (
          <button type="submit" className="w-full btn btn--primary  ">
            تایید
          </button>
        )}
      </form>
      <div className="flex justify-between mt-6">
        <button
          className="btn btn--primary flex items-center  "
          onClick={onBack}
        >
          <HiArrowRight className="w-5 h-5 text-white" />
          <span className="text-sm mr-2">ویرایش شماره موبایل</span>
        </button>
        <button
          className="btn btn--primary disabled:bg-secondary-600"
          disabled={time > 0}
          onClick={onResendOtp}
        >
          {time > 0
            ? `${time}  ثانیه تا ارسال مجدد کد تایید`
            : `ارسال مجدد کد تایید`}
        </button>
      </div>
    </div>
  );
}

export default CheckOTPForm;
