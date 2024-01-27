function RadioInput({
  label,
  value,
  register,
  name,
  id,
  validationSchema = {},
  watch,
}) {
  return (
    <div
      className="flex items-center gap-x-2 text-secondary-600 
    border border-secondary-200 p-4 rounded-lg shadow-md 
    hover:shadow-lg hover:shadow-primary-300 transition-all duration-300 cursor-pointer"
    >
      <input
        className="cursor-pointer w-5 h-4 form-radio text-primary-900 focus:ring-primary-900 focus:ring-1 "
        type="radio"
        name={name}
        id={id}
        value={value}
        {...register(name, validationSchema)}
        checked={watch(name) === value}
      />
      <label
        className="font-bold cursor-pointer hover:text-primary-700 transition-all duration-300"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}
export default RadioInput;
