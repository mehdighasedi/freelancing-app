import { useState } from "react";
import OTPInput from "react-otp-input";

function CheckOTPForm() {
  const [otp, setOtp] = useState("");
  return (
    <div>
      <p className="font-bold text-3xl text-center text-secondary-400 mb-5">
        فریلنسرینگ
      </p>
      <form>
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
        <button className="btn btn--primary w-full">تایید</button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
