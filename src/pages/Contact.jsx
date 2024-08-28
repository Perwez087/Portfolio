import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail, IoLocationSharp } from "react-icons/io5";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "efd40b06-b126-4e8d-8a54-e134f799b40c");
    
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Message sent Successfully!");
        event.target.reset();
      } else {
        toast.error("Error submitting form. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div id='contact' className="min-h-screen flex items-center justify-center bg-black text-white lg:p-24 p-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10">

        <div className="lg:p-10 p-5 w-full md:w-1/2 bg-[#140C1C] rounded-lg shadow-lg">
          <h2 className="bg-gradient-to-r from-[#5d34af] to-purple-100 bg-clip-text text-transparent font-bold xl:text-5xl md:text-3xl text-xl py-4">Let's work together!</h2>
          <p className="mb-6">
            I design and code beautifully simple things and I love what I do.
            Just simple like that!
          </p>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                required
                className="w-full bg-black text-white p-3 border rounded-md border-gray-600 outline-none focus:outline-purple-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                required
                className="w-full bg-black text-white p-3 border rounded-md border-gray-600 outline-none focus:outline-purple-500"
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                className="w-full bg-black text-white p-3 border rounded-md border-gray-600 outline-none focus:outline-purple-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                required
                inputMode="numeric"
                pattern="[0-9]*"
                className="w-full bg-black text-white p-3 border rounded-md border-gray-600 outline-none focus:outline-purple-500"
              />
            </div>
            <select
              name="option"
              required
              className="w-full bg-black text-white p-3 border rounded-md border-gray-600 outline-none"
            >
              <option value="">—Please choose an option—</option>
              <option value="Web Design">Web Design</option>
              <option value="App">App</option>
              <option value="UI/UX">UI/UX</option>
            </select>
            <textarea
              name="message"
              placeholder="Message"
              required
              className="w-full bg-black text-white p-3 border rounded-md border-gray-600 outline-none focus:outline-purple-500 h-32 resize-none"
            />
            <button type="submit" className='bg-gradient-to-l hover:bg-gradient-to-r from-slate-800 to-[#7D4AE6] px-8 py-3 rounded-full shadow-xl font-bold transition duration-300 ease-in-out'>
              Send Message
            </button>
          </form>
        </div>

        <div className="p-8 w-full md:w-1/2 flex flex-col justify-center">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-gradient-to-r from-[#452b78] to-[#7D4AE6] rounded-full">
                <span><FaPhoneAlt /></span>
              </div>
              <a href="tel:+91101177006" className="text-white hover:text-purple-500 transition duration-300">
                +91 9110177006
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-gradient-to-r from-[#452b78] to-[#7D4AE6] rounded-full">
                <span><IoMail /></span>
              </div>
              <p>parwez4568@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-gradient-to-r from-[#452b78] to-[#7D4AE6] rounded-full">
                <span><IoLocationSharp /></span>
              </div>
              <p>Noida Sector - 62 , Uttar Pradesh</p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
