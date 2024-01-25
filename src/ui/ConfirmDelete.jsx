function ConfirmDelete({ resourceName, onClose, disabled, onConfirm }) {
  return (
    <div>
      <h1 className="font-bold text-base mb-8">
        آیا از حذف پروژه {resourceName} اطمینان کامل دارید؟
      </h1>
      <div className="flex justify-between items-center gap-x-16">
        <button
          onClick={onConfirm}
          disabled={disabled}
          className="btn btn--danger py-3 flex-1 hover:bg-red-500 hover:text-white"
        >
          تایید
        </button>
        <button
          onClick={onClose}
          disabled={disabled}
          className="btn btn--primary flex-1"
        >
          لغو
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
