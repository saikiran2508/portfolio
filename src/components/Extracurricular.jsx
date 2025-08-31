import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { styles } from "../styles";
import { extracurricular } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

import "swiper/css";
import "swiper/css/pagination";

const CertificationCard = ({ title, icon, type, date, points = [], credential }) => (
  <div className="cert-card group">
    <div className="w-full h-14 mb-4 flex items-center justify-center">
      <img src={icon} alt={title} className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
    </div>

    <h3 className="text-white font-semibold text-[22px] leading-7 mb-2">{title}</h3>
    <p className="text-secondary text-[13px]">{type}</p>
    <p className="text-secondary text-[13px] mb-3">{date}</p>

    <ul className="list-disc ml-5 space-y-1 flex-1">
      {points.slice(0, 2).map((p, i) => (
        <li key={i} className="text-white/90 text-[13px] leading-5">
          {p}
        </li>
      ))}
    </ul>

    <div className="mt-6 flex justify-end">
      <a
        href={credential}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-cred"
      >
        View Credential
      </a>
    </div>
  </div>
);

const CertificationsSlider = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => { if (isInView) controls.start("visible"); }, [isInView, controls]);

  return (
    <div ref={sectionRef}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{ hidden: { opacity: 0, y: -16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
      >
        <p className={`${styles.sectionSubText} text-center`}>Continuous Learning</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Certifications</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.4, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-16"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          centeredSlides
          slidesPerView="auto"
          spaceBetween={30}
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="cert-swiper"
        >
          {extracurricular.map((c, idx) => (
            <SwiperSlide key={`cert-${idx}`} className="cert-slide">
              <CertificationCard {...c} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <style jsx global>{`
        .cert-swiper {
          width: 100%;
          padding: 30px 0 60px 0;
        }

        .cert-slide {
          width: 520px; /* main card width */
          display: flex;
          justify-content: center;
          height: auto;
        }

        @media (max-width: 1024px) {
          .cert-slide { width: 460px; }
        }
        @media (max-width: 768px) {
          .cert-slide { width: 85vw; }
        }

        /* Slide transition style */
        .swiper-slide {
          transition: transform 0.4s ease, opacity 0.4s ease, filter 0.4s ease;
          opacity: 0.5;
          filter: blur(1px);
          transform: scale(0.9);
        }
        .swiper-slide-active {
          transform: scale(1.05);
          opacity: 1;
          filter: blur(0);
          z-index: 2;
        }

        /* Pagination dots */
        .swiper-pagination-bullet {
          background: #915eff;
          opacity: 0.4;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #c084fc;
          opacity: 1;
          width: 14px;
          height: 14px;
        }

        /* Card style */
        .cert-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          border-radius: 20px;
          padding: 24px;
          background: linear-gradient(145deg, rgba(40,40,70,0.95), rgba(20,20,40,0.9));
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 12px 30px rgba(0,0,0,0.4);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .cert-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(145,94,255,0.4);
        }

        /* Button */
        .btn-cred {
          font-size: 13px;
          font-weight: 700;
          color: #fff;
          padding: 8px 14px;
          border-radius: 12px;
          background: linear-gradient(90deg, #6d28d9, #4c1d95);
          box-shadow: 0 6px 18px rgba(109,40,217,0.4);
          transition: all 0.3s ease;
        }
        .btn-cred:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(109,40,217,0.7);
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(CertificationsSlider, "extracurricular");
