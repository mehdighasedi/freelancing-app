import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkmode } from "../context/DarkModeContext";

function ToggleDarkMode() {
  const { isDarkMode, toggleDarkMode } = useDarkmode();

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun className="w-6 h-6 text-primary-800" />
      ) : (
        <HiOutlineMoon className="w-6 h-6 text-primary-800" />
      )}
    </button>
  );
}

export default ToggleDarkMode;
