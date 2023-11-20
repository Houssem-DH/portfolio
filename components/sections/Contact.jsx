"use client";
import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const style = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(400px)",
  });
  return (
    <animated.div
      ref={ref}
      style={style}
      
    >
      <div className="bg-slate-950/25 text-white py-16 mt-16">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-8 services-heading relative">
            CONTACT
            <span className="glow-line"></span>
          </h2>
        </div>

        <div className="container mx-auto flex flex-col items-center">
          <div className="w-full md:w-1/2 md:pr-8">
            <form className="text-left">
              <div className="mb-4">
                <label htmlFor="yourName" className="block text-gray-200">
                  Your Name
                </label>
                <input
                  type="text"
                  id="yourName"
                  name="yourName"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-slate-950/25 border-indigo-500"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-200">
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-slate-950/25 border-indigo-500"
                  placeholder="Your Email Address"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-200">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-slate-950/25 border-indigo-500"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-200">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-slate-950/25 border-indigo-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </animated.div>
  );
}
