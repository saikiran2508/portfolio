import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { extracurricular } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({ index, title, icon, type, date, points = [], credential }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="bg-tertiary p-6 rounded-2xl w-full flex flex-col h-full border border-white/5 hover:border-purple-500/50 transition-colors group"
    style={{
      background: "linear-gradient(145deg, rgba(40,40,70,0.8), rgba(20,20,40,0.9))",
    }}
  >
    <div className="w-full h-14 mb-4 flex items-center justify-start">
      <img 
        src={icon} 
        alt={title} 
        className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-110" 
      />
    </div>

    <div className="flex-1">
      <h3 className="text-white font-bold text-[20px] leading-tight mb-1">{title}</h3>
      <p className="text-secondary text-[12px] uppercase tracking-wider">{type}</p>
      <p className="text-secondary text-[13px] mb-4">{date}</p>

      <ul className="list-disc ml-5 space-y-2">
        {points.map((p, i) => (
          <li key={i} className="text-white/80 text-[13px] leading-relaxed">
            {p}
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-8">
      <a
        href={credential}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-[13px] font-bold py-2.5 px-5 rounded-xl transition-all shadow-lg hover:shadow-purple-500/20"
      >
        View Credential
      </a>
    </div>
  </motion.div>
);

const CertificationsGrid = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Continuous Learning</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Certifications</h2>
      </motion.div>

      {/* Grid Layout Container */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {extracurricular.map((cert, index) => (
          <CertificationCard 
            key={`cert-${index}`} 
            index={index} 
            {...cert} 
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(CertificationsGrid, "extracurricular");