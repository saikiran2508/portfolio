import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";
import ProjectCard from "./ProjectCard";

const Works = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });
  const controls = useAnimation();
  useEffect(() => { if (inView) controls.start("visible"); }, [inView, controls]);

  return (
    <section ref={ref} className="max-w-screen-2xl mx-auto px-4">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{ hidden: { opacity: 0, y: -16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
      >
        <h3 className={`${styles.sectionSubText} text-center`}>Innovative Creations</h3>
        <h3 className={`${styles.sectionHeadText} text-center`}>Projects.</h3>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-10"
      >
        {/* 1 on mobile, 2 on md, 3 on lg+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} animate={fadeIn("up", "spring", i * 0.12, 0.7)} {...p} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Works, "projects");
