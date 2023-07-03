"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError]: any = useState(null);
  const [success, setSuccess]: any = useState(null);

  const verifyEmail = async (token: any) => {
    await axios
      .post("/api/users/verifyemail", { token })
      .then(() => {
        setSuccess("verified");
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response.data.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam: any = urlParams.get("token");
    verifyEmail(myParam);
  }, []);

  return (
    <div className="flex items-center justify-center">
      {loading ? <span>Verifying...</span> : <div>{success ? <span>{success}</span> : <span>{error}</span>}</div>}
    </div>
  );
};

export default page;
