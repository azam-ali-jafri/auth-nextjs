"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function page() {
  const router = useRouter();

  const [user, setUser] = useState({
    password: "",
    username: "",
  });

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(false);
    await axios
      .post("/api/users/login", user)
      .then(() => {
        setLoading(false);
        router.push("/profile");
        toast.success("successfully logged in");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">
      <h1 className="mb-4 text-2xl font-semibold">Login</h1>
      <hr />

      <form className="flex flex-col" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="username"
          value={user.username}
          id="username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="px-3 py-2 outline-none border-2 rounded-lg border-gray-200 my-2"
          required
        />
        <input
          type="password"
          placeholder="password"
          value={user.password}
          id="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="px-3 py-2 outline-none border-2 rounded-lg border-gray-200 my-2"
          required
        />

        <button
          className="p-2 my-3 font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          disabled={loading && true}
        >
          Login
        </button>

        <Link href="/signup" className="text-blue-500">
          Signup
        </Link>
      </form>
      <Toaster />
    </div>
  );
}

export default page;
