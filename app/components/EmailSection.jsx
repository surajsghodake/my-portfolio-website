"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Social from "./components/social";

const HireMe = ({ id }) => {
  const [data, setData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validation = () => {
    if (!/^[A-Za-z ]+$/.test(data["name"])) {
      toast.error("Please enter your name!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data["email"])
    ) {
      toast.error("Please ensure your email!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (data["message"] === "") {
      toast.error("Please ensure your Message!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      setSubmitted(true);
      fetch("http://localhost:3000/api/sendMail", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.status === 200) {
          toast("Yay! Your message has been sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setSubmitted(false);
          setData({
            email: "",
            name: "",
            message: "",
          });
        } else if (res.send === false) {
          toast.error("Sorry! Please try again after some time!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setSubmitted(false);
        }
      });
    }
  };

  return (
    <section id="hireme">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="dark:bg-slate-800 pt-20 px-6 md:px-20 lg:px-40 xl:px-64">
        <div className="bg-indigo-700 h-[0.32rem] w-12 rounded-full my-0.5"></div>
        <p className="text-xl font-bold text-[#ADB7BE] dark:text-gray-200">
          Hire me
        </p>
        <p className="text-3xl font-bold text-indigo-700 pt-2">Get In Touch</p>
        <p className="text-sm text-[#ADB7BE] dark:text-gray-400 font-medium py-2">
          # Feel free to contact me at any time through any method below
        </p>
        <div className="grid grid-cols-1 md:grid-cols- gap-10">
          <form className="md:pr-16 pt-5 md:pb-12" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-bold text-[#ADB7BE] dark:text-white"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={(e) => handleChange(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 outline-none"
                placeholder="your.name@company.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-bold text-[#ADB7BE] dark:text-white"
              >
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                value={data.name}
                onChange={(e) => handleChange(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 outline-none"
                placeholder="Your good name"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-bold text-[#ADB7BE] dark:text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={data.message}
                onChange={(e) => handleChange(e)}
                className="resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:border-gray-500 outline-none"
                placeholder="Your message"
                required
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className={`flex gap-2 ${
                !submitted
                  ? "bg-indigo-700 dark:bg-indigo-600 hover:bg-indigo-800 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                  : "bg-indigo-500 dark:bg-indigo-500"
              } text-white focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
            >
              {!submitted ? (
                <span>Send It!</span>
              ) : (
                <>
                  <span>Sending...</span>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-500 fill-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </>
              )}
            </button>
            <div role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HireMe;

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// const EmailSection = () => {
//   return (
//     <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
//       <div>
//         <h5 className="text-xl font-bold text-white my-2">
//           Let&apos;s Connect
//         </h5>
//         <p className="text-[#ADB7BE] mb-4 max-w-md">
//           I&apos;m currently looking for new opportunities, my inbox is always
//           open. Whether you have a question or just want to say hi, I&apos;ll
//           try my best to get back to you!
//         </p>
//         <div className="socials flex flex-row gap-2">
//           <Link href={"github.com"}>
//             <Image
//               src={"/github.svg"}
//               width={40}
//               height={40}
//               alt="github icon"
//             />
//           </Link>
//           <Link href={"linkedin.com"}>
//             <Image
//               src={"/linkedin.svg"}
//               width={40}
//               height={40}
//               alt="linkedin icon"
//             />
//           </Link>
//         </div>
//       </div>
//       <div>
//         <form className="flex flex-col">
//           <div className="mb-3">
//             <label
//               htmlFor="email"
//               className="text-white block text-sm mb-2 font-medium"
//             >
//               Your Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="bg-[#18191E] border border-[#33353f] mb-2 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//               required
//               placeholder="abc@xyz.com"
//             />
//           </div>

//           <div className="mb-3">
//             <label
//               htmlFor="subject"
//               className="text-white block text-sm mb-2 font-medium"
//             >
//               Subject
//             </label>
//             <input
//               type="text"
//               id="subject"
//               className="bg-[#18191E] border border-[#33353f] mb-2 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//               required
//               placeholder="let's get connect"
//             />
//           </div>
//           <div className="mb-3">
//             <label
//               htmlFor="message"
//               className="text-white block text-sm mb-2 font-medium"
//             >
//               Message
//             </label>
//             <textarea
//               name="message"
//               id="message"
//               className="bg-[#18191E] border border-[#33353f] mb-2 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//               cols="30"
//               rows="2"
//               placeholder="Write your message here..."
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default EmailSection;
