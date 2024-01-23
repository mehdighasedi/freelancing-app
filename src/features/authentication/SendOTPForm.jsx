import TextField from "../../ui/TextField";
import Loader from "../../ui/Loader";

function SendOTPForm({ isSendingOtp, onSubmit, phoneNumber, onChange }) {
  return (
    <div>
      <p className="font-bold text-3xl text-center text-secondary-400 mb-5">
        فریلنسرینگ
      </p>
      <form className="space-y-6" onSubmit={onSubmit}>
        <TextField
          label="لطفا شماره موبایل خود را وارد کنید"
          name="phonenumber"
          value={phoneNumber}
          onChange={onChange}
        />
        {isSendingOtp ? (
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
