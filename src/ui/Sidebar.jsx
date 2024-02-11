function Sidebar({ children }) {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 border p-4">
      <ul className="flex flex-col gap-y-2">{children}</ul>
    </div>
  );
}

export default Sidebar;
