"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function page() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">
      <h1 className="mb-4 text-2xl font-semibold">Signup</h1>
      <hr />

      <form className="flex flex-col" onClick={handleSignup}>
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
          type="text"
          placeholder="email"
          value={user.email}
          id="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
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
        <input
          type="password"
          placeholder="confirm password"
          value={confirmPassword}
          id="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="px-3 py-2 outline-none border-2 rounded-lg border-gray-200 my-2"
          required
        />

        <button className="p-2 my-3 font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-700">signup</button>

        <Link href="/login" className="text-blue-500">
          Login
        </Link>
      </form>
    </div>
  );
}

export default page;
