import DashboardHeader from "../features/owner/DashboardHeader";
import Stats from "../features/owner/Stats";
import useOwnerProjects from "../features/projects/useOwnerProjects";
import Loader from "../ui/Loader";

function OwnerDashboard() {
  const { isLoading, projects } = useOwnerProjects();
  if (isLoading) return <Loader />;
  return (
    <div className="xl:max-w-screen-xl">
      <DashboardHeader />
      <Stats projects={projects} />
    </div>
  );
}

export default OwnerDashboard;
