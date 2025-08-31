import React, { useEffect } from "react";
import { motion } from "framer-motion";

// Local wrapper so export signature remains the same without external deps
const SectionWrapper = (Component, _id) => function Wrapped(props) {
  return <Component {...props} />;
};

// ===== Unified skill data from resume, projects, and work experience =====
const programming = [
  { name: "Python" },
  { name: "Java" },
  { name: "C++" },
  { name: "JavaScript" },
  { name: "R" },
  { name: "Julia" },
  { name: "SAS" },
];

const Visualization_tools = [
  { name: "Tableau" },
  { name: "Power BI" },
  { name: "Matplotlib" },
  { name: "Seaborn" },
  { name: "EDA" },
  { name: "TensorBoard" },
  { name: "Gephi" },
  { name: "QGIS" },
];

const ML_Frameworks = [
  { name: "Keras" },
  { name: "TensorFlow" },
  { name: "PyTorch" },
  { name: "Scikit-learn" },
  { name: "MLflow" },
  { name: "XGBoost" },
  { name: "spaCy" },
  { name: "Transformers" },
  { name: "JAX" },
];

const ML_Techniques = [
  { name: "Regression" },
  { name: "Classification" },
  { name: "Clustering" },
  { name: "Recommender Systems" },
  { name: "Deep Learning" },
  { name: "NLP" },
  { name: "CNN" },
  { name: "Transfer Learning" },
  { name: "Reinforcement Learning" },
  { name: "Time Series (ARIMA/SARIMA)" },
];

const Databases_Technologies = [
  { name: "SQL" },
  { name: "MySQL" },
  { name: "MongoDB" },
  { name: "NoSQL" },
  { name: "Docker" },
  { name: "Git" },
  { name: "AWS" },
  { name: "Azure" },
  { name: "BigQuery" },
  { name: "Spark" },
  { name: "Kafka" },
  { name: "Airflow" },
  { name: "DVC" },
  { name: "Flask" },
  { name: "Heroku" },
  { name: "AWS EC2" },
  { name: "Elastic Beanstalk" },
  { name: "AWS IoT Core" },
];

// ===== Inline CSS =====
const CSS = `
.skills-visa { padding: 2.5rem 0 0 0; }
.skills-visa .container { max-width: 1100px; margin: 0 auto; padding: 0 1.25rem; }
.text-center { text-align: center; }
.section-sub { color: #9fb4d3; font-size: 0.95rem; margin: 0; }
.section-headline { color: #e6f4ff; font-size: 2.25rem; line-height: 1.2; margin: 0.35rem 0 1.25rem 0; }

.grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
@media (max-width: 900px) { .grid { grid-template-columns: 1fr; } }

.skill-card {
  background: #0f1723;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.45) inset, 0 8px 24px rgba(0,0,0,0.35);
  border: 1px solid rgba(255,255,255,0.06);
}

.card-head { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
.card-icon {
  width: 48px; height: 48px; border-radius: 999px;
  display: grid; place-items: center; overflow: hidden;
  background: radial-gradient(120% 120% at 30% 20%, #1fb2ff 0%, #7c3aed 60%, #111827 100%);
  color: #e6f4ff; font-weight: 700; font-size: 18px; letter-spacing: 0.5px;
  box-shadow: 0 6px 20px rgba(31,178,255,0.35);
}
.card-title {
  font-size: 22px; font-weight: 700; letter-spacing: 0.2px;
  background: linear-gradient(90deg, #8b5cf6, #22d3ee);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text; color: transparent;
}

.chip-wrap { display: flex; flex-wrap: wrap; gap: 12px; }
.chip {
  background: #101a27; color: #d7e2f1; font-size: 14px; line-height: 1;
  padding: 10px 14px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 2px 0 rgba(255,255,255,0.05) inset, 0 10px 16px rgba(0,0,0,0.25);
  transition: transform .15s ease, background .15s ease, border-color .15s ease;
}
.chip:hover { transform: translateY(-1px); background: #132033; border-color: rgba(120,170,255,0.35); }
`;

// ===== Icons (inline SVG) =====
const CategoryIcon = ({ type }) => {
  const common = { width: 22, height: 22, fill: "#e6f4ff" };
  switch (type) {
    case "tech":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M10 20h4" stroke="#e6f4ff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "security":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 22s8-3 8-10V6l-8-4-8 4v6c0 7 8 10 8 10z" fill="#e6f4ff"/>
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="9" fill="#e6f4ff"/>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3A3 3 0 0016 5a3 3 0 00-2.82 2H10c-1.1 0-2 .9-2 2v1H6c-1.66 0-3 1.34-3 3v5h2v-5h2v5h10v-5h2v5h2v-5c0-1.66-1.34-3-3-3h-2v-1c0-1.1-.9-2-2-2h-3.18A3 3 0 0016 11z" fill="#e6f4ff"/>
        </svg>
      );
  }
};

// ===== Motion presets =====
const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } };

const Chip = ({ label }) => (
  <motion.span variants={item} className="chip">{label}</motion.span>
);

const SkillsCard = ({ icon, title, items }) => (
  <motion.div variants={item} className="skill-card">
    <div className="card-head">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
    </div>
    <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="chip-wrap">
      {items.map((t) => (
        <Chip key={t} label={t} />
      ))}
    </motion.div>
  </motion.div>
);

const SkillsSection = () => {
  const groups = [
    { title: "Programming Languages", icon: <CategoryIcon type="tech" />, items: programming.map((x) => x.name) },
    { title: "Visualization & Tools", icon: <CategoryIcon type="people" />, items: Visualization_tools.map((x) => x.name) },
    { title: "ML Algorithms and Frameworks", icon: <CategoryIcon type="ai" />, items: [...ML_Frameworks.map((x) => x.name), ...ML_Techniques.map((x) => x.name)] },
    { title: "Databases & Cloud", icon: <CategoryIcon type="security" />, items: Databases_Technologies.map((x) => x.name) },
  ];

  // Runtime sanity checks
  useEffect(() => {
    if (typeof document === "undefined") return;
    const cardCount = document.querySelectorAll('.skill-card').length;
    console.assert(cardCount === groups.length, `Expected ${groups.length} cards, found ${cardCount}`);
    const totalItems = groups.reduce((acc, g) => acc + g.items.length, 0);
    console.assert(document.querySelectorAll('.chip').length === totalItems, 'Chip count mismatch');
    console.assert(Array.from(document.querySelectorAll('.chip')).some(c => c.textContent === 'Python'), 'Missing Python chip');
    console.assert(Array.from(document.querySelectorAll('.chip')).some(c => c.textContent.includes('ARIMA')), 'Missing Time Series chip');
  }, []);

  return (
    <section id="skills" className="skills-visa">
      <style>{CSS}</style>
      <div className="container">
        <div className="section-head text-center">
          <p className="section-sub">Skills & Expertise</p>
          <h2 className="section-headline">Skills</h2>
        </div>
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid">
          {groups.map((g) => (
            <SkillsCard key={g.title} icon={g.icon} title={g.title} items={g.items} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(SkillsSection, "skills");
