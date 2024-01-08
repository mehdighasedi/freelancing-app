function TextField({ label, name, value, onChange }) {
  return (
    <div>
      <label className="block text-center " htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        value={value}
        onChange={onChange}
        type="text"
        className="textField__input"
      />
    </div>
  );
}

export default TextField;
