import { HiOutlineX } from "react-icons/hi";
import useOutsideClick from "../hooks/useOutsideClick";

function Modal({ open, title, onClose, children }) {
  const ref = useOutsideClick(onClose);
  return (
    open && (
      <div
        className="backdrop-blur-sm w-full 
      h-screen fixed top-0 left-0 
      bg-secondary-800 bg-opacity-30 
      z-50"
      >
        <div
          ref={ref}
          className="fixed top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2
        rounded-lg shadow-lg bg-secondary-0 p-4 transition-all duration-300 ease-out
         w-[calc(100vw - 3rem)] md:max-w-lg max-h-[calc(100vh - 5rem)] overflow-x-auto"
        >
          <div
            className="flex justify-between items-center 
          border-b border-b-secondary-300
          pb-2 mb-6"
          >
            <p className="font-bold text-secondary-700 text-base">{title}</p>
            <button onClick={onClose}>
              <HiOutlineX className="w-5 h-5 text-secondary-500" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
