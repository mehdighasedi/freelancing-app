import { useState } from "react";
import TextField from "../../ui/TextField";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const sendOtpHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <p className="font-bold text-3xl text-center text-secondary-400 mb-5">
        فریلنسرینگ
      </p>
      <form className="space-y-6" onSubmit={sendOtpHandler}>
        <TextField
          label="لطفا شماره موبایل خود را وارد کنید"
          name="phonenumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit" className="w-full btn btn--primary  ">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
