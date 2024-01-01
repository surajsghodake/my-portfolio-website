"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const Tab_Data = [
  {
    title: "Soft Skills",
    id: "softskills",
    content: (
      <ul className="list-disc pl-2">
        <li>Decision making</li>
        <li>Creative thinking</li>
        <li>Problem solving</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.E | Savitribai Phule Pune University | 7.78 CGPA(71%)</li>
        <li>DIPLOMA| Government Polytechnic, Kolhapur | 74.69%</li>
        <li>SSC |Maharashtra State Board | 86.80%</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Python by Google</li>
        <li>Machine Learning</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("softskills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white py-8 px-6 md:px-10 lg:px-20" id="about">
      <div className="md:grid grid-cols-2 gap-8 py-8 xl:gap-16 sm:pt-16 sm:pb-8">
        <Image
          src={"/images/portfolio-about.jpg"}
          alt="about-img"
          className=""
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Frontend Developer passionate about creating engaging web
            experiences using React and Next.js. Proficient in foundational
            frontend technologies like HTML, CSS, and JavaScript, eager to apply
            these skills to build responsive and user-friendly interfaces.
            Enthusiastic about implementing modern frameworks like React and
            leveraging Next.js for optimized web applications. Excited to
            contribute innovative ideas, learn from experienced teams.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => {
                handleTabChange("softskills");
              }}
              active={tab === "softskills"}
            >
              {" "}
              Soft Skills
            </TabButton>
            <TabButton
              selectTab={() => {
                handleTabChange("education");
              }}
              active={tab === "education"}
            >
              {" "}
              Education
            </TabButton>
            <TabButton
              selectTab={() => {
                handleTabChange("certifications");
              }}
              active={tab === "certifications"}
            >
              {" "}
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {Tab_Data.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
