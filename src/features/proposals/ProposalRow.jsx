import Table from "../../ui/Table";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

function ProposalRow({ proposal, index }) {
  const { description, duration, price, status } = proposal;
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(description, 60)}</td>
      <td>{toPersianNumbers(duration)} روز</td>
      <td>{toPersianNumbersWithComma(price)} تومان </td>
      <td className={`badge mt-[.8rem] ${statusStyle[status].className}`}>
        {statusStyle[status].label}
      </td>
    </Table.Row>
  );
}
export default ProposalRow;
