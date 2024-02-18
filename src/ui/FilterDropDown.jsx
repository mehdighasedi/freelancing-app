import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function FilterDropDown({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField) || "";

  const handleChange = (e) => {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  };
  return <Select onChange={handleChange} value={value} options={options} />;
}

export default FilterDropDown;
