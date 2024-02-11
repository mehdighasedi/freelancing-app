import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "./stat";

function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfProcessedProjects = projects.map((pro) => pro.status === 2).length;

  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );

  return (
    <div className="grid xl:grid-cols-3 sm:grid-cols-1 lg:grid-cols-2 gap-8">
      <Stat
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        title="پروژه ها"
        value={numOfProjects}
        color="primary"
      />
      <Stat
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        title="پروژه های واگذار شده"
        value={numOfProcessedProjects}
        color="green"
      />
      <Stat
        icon={<HiCollection className="w-20 h-20" />}
        title="درخواست ها"
        value={numOfProposals}
        color="blue"
      />
    </div>
  );
}

export default Stats;
