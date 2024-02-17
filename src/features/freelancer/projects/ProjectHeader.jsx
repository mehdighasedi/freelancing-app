import { HiFilter } from "react-icons/hi";
import FilterDropDown from "../../../ui/FilterDropDown";
import useCategory from "../../../hooks/useCategory";
import Filter from "../../../ui/Filter";

const sortOptions = [
  {
    label: "مرتب سازی (جدید ترین)",
    value: "latest",
  },
  {
    label: "مرتب سازی (قدیمی ترین)",
    value: "earliest",
  },
];

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];

function ProjectHeader() {
  const { transformedCategory } = useCategory();
  return (
    <div className="flex items-center justify-between mb-8 text-secondary-700">
      <h1 className="text-lg font-bold">لیست پروژه ها</h1>
      <div className="flex items-center justify-center gap-x-8">
        <Filter filterField="status" options={statusOptions} />

        <FilterDropDown options={sortOptions} filterField="sort" />
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
