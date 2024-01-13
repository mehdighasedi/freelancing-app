import { useState } from "react";
import SendOTPForm from "./authentication/SendOTPForm";
import CheckOTPForm from "./authentication/CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../services/authService";
import toast from "react-hot-toast";

function AuthContainer() {
  const { isPending: isSendingOtp, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    // try {
    //   const data = await mutateAsync({ phoneNumber });
    //   setStep(2);
    //   toast.success(data.message);
    // } catch (error) {
    //   toast.error(error?.response?.data?.message);
    // }
    setStep(2);
  };

  const [step, setStep] = useState(2);
  const [phoneNumber, setPhoneNumber] = useState("");

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isSendingOtp}
            onSubmit={sendOtpHandler}
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onResendOtp={sendOtpHandler}
            phoneNumber={phoneNumber}
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
