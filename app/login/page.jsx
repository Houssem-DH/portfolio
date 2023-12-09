"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setError("");
  };
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    signIn("credentials", {
      email,
      password,
      redirect: false,
    })
      .then((res) => {
        if (res && res.error) {
          
          const errorObject = JSON.parse(res.error);
          setError(errorObject.message);
          console.log("Error response:", errorObject);
        } else {
          clearInputs();
    
          router.push("/");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.error("An error occurred during login:", error);
        // Handle the error as needed
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950/25">
      <div className="bg-slate-950/25 p-8 rounded-lg shadow-md w-96 text-white">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
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
              required
              onChange={handleEmailChange}
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
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="text-indigo-500 form-checkbox"
              
            />
            <span className="ml-2 text-gray-600">Remember me</span>
          </label>
        </div>

          <div>
            <button
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
              type="submit"
            >
              Login
            </button>
            {error && <p>{error}</p>}
          </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href={"/signup"} className="text-indigo-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
