import { HiPlus } from "react-icons/hi";
import Modal from "../ui/Modal";
import { useState } from "react";
import CreateProjectForm from "../features/projects/CreateProjectForm";

function AddNewProject() {
  const [isAddNewOpen, setAddNewOpen] = useState(false);
  return (
    <div className="flex justify-between mb-7">
      <h1 className="font-bold text-xl text-secondary-700">پروژه های شما</h1>
      <button onClick={() => setAddNewOpen(true)} className="btn btn--primary">
        <div className="flex items-center justify-between gap-x-2">
          <HiPlus />
          <span>اضافه کردن پروژه</span>
        </div>
      </button>
      <Modal
        open={isAddNewOpen}
        title="اضافه کردن پروژه جدید"
        onClose={() => setAddNewOpen(false)}
      >
        <CreateProjectForm onClose={() => setAddNewOpen(false)} />
      </Modal>
    </div>
  );
}

export default AddNewProject;
