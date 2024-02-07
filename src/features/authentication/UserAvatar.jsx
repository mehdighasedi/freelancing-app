import useUser from "./useUser";

function UserAvatar() {
  const { user } = useUser();
  console.log(user);
  return (
    <div className="flex items-center gap-2 text-secondary-500 ">
      <img
        className="w-7 h-7 rounded-full object-cover object-center"
        src="/user.jpg"
        alt="user-account"
      />
      <span>{user?.name}</span>
    </div>
  );
}

export default UserAvatar;
