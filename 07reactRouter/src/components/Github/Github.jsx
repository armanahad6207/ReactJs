import { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/armanahad6207").then((res) =>
      res.json().then((data) => {
        setData(data);
        console.log(data);
      })
    );
  }, []);
  return (
    <div className="flex justify-center items-center flex-col gap-2 py-5 bg-gray-600 text-2xl text-white">
      <h1> Name :- {data.name}</h1>
      <h1> Bio :- {data.bio}</h1>
      <></>
    </div>
  );
}

export default Github;
