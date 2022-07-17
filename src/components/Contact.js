import React from "react";
import { useState } from "react";

const Contact = () => {
  const [inputs, setInputs] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    const url = "https://getform.io/f/4395aaa9-1fe9-4dc9-8a0d-6c2057bd27f3";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs),
    });
    setSubmitting(false);
    if (response.status !== 200) {
      alert("submission failed");
      throw new Error("Submission failed");
    }
    alert("Form submitted");
    setInputs("");
  };
  return (
    <div
      name="contact"
      className="w-full h-auto bg-gradient-to-b from-black pt-24 to-gray-800 flex justify-center items-center p-4"
    >
      <form
        onSubmit={submitHandler}
        autoComplete="off"
        className="flex flex-col max-w-[600px] w-full md:mt-[100px]"
      >
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4 font-medium tracking-wide">
            // Submit to contact or leave a mail
          </p>
        </div>
        <input
          className="bg-transparent border-[1px] rounded-sm border-blue-200 p-[10px] text-md tracking-wide outline-none text-gray-100 "
          type="text"
          placeholder="Name"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
        />
        <input
          className="my-4 p-[10px] bg-transparent border-[1px] rounded-sm border-blue-200 text-md tracking-wide outline-none text-gray-100"
          type="text"
          placeholder="Email"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
        />
        <textarea
          className="bg-transparent border-[1px] rounded-sm border-blue-200 p-[10px] text-md tracking-wide outline-none text-gray-100"
          name="message"
          rows="10"
          value={inputs.message || ""}
          onChange={handleChange}
          placeholder="Enter message"
        ></textarea>
        <button
          disabled={submitting}
          className="text-white text-lg tracking-wide border-2 hover:bg-cyan-600 hover:font-medium hover:border-cyan-600 px-4 py-3 my-6 mx-auto flex items-center duration-150"
        >
          {submitting ? "Submitting..." : "Connect"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
