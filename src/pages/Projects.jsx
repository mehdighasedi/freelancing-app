import ProjectTable from "../features/projects/ProjectTable";

import AddNewProject from "../ui/AddNewProject";
function Projects() {
  return (
    <div className="container xl:max-w-screen-xl">
      <AddNewProject />
      <ProjectTable />
    </div>
  );
}

export default Projects;
