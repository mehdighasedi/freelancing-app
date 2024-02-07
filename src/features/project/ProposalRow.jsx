import { useState } from "react";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import ChangeProposalStatus from "./ChangeProposalStatus";

function ProposalRow({ proposal, index }) {
  const [open, setOpen] = useState(false);

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

  console.log(proposal);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td className="">{proposal.user.name}</td>
      <td>{truncateText(proposal.description, 50)}</td>
      <td>{toPersianNumbers(proposal.duration)} روز</td>
      <td> {toPersianNumbersWithComma(proposal.price)} تومان</td>
      <td
        className={`badge mt-[1.2rem] ${
          statusStyle[proposal.status].className
        }`}
      >
        {statusStyle[proposal.status].label}
      </td>
      <td>
        <button onClick={() => setOpen(true)} className="btn btn--secondary">
          تغییر وضعیت
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="تغییر وضعیت درخواست"
        >
          <ChangeProposalStatus
            proposal={proposal}
            onClose={() => setOpen(false)}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
