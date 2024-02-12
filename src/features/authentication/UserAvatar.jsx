import useUser from "./useUser";

const roles = {
  FREELANCER: "فریلنسر",

  ADMIN: "مدیر",

  OWNER: "کارفرما",
};

function UserAvatar() {
  const { user } = useUser();

  return (
    <div className="flex items-center gap-2 text-secondary-500 ">
      <img
        className="w-7 h-7 rounded-full object-cover object-center"
        src="/user.jpg"
        alt="user-account"
      />
      <div className="flex flex-col justify-center items-center">
        <span>{user?.name}</span>
        <span className="text-[11px]">{roles[user?.role]}</span>
      </div>
    </div>
  );
}

export default UserAvatar;
