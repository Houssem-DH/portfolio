"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function Signup() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("signup Success", response.data);
      router.push("/login");
    } catch (error) {
      console.log("signup failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950/25">
    <div className="bg-slate-950/25 p-8 rounded-lg shadow-md w-96 text-white">
      <h2 className="text-2xl font-semibold mb-4">
        {loading ? "Processing" : "Signup"}
      </h2>
  
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-600">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-slate-950/25 text-white border-indigo-500"
          placeholder="Your Username"
          onChange={(e) => {
            setUser({ ...user, username: e.target.value });
          }}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-slate-950/25 text-white border-indigo-500"
          placeholder="Your Email"
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-600">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-slate-950/25 text-white border-indigo-500"
          placeholder="Password"
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
          required
        />
      </div>
      <div className="mb-6">
        <label className="flex items-center">
          <input type="checkbox" className="text-indigo-500 form-checkbox" defaultChecked />
          <span className="ml-2 text-gray-600">
            I agree to the{" "}
            <a href="#" className="text-blue-500">
              Terms of Service
            </a>
          </span>
        </label>
        <Link className="text-indigo-500" rel="stylesheet" href="/login">
          Already Have An Account?{" "}
        </Link>
      </div>
      <div>
        <button
          onClick={onSignup}
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          {buttonDisabled ? "No Signup" : "SignUp"}
        </button>
      </div>
    </div>
  </div>
  
  );
}
