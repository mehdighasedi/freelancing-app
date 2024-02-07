import ProjectHeader from "../features/project/ProjectHeader";
import ProposalTable from "../features/project/ProposalTable";
import useProject from "../features/project/useProject";
import Loader from "../ui/Loader";

function Project() {
  const { isLoading, project } = useProject();
  console.log(project);
  if (isLoading) return <Loader />;

  return (
    <div>
      <ProjectHeader project={project} />
      <ProposalTable proposals={project.proposals} />
    </div>
  );
}

export default Project;
