import { useState } from "react";
import SendOTPForm from "./authentication/SendOTPForm";
import CheckOTPForm from "./authentication/CheckOTPForm";
function AuthContainer() {
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SendOTPForm setStep={setStep} />;
      case 2:
        return <CheckOTPForm />;
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-screen-sm ">{renderStep()}</div>;
}

export default AuthContainer;
