import Table from "../../../ui/Table";
import truncateText from "../../../utils/truncateText";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import toLocaleDateShort from "../../../utils/toLocaleDateShort";
import { MdAssignmentAdd } from "react-icons/md";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import CreateProposals from "../../proposals/CreateProposals";

const projectStatus = {
  CLOSED: {
    label: "بسته شده",
    className: "badge--danger",
  },
  OPEN: {
    label: " باز",
    className: "badge--success",
  },
};

function ProjectRow({ project, index }) {
  const { title, budget, deadline, status } = project;
  const [open, setOpen] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{toPersianNumbersWithComma(budget)} تومان </td>
      <td>{toLocaleDateShort(deadline, "fa-IR")}</td>
      <td>
        <span className={`badge ${projectStatus[status].className}`}>
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <Modal
          onClose={() => setOpen(false)}
          open={open}
          title={`درخواست انجام پروژه ${title}`}
        >
          <CreateProposals
            onClose={() => setOpen(false)}
            projectId={project._id}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>
          <MdAssignmentAdd className="h-5 w-5 text-primary-900" />
        </button>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
