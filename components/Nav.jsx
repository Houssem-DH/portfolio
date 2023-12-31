"use client";
import { useEffect, useState,useRef } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo2.png";
import { signOut, getSession } from "next-auth/react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const [session, setSession] = useState(null);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    const session = await getSession();
    setSession(session);

    if (session) {
      setUsername(session.user.username);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="sticky top-0  bg-slate-900 left-0 w-full  z-50  ">
      <nav className="bg-slate-900 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9 border-b-2 border-indigo-500  ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  className="h-8 w-8"
                  src={logo}
                  alt="Workflow"
                  width={64}
                  height={64}
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href={"/"}
                    className="  hover:shadow-indigo-500/100 hover:shadow-lg text-gray-300 hover:bg-indigo-500/40 hover:text-white px-3 py-2 rounded-md text-sm font-medium "
                  >
                    Home
                  </Link>

                  <Link
                    href="#about"
                    className="hover:shadow-indigo-500/100 hover:shadow-lg text-gray-300 hover:bg-indigo-500/40 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About Me
                  </Link>

                  <Link
                    href="#services"
                    className="hover:shadow-indigo-500/100 hover:shadow-lg text-gray-300 hover:bg-indigo-500/40 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Services
                  </Link>
                  <Link
                    href="#projects"
                    className="hover:shadow-indigo-500/100 hover:shadow-lg text-gray-300 hover:bg-indigo-500/40 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Projects
                  </Link>
                  <Link
                    href="#contact"
                    className="hover:shadow-indigo-500/100 hover:shadow-lg text-gray-300 hover:bg-indigo-500/40 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </Link>

                  <Link
                    href="/university"
                    className="hover:shadow-indigo-500/100 hover:shadow-lg text-gray-300 hover:bg-indigo-500/40 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    University
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:flex space-x-4">
              {isLoading ? (
                <div></div>
              ) : (
                <>
                  {session ? (
                    <div>
                      <Link
                        href="#"
                        className="hover:shadow-indigo-500/100 hover:shadow-lg text-gray-300 hover:bg-indigo-500/40 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Welcome, {username}!
                      </Link>
                      <button
                        className="hover:shadow-indigo-500/100 hover:shadow-lg text-gray-300 hover:bg-indigo-500/40 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        onClick={() => signOut()}
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        className="hover:shadow-indigo-500/100 hover:shadow-lg text-gray-300 hover:bg-indigo-500/40 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Login
                      </Link>
                      <Link
                        href="/signup"
                        className="hover:shadow-indigo-500/100 hover:shadow-lg text-gray-300 hover:bg-indigo-500/40 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Signup
                      </Link>
                    </>
                  )}
                </>
              )}
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={(el) => (mobileMenuRef.current = el)}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Link
                  href={"/"}
                  className="hover:shadow-indigo-500/100 hover:shadow-lg text-gray-300 hover:bg-indigo-500/40 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>

                <Link
                  href="#about"
                  className="hover:shadow-indigo-500/100 hover:shadow-lg text-gray-300 hover:bg-indigo-500/40 block px-3 py-2 rounded-md text-base font-medium"
                >
                  About Me
                </Link>

                <Link
                  href="#services"
                  className="hover:shadow-indigo-500/100 hover:shadow-lg text-gray-300 hover:bg-indigo-500/40 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </Link>
                <Link
                  href="#projects"
                  className="hover:shadow-indigo-500/100 hover:shadow-lg text-gray-300 hover:bg-indigo-500/40 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </Link>
                <Link
                  href="#contact"
                  className="hover:shadow-indigo-500/100 hover:shadow-lg text-gray-300 hover:bg-indigo-500/40 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </Link>

                <Link
                  href="/university"
                  className="hover:shadow-indigo-500/100 hover:shadow-lg text-gray-300 hover:bg-indigo-500/40 block px-3 py-2 rounded-md text-base font-medium"
                >
                  University
                </Link>

                {isLoading ? (
                  <div></div>
                ) : (
                  <>
                    {session ? (
                      <div>
                        <Link
                          href="#"
                          className="hover:shadow-indigo-500/100 hover:shadow-lg text-gray-300 hover:bg-indigo-500/40 block px-3 py-2 rounded-md text-base font-medium"
                        >
                          Welcome, {username}!
                        </Link>
                        <button
                          className="hover:shadow-indigo-500/100 hover:shadow-lg text-gray-300 hover:bg-indigo-500/40 block px-3 py-2 rounded-md text-base font-medium"
                          onClick={() => signOut()}
                        >
                          Logout
                        </button>
                      </div>
                    ) : (
                      <>
                        <Link
                          href="/login"
                          className="hover:shadow-indigo-500/100 hover:shadow-lg text-gray-300 hover:bg-indigo-500/40 block px-3 py-2 rounded-md text-base font-medium"
                        >
                          Login
                        </Link>
                        <Link
                          href="/signup"
                          className="hover:shadow-indigo-500/100 hover:shadow-lg text-gray-300 hover:bg-indigo-500/40 block px-3 py-2 rounded-md text-base font-medium"
                        >
                          Signup
                        </Link>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
