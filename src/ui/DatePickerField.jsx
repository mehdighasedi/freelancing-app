import { data } from "autoprefixer";
import DatePicker from "react-multi-date-picker";
import persian_fa from "react-date-object/locales/persian_fa";
import persian from "react-date-object/calendars/persian";

function DatePickerField({ label, date, setDate }) {
  return (
    <div>
      <span className="mb-2 text-secondary-700 block">{label}</span>
      <DatePicker
        containerClassName="w-full"
        value={date}
        onChange={(date) => setDate(date)}
        format="YYYY/MM/DD"
        locale={persian_fa}
        calendar={persian}
        calendarPosition="top-center"
        inputClass="textField__input"
      />
    </div>
  );
}

export default DatePickerField;
