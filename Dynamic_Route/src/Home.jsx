import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

useEffect;

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => err);
  }, []);

  return (
    <div className="flex flex-col justify-center content-center items-center bg-white h-[100vh] ">
      <h1 className="text-4xl font-semibold ">List of Users</h1>
      <div className="w-[75%] rounded bg-white border shadow-xl p-3">
      <div className="flex justify-end m-3">
      <Link to={"/create"} className="bg-green-500 mx-1 hover:bg-green-700 text-white font-bold py-1 px-3 border  rounded"> Add + </Link>
      </div>
        <table className="w-full text-md text-center rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th  scope="col" className="px-6 py-3">ID</th>
              <th  scope="col" className="px-6 py-3">Name</th>
              <th  scope="col" className="px-6 py-3">Email</th>
              <th  scope="col" className="px-6 py-3">Phone</th>
              <th  scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, i) => (
              <tr className="bg-white  even:bg-gray-100 dark:bg-gray-800 dark:border-gray-700" key={i}> 
                <td className="px-3 py-2">{user.id}</td>
                <td className="px-3 py-2">{user.name}</td>
                <td className="px-3 py-2">{user.email}</td>
                <td className="px-3 py-2">{user.phone}</td>
                <td className="px-3 py-2">
                  <Link to={`read/${user.id}`} className="bg-yellow-500 mx-1 hover:bg-yellow-700 text-white font-bold py-1 px-3 border  rounded">
                    Read
                  </Link>
                  <button className="bg-blue-500 mx-1 hover:bg-blue-700 text-white font-bold py-1 px-3 border  rounded">
                    Edit
                  </button>
                  <button className="bg-red-500 mx-1 hover:bg-red-700 text-white font-bold py-1 px-3 border  rounded">
                    Delete
                  </button>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
