import Image from "next/image";
import React from "react";

const skills = [
  {
    title: "HTML5",
    img: "/skills/html5.svg",
    alt: "HTML5",
    shadowColor: "#E44D26",
  },
  {
    title: "CSS3",
    img: "/skills/css3.webp",
    alt: "CSS3",
    shadowColor: "#274FE4",
  },
  {
    title: "Javascript",
    img: "/skills/javascript.webp",
    alt: "Javascript",
    shadowColor: "#F0DC4E",
  },
  {
    title: "React",
    img: "/skills/reactjs.svg",
    alt: "React",
    shadowColor: "#61DAFB",
  },
  {
    title: "Next JS",
    img: "/skills/nextjs.webp",
    alt: "Next JS",
    shadowColor: "#A7A7A7",
  },
  {
    title: "Redux",
    img: "/skills/redux.webp",
    alt: "Redux",
    shadowColor: "#754AB6",
  },
  {
    title: "Tailwind CSS",
    img: "/skills/tailwindcss.webp",
    alt: "Tailwind CSS",
    shadowColor: "#37BDF8",
  },
  {
    title: "MongoDB",
    img: "/skills/mongodb.webp",
    alt: "MongoDB",
    shadowColor: "#479944",
  },
  {
    title: "MySQL",
    img: "/skills/mysql.svg",
    alt: "MySQL",
    shadowColor: "#00758F",
  },
  {
    title: "Git",
    img: "/skills/git.webp",
    alt: "Git",
    shadowColor: "#EF5034",
  },
  {
    title: "GitHub",
    img: "/skills/github.webp",
    alt: "GitHub",
    shadowColor: "#5e5e5e",
  },
  {
    title: "RESTful API's",
    img: "/skills/api.webp",
    alt: "RESTful API's",
    shadowColor: "#c9c9c9",
  },
  {
    title: "Bootstrap",
    img: "/skills/bootstrap.svg",
    alt: "Bootstrap",
    shadowColor: "#6f42c1",
  },
  {
    title: "Shopify",
    img: "/skills/shopify.png",
    alt: "Shopify",
    shadowColor: "#96bf48",
  },
  {
    title: "Express.Js",
    img: "/skills/express.svg",
    alt: "Express.Js",
    shadowColor: "#919191",
  },
];

const Skills = () => {
  return (
    <div id="skills" className="py-8 px-6 md:px-10 lg:px-20">
      <div className="bg-indigo-700 h-[0.32rem] w-8 rounded-full my-0.5"></div>
      <p className="text-xl font-bold text-white dark:text-gray-200">Skills</p>
      <p className="text-3xl font-bold text-indigo-700 pt-2">What I Can Do</p>
      <p className="text-sm text-[#ADB7BE] dark:text-gray-400 font-medium py-2">
        # These are the technologies I&apos;ve worked with
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 py-5">
        {skills.map((skill) => {
          return (
            <div
              key={skill.title}
              style={{
                boxShadow: `0px 4px 6px ${skill.shadowColor}`,
                backgroundColor: "#374151",
              }}
              className={`bg-slate-800 cursor-pointer scale-100 hover:scale-105 ease-in duration-200 rounded-xl flex flex-col justify-center items-center`}
            >
              <Image
                src={skill.img}
                alt={skill.alt}
                height={80}
                width={80}
                className="bg-white p-1 mt-1"
              />
              <p className="py-1 text-slate-200">{skill.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
