import React, { useState } from "react";

import { firesore } from "../firebase/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const sendContact = (e) => {
    e.preventDefault();
    const sendData = async () => {
      const docRef = await addDoc(collection(firesore, "contact"), {
        name,
        email,
        message,
        contactAt: serverTimestamp(),
      });
      if (docRef) {
        setName("");
        setEmail("");
        setMessage("");
      }
    };
    sendData();
  };
  return (
    <div className="p-6">
      <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded shadow-lg">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Lets talk about everything!
            </h2>
            <div className="text-gray-700 mt-8">
              Hate forms? Send us an{" "}
              <a
                href="mailto:sahilverma.webdev@gmail.com"
                target="_blank"
                className="underline"
              >
                email
              </a>{" "}
              instead.
            </div>
            <img
              className="w-full border-2 mt-6 hidden md:block"
              src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg"
              alt=""
            />
          </div>
        </div>
        <form className="" onSubmit={(e) => sendContact(e)}>
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold">
              Full Name
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded focus:outline-none focus:shadow-outline"
              type="text"
              placeholder=""
              value={name}
              required={true}
              onChange={(e) => setName(e.target?.value)}
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Email
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded focus:outline-none focus:shadow-outline"
              type="text"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target?.value)}
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Message
            </span>
            <textarea
              className="w-full h-52 bg-gray-300 text-gray-900 mt-2 p-3 rounded focus:outline-none focus:shadow-outline"
              value={message}
              required={true}
              onChange={(e) => setMessage(e.target?.value)}
            ></textarea>
          </div>
          <div className="mt-8">
            <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
