import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";

import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";

function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((pro) => pro.status === 2);
  const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div className="grid xl:grid-cols-3 sm:grid-cols-1 lg:grid-cols-2 gap-8">
      <Stat
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        title="درخواست ها"
        value={toPersianNumbers(numOfProposals)}
        color="primary"
      />
      <Stat
        icon={<HiCollection className="w-20 h-20" />}
        title="پروژه های تایید شده"
        value={toPersianNumbers(acceptedProposals.length)}
        color="green"
      />
      <Stat
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        title="کیف پول"
        value={toPersianNumbersWithComma(balance)}
        color="blue"
      />
    </div>
  );
}

export default Stats;
