import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function AuthContainer() {
  const { register, handleSubmit, getValues } = useForm();

  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (data) => {
    // e.preventDefault();
    try {
      const { message } = await mutateAsync({ data });
      setStep(2);
      console.log(data);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const [step, setStep] = useState(1);
  // const [phoneNumber, setPhoneNumber] = useState("");

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isSendingOtp}
            onSubmit={handleSubmit(sendOtpHandler)}
            register={register}
            // phoneNumber={phoneNumber}
            // onChange={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onResendOtp={sendOtpHandler}
            phoneNumber={getValues("phoneNumber")}
            otpResponse={otpResponse}
            onBack={(e) => setStep(1)}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-screen-sm ">{renderStep()}</div>;
}

export default AuthContainer;
