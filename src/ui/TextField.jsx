function TextField({
  required,
  label,
  name,
  AddationalCls,
  validationSchema,
  register,
  errors,
  type = "text",
}) {
  return (
    <div>
      <label
        className={`block text-center text-secondary-700 ${AddationalCls}`}
        htmlFor={name}
      >
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        id={name}
        type={type}
        className="textField__input"
        autoComplete="off"
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextField;
