import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="bg-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m{" "}
            </span>
            Suraj Ghodake
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            consequatur atque labore, exercitationem est cumque.
          </p>
          <div>
            <Link href={"#hireme"}>
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-indigo-700 dark:bg-indigo-600 hover:bg-indigo-800 text-white">
                Hire Me
              </button>
            </Link>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-indigo-700 dark:bg-indigo-600 hover:bg-indigo-800 text-white mt-3">
              <Link
                href={"/Suraj_Ghodake_CV.pdf"}
                target="_black"
                className="block bg-slate-900 hover:bg-slate-800 rounded-full px-5 py-2"
              >
                Download CV
              </Link>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="">
            <Image
              src={"/images/hero-img.jpg"}
              alt="hero-image"
              className="rounded-full"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
