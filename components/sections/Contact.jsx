"use client";
import React, { useEffect, useState, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import "@/styles/services.css";
import axios from "axios";
import ThreeDotAnimation from "@/components/ThreeDotAnimation";


export default function Contact() {
  const [email, setEmail] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const subjectInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const resetInputFields = () => {
    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    subjectInputRef.current.value = "";
    messageInputRef.current.value = "";
  };

  const clearInputs = () => {
    setEmail({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const sendMail = async (e) => {
    setError("");
    setSuccess("");
    setLoading(true);
    e.preventDefault();

    try {
      // Make a POST request to your API route
      const response = await axios.post("/api/sendEmail", email);

      if (response.data.message == "Email Sent Successfully") {
        clearInputs();
        resetInputFields();

        setLoading(false);
        setSuccess(response.data.message);
        // Reset input fields after successful submission

        // Handle success, e.g., show a success message to the user
      } else {
        clearInputs();
        resetInputFields();
        setLoading(false);
        // Reset input fields after successful submission

        // Handle failure, e.g., show an error message to the user
      }
    } catch (error) {
      console.error("Error sending email:", error);
      resetInputFields();
      setLoading(false);
      setError(error.message); // Reset input fields after successful submission
      // Handle error, e.g., show an error message to the user
    }
  };

  useEffect(() => {}, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const style = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(1px)",
  });

  return (
    <animated.div ref={ref} style={style} id="contact">
      <div className=" text-white py-16 mt-16">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-8 services-heading relative">
            CONTACT
            <span className="glow-line"></span>
          </h2>
        </div>

        <div className="container mx-auto flex flex-col items-center">
          <div className="w-full md:w-1/2 md:pr-8">
            <div className="text-left">
              <form onSubmit={sendMail}>
                <div className="mb-4">
                  {error && <p className="text-orange-700">{error}</p>}
                  {success && <p className="text-green-700">{success}</p>}

                  <label htmlFor="yourName" className="block text-gray-200">
                    Your Name
                  </label>
                  <input
                    ref={nameInputRef}
                    type="text"
                    id="yourName"
                    name="yourName"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-slate-950/25 border-indigo-500"
                    placeholder="Your Name"
                    onChange={(e) => {
                      setEmail({ ...email, name: e.target.value });
                    }}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-200">
                    Your Email Address
                  </label>

                  <input
                    ref={emailInputRef}
                    type="text"
                    id="yourName"
                    name="yourName"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-slate-950/25 border-indigo-500"
                    placeholder="Your Email"
                    onChange={(e) => {
                      setEmail({ ...email, email: e.target.value });
                    }}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-200">
                    Subject
                  </label>
                  <input
                    ref={subjectInputRef}
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-slate-950/25 border-indigo-500"
                    placeholder="Subject"
                    onChange={(e) => {
                      setEmail({ ...email, subject: e.target.value });
                    }}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-200">
                    Your Message
                  </label>
                  <textarea
                    ref={messageInputRef}
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-slate-950/25 border-indigo-500"
                    placeholder="Your Message"
                    onChange={(e) => {
                      setEmail({ ...email, message: e.target.value });
                    }}
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
                  >
                    {loading ? (
                      <ThreeDotAnimation text="Send Message" />
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
}
