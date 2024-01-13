import { IoIosArrowDropright } from "react-icons/io";
import useMoveBack from "../hooks/useMoveBack";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="sm:max-w-sm container flex justify-center w-full items-center flex-col gap-y-10 pt-64">
      <div>
        <h1 className="font-bold text-xl">
          صفحه ای که به دنبال آن هستید یافت نشد
        </h1>
      </div>
      <button onClick={moveBack} className="btn btn--primary flex items-center">
        <span className=" w-fit ml-2 hover:translate-x-2 transition-all duration-150">
          <IoIosArrowDropright />
        </span>
        بازگشت
      </button>
    </div>
  );
}

export default NotFound;
