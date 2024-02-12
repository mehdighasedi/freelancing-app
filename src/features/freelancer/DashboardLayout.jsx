import useProposals from "../../features/proposals/useProposals";
import DashboardHeader from "../../ui/DashboardHeader";
import Loader from "../../ui/Loader";
import Stats from "./Stats";

function DashboardLayout() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loader />;

  return (
    <div className="xl:max-w-screen-xl">
      <DashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
}

export default DashboardLayout;
