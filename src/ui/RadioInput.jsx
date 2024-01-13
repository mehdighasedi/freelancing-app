function RadioInput({ label, onChange, role }) {
  return (
    <div
      onClick={onChange}
      className={`${
        role && " focus:ring ring-2 ring-offset-2 bg-primary-100 "
      } p-5 h-[2rem] w-[9rem] rounded-lg 
            flex items-center justify-between 
            font-bold cursor-pointer
            shadow shadow-lg shadow-primary-500 transition-all duration-300
            border hover:ring-2 
            `}
    >
      <p>{label}</p>
      <span className={`${role ? "block" : "hidden"}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="green"
          class="w-7 h-7"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </div>
  );
}

export default RadioInput;
