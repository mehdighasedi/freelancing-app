const colors = {
  primary: "bg-primary-100 text-primary-700",
  green: "bg-green-100 text-green-700",
  blue: "bg-blue-100 text-blue-700",
};

function Stat({ icon, title, value, color }) {
  return (
    <div className="col-span-1 grid grid-rows-2 grid-cols-[6.4rem_1fr] gap-x-4 bg-secondary-0 p-4 rounded-lg">
      <div
        className={`${colors[color]} row-span-2 flex item-center justify-center aspect-square rounded-full p-2`}
      >
        {icon}
      </div>
      <p className="text-secondary-500 font-bold text-lg self-center ">
        {title}
      </p>
      <h5 className="text-3xl font-bold text-secondary-900">{value}</h5>
    </div>
  );
}

export default Stat;
