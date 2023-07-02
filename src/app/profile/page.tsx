"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function page() {
  const [modal, setModal] = useState(false);
  const [user, setUser]: any = useState(null);

  const router = useRouter();
  const handleLogout = async () => {
    await axios.get("/api/users/logout").then(() => {
      toast.success("logged out");
      router.push("/login");
      setModal(false);
    });
  };

  const getUserData = async () => {
    await axios
      .get("/api/users/me")
      .then((res) => setUser(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      <div
        className={`absolute h-screen w-screen bg-black/20 ${
          modal ? "flex" : "hidden"
        } flex-col justify-center items-center`}
      >
        <div className="bg-white p-5 rounded-lg flex flex-col items-center">
          <span className="">You sure want to logout?</span>
          <div className="flex gap-6 mt-5">
            <button className="bg-red-500 py-2 px-4 rounded-lg text-white  hover:bg-red-700" onClick={handleLogout}>
              Yes
            </button>
            <button
              className="bg-blue-500 py-2 px-4 rounded-lg text-white  hover:bg-blue-700"
              onClick={() => setModal(false)}
            >
              No
            </button>
          </div>
        </div>
      </div>
      {user && (
        <div className="flex flex-col text-white rounded-lg px-6 py-4 bg-orange-500 mb-6 font-medium text-2xl">
          <span>Username: {user.username}</span>
          <hr className="w-full my-2 border-t-2" />
          <span>Email: {user.email}</span>
        </div>
      )}
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700" onClick={() => setModal(true)}>
        Logout
      </button>
    </div>
  );
}

export default page;
