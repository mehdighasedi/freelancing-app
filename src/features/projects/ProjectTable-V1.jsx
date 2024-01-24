import useOwnerProjects from "./useOwnerProjects";
import Loader from "../../ui/Loader";
import Empty from "../../ui/Empty";
import truncateText from "../../utils/truncateText";
import toLocaleDateShort from "../../utils/toLocaleDateShort";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";

function ProjectTable() {
  const { projects, isLoading } = useOwnerProjects();

  if (isLoading) return <Loader />;

  if (!projects.length) return <Empty resourceName="پروژه" />;
  return (
    <div className="bg-secondary-0 overflow-x-auto rounded-md ">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project._id}>
              <td>{index + 1}</td>
              <td>{truncateText(project.title, 30)}</td>
              <td>{project.category.title}</td>
              <td>{toPersianNumbersWithComma(project.budget)} تومان </td>
              <td>{toLocaleDateShort(project.deadline, "fa-IR")}</td>
              <td>
                <div className="flex flex-wrap gap-2 max-w-[200px]">
                  {project.tags.map((tag) => (
                    <span className="badge badge--secondary" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td>{project.freelancer?.name || "-"}</td>
              <td>
                {project.status === "OPEN" ? (
                  <span className="badge badge--success">باز</span>
                ) : (
                  <span className="badge badge--danger">بسته</span>
                )}
              </td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTable;
