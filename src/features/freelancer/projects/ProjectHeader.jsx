import { HiFilter } from "react-icons/hi";
import FilterDropDown from "../../../ui/FilterDropDown";
import useCategory from "../../../hooks/useCategory";
function ProjectHeader() {
  const { transformedCategory } = useCategory();
  return (
    <div className="flex items-center justify-between mb-8 text-secondary-700">
      <h1 className="text-xl font-bold">لیست پروژه ها</h1>
      <div className="flex items-center justify-center gap-x-2">
        <span>
          <HiFilter className="h-5 w-5 text-primary-600" />
        </span>
        <FilterDropDown
          options={[
            {
              value: "ALL",
              label: "دسته بندی ها (همه)",
            },
            ...transformedCategory,
          ]}
          filterField="category"
        />
      </div>
    </div>
  );
}

export default ProjectHeader;
