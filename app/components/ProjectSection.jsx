"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio website- NextJS",
    description:
      "Stages of advanced web development and able to effectively self-manage during independent projects, as well as collaborate in a productive teamwork. I have always had a knack for technology and working with computers.",
    image: "/images/projects/img1.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://bitbucket.org/sg-s-workspace/portfolio/src/master/",
    previewUrl: "https://surajghodake.vercel.app/",
  },
  {
    id: 2,
    title: "E-commerce website",
    description:
      "Our website is your gateway to a diverse marketplace where convenience meets choice. Dive into an expansive collection of products ranging from fashion and electronics to home goods and beyond. Our user-friendly interface ensures easy navigation through an array of high-quality items. we aim to make your online shopping experience seamless and enjoyable. Join our community and explore a world of possibilities right at your fingertips",
    image: "/images/projects/img2.jpeg",
    tag: ["All", "Web"],
    gitUrl:
      "https://bitbucket.org/sg-s-workspace/e-shop/src/master/components/",
    previewUrl: "https://e-shop-online-shop.vercel.app/",
  },
  {
    id: 3,
    title: "Todo App",
    description:
      "Stages of advanced web development and able to effectively self-manage during independent projects, as well as collaborate in a productive teamwork. I have always had a knack for technology and working with computers.",
    image: "/images/projects/img3.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "News App",
    description:
      "Stages of advanced web development and able to effectively self-manage during independent projects, as well as collaborate in a productive teamwork. I have always had a knack for technology and working with computers.",
    image: "/images/projects/img4.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Blogs website",
    description:
      "Stages of advanced web development and able to effectively self-manage during independent projects, as well as collaborate in a productive teamwork. I have always had a knack for technology and working with computers.",
    image: "/images/projects/img5.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Markup.io",
    description:
      "Stages of advanced web development and able to effectively self-manage during independent projects, as well as collaborate in a productive teamwork. I have always had a knack for technology and working with computers.",
    image: "/images/projects/img6.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div id="projects" className="px-6 md:px-10 lg:px-20">
      <h2 className="text-white text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              imageUrl={project.image}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectSection;
