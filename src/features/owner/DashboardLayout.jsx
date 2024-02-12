import DashboardHeader from "../../ui/DashboardHeader";
import Loader from "../../ui/Loader";
import useOwnerProjects from "../projects/useOwnerProjects";
import Stats from "./Stats";

function DashboardLayout() {
  const { isLoading, projects } = useOwnerProjects();
  if (isLoading) return <Loader />;
  return (
    <div className="xl:max-w-screen-xl">
      <DashboardHeader />
      <Stats projects={projects} />
    </div>
  );
}

export default DashboardLayout;
