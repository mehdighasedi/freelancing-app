import useProject from "../../../hooks/useProject";
import Empty from "../../../ui/Empty";
import Loader from "../../../ui/Loader";
import Table from "../../../ui/Table";
import ProjectRow from "./ProjectRow";

function ProjectTable() {
  const { projects, isLoading } = useProject();

  if (isLoading) return <Loader />;

  if (!projects.length) return <Empty resourceName="پروژه" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectTable;
