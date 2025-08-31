import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";

const ProjectCard = ({ name, description, tags, image, source_code_link, live_project_link, animate }) => {
  return (
    <motion.div variants={animate} className="h-full">
      <Tilt options={{ max: 20, scale: 1, speed: 400 }} className="bg-tertiary rounded-2xl p-5 h-full flex flex-col">
        {/* keep images consistent */}
        <div className="relative w-full aspect-[16/9]">
          <img src={image} alt={name} className="absolute inset-0 w-full h-full object-cover rounded-xl" />
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="absolute top-3 right-3 black-gradient w-10 h-10 rounded-full flex items-center justify-center"
            aria-label="GitHub"
          >
            <img src={github} alt="" className="w-1/2 h-1/2 object-contain" />
          </button>
        </div>

        <div className="mt-4 flex flex-col flex-1">
          <h3 className="text-white font-bold text-[20px] leading-6">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] flex-1">{description}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t, i) => (
              <span key={i} className={`text-[12px] ${t.color}`}>#{t.name}</span>
            ))}
          </div>

          {live_project_link && (
            <a href={live_project_link} target="_blank" rel="noopener noreferrer" className="mt-4">
              <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md font-medium">
                Live Project
              </button>
            </a>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
