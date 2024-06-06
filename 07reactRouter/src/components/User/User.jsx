import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div>
      <div className="text-center text-xl bg-green-300 px-4 py-2 font-bold ">
        {" "}
        user: {userId}
      </div>
    </div>
  );
}

export default User;
