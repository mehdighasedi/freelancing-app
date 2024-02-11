import { HiArrowCircleRight } from "react-icons/hi";
import useMoveBack from "../../hooks/useMoveBack";
function ProjectHeader({ project }) {
  const moveBack = useMoveBack();
  return (
    <div
      className="flex items-center justify-between transition-all duration-300
  bg-secondary-0 border rounded-xl hover:shadow hover:shadow-md hover:shadow-primary-600 p-2 mb-4"
    >
      <h1 className="mr-3 text-secondary-600">درخواست های {project.title}</h1>
      <button
        onClick={moveBack}
        className="btn btn--primary flex items-center gap-x-2"
      >
        <HiArrowCircleRight className="w-6 h-6 text-secondary-700 hover:text-secondary-0 z-50 transition-all duration-300" />
        <span>بازگشت</span>
      </button>
    </div>
  );
}

export default ProjectHeader;
