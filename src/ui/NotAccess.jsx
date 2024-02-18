import { GoBlocked } from "react-icons/go";
import { useNavigate } from "react-router-dom";

function NotAccess() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center w-full h-screen bg-secondary-500">
      <div className="bg-secondary-0 rounded-lg p-10 hover:shadow hover:shadow-secondary-700 hover:shadow-lg transition-all duration-300">
        <span className="flex items-center mt-10">
          <GoBlocked className="h-[20rem] w-[20rem] rounded-full bg-secondary-0 text-primary-700" />
        </span>
        <h1 className="text-center mt-10 font-bold text-secondary-700 text-lg mb-10">
          شما دسترسی مجاز برای این صفحه را ندارید
        </h1>
        <div>
          <button
            onClick={() => navigate(-1)}
            className="btn btn--primary w-full"
          >
            بازگشت
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotAccess;
