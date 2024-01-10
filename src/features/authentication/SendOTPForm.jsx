import { useState } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import Loader from "../../ui/Loader";

function SendOTPForm({ setStep, phoneNumber, onChange }) {
  const { isPending, data, error, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      setStep(2);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
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
          onChange={onChange}
        />
        {isPending ? (
          <Loader />
        ) : (
          <button type="submit" className="w-full btn btn--primary  ">
            ارسال کد تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default SendOTPForm;
