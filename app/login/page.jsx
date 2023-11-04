"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loding, setLoding] = useState(false);

  const onLogin = async () => {
    try {
      setLoding(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login Success", response.data);
      toast.success("Login Success");
      router.push("/");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setLoding(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">
          {loding ? "Prcessing" : " Login"}
        </h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Your Email"
            required
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
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
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Password"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            required
          />
        </div>
        <div className="mb-6">
          <label className="flex items-center">
            <input type="checkbox" className="text-blue-500 form-checkbox" />
            <span className="ml-2 text-gray-600">Remember me</span>
          </label>
        </div>
        <div>
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={onLogin}
          >
            {buttonDisabled ? "No login" : "Login"}
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Dont have an account?{" "}
            <Link href={"/signup"} className="text-blue-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
