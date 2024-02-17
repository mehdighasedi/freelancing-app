import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  const handleChange = (value) => {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  };
  return (
    <div className="flex items-center justify-center gap-x-2 text-sm">
      <span>وضعیت</span>
      <div className="flex items-center justify-center gap-x-4 border border-secondary-100 bg-secondary-0 rounded-lg">
        {options.map(({ value, label }) => {
          const isActive = value === currentFilter;
          return (
            <button
              onClick={() => handleChange(value)}
              disabled={isActive}
              className={`whitespace-nowrap px-4 py-2 rounded-md 
              font-bold transition-all duration-300
              ${
                isActive
                  ? "!bg-primary-900 !text-white"
                  : "!bg-secondary-0 !text-secondary-800"
              }  `}
              key={value}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
