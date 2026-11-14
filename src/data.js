// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Sai Kiran Gopu",
  roles: ["Data Scientist", "ML Engineer", "Data Analyst"],
  tagline:
    "I build ML and LLM systems that are measured, not just demoed: from GraphRAG over a congressional knowledge graph to forecasting models in production.",
  location: "Rochester, NY",
  status: "M.S. Data Science, RIT · Graduating December 2026 · Open to full-time roles",
  email: "sg2755@rit.edu",
  phone: "585-370-3742",
  phoneHref: "tel:+15853703742",
  github: "https://github.com/saikiran2508",
  linkedin: "https://www.linkedin.com/in/saikirangopu/",
  photo: "/img/profile.jpg",
  resumes: [
    { label: "Data Scientist resume", href: "/Sai_Kiran_Gopu_Resume_Data_Scientist.pdf" },
    { label: "Data Analyst resume", href: "/Sai_Kiran_Gopu_Resume_Data_Analyst.pdf" },
  ],
};

export const about = [
  "I'm a Data Science master's student at Rochester Institute of Technology (GPA 3.9) with industry experience as a Machine Learning Engineer.",
  "At iCitizen, I build the backend of a congressional analytics platform: the Senate co-sponsorship graph, community detection, a GraphRAG pipeline, and an MCP server, with a benchmark that measures whether the answers can be trusted.",
  "I like problems where the data is messy and the result has to hold up: clean pipelines, honest validation, and a clear story for the people who use the numbers.",
];

export const highlights = [
  { value: "100%", label: "accuracy, 0% hallucination", detail: "GraphRAG on a 33-question benchmark" },
  { value: "0.733", label: "ROC-AUC", detail: "flight delay model, 2.7× lift in top decile" },
  { value: "+72%", label: "site-visit lift", detail: "64K-customer A/B test" },
  { value: "20K+", label: "legislative records", detail: "integrated across 200+ years" },
];

export const experience = [
  {
    company: "iCitizen",
    role: "Data Analyst Research Assistant",
    place: "Rochester, NY",
    dates: "May 2025 – Present",
    logo: "/img/icitizen.png",
    points: [
      "Built a GraphRAG pipeline over a Senate co-sponsorship knowledge graph on AWS Neptune, using entity linking and parameterized query templates to ground LLM (Gemini) answers in cited facts.",
      "Built an MCP server exposing the graph as read-only LLM tools, plus a tool-calling agent; benchmarked it against the fixed pipeline (90% vs. 100% correct, both 0% hallucination; the pipeline used half the model calls).",
      "Designed a 33-question benchmark (single-hop, multi-hop, community, out-of-scope controls) across 5 systems: GraphRAG hit 100% accuracy and 0% hallucination vs. 27% hallucination for ungrounded Gemini Flash-Lite and 17% for Gemini 3.1 Pro.",
      "Built the co-sponsorship graph from 6,791 Senate bills with a top-k backbone and Louvain community detection, removing artifact clusters and identifying three stable blocs, including a bipartisan bloc.",
      "Built ingestion pipelines and a REST API on AWS Lambda, API Gateway, and DynamoDB serving 20K+ legislative records, validated by a 75-test pytest suite in GitHub Actions CI.",
    ],
    tags: ["GraphRAG", "MCP", "AWS Neptune", "Gemini", "Louvain", "AWS Lambda", "DynamoDB", "pytest"],
  },
  {
    company: "Rochester Institute of Technology",
    role: "Teaching Assistant, School of Mathematics and Statistics",
    place: "Rochester, NY",
    dates: "August 2026 – Present",
    logo: "/img/rit.jpg",
    points: [
      "Support MATH-101 (College Algebra) and grade MATH-251, explaining quantitative concepts to undergraduates.",
    ],
    tags: ["Teaching", "Statistics"],
  },
  {
    company: "EForge NexGen Innovations",
    role: "Machine Learning Engineer",
    place: "Hyderabad, India",
    dates: "September 2023 – July 2024",
    logo: "/img/eforge.png",
    points: [
      "Built data pipelines processing 15K+ daily weather-station records, converting raw sensor data into validated features for time-series forecasting with regression and ARIMA models (Python, Pandas, Scikit-learn).",
      "Productionized forecasting models on AWS Elastic Beanstalk with Docker-based automated retraining pipelines, streamlining recurring forecast reporting.",
      "Cut reporting latency by 30% through SQL-driven analysis and built Power BI dashboards (Azure SQL, DAX) that turned model outputs into decisions for stakeholders.",
    ],
    tags: ["Python", "ARIMA", "AWS Elastic Beanstalk", "Docker", "SQL", "Power BI"],
  },
];

export const featuredProjects = [
  {
    title: "Congressional GraphRAG + MCP",
    kicker: "LLM systems · Research",
    image: "/projects/icitizen-graphrag.jpg",
    summary:
      "Can a small LLM answer questions about who works with whom in the Senate without making things up? I built a knowledge graph of 6,791 Senate bills, a GraphRAG pipeline, and an MCP agent, then benchmarked them against ungrounded models.",
    results: [
      "GraphRAG: 100% correct, 0% hallucination on 30 questions",
      "Ungrounded models: 0–3% correct, up to 27% hallucinated",
      "MCP agent: 90% correct with no hallucination, at 2× the model calls",
    ],
    tags: ["GraphRAG", "MCP", "AWS Neptune", "Gemini", "Python"],
    links: [],
    note: "Capstone research with iCitizen (private codebase)",
  },
  {
    title: "Flight Delay Risk Prediction",
    kicker: "Machine learning",
    image: "/projects/flight-delay.jpg",
    summary:
      "Predicts whether a flight will leave 15+ minutes late using only information available before departure, so operations teams can act early. 25 leakage-safe features and a strict time-based split across 328K flights.",
    results: [
      "LightGBM tuned with Optuna: 0.733 ROC-AUC on held-out months",
      "Top-10% risk flights delayed 59% of the time (2.7× the 21.8% base rate)",
      "SHAP + ablation: aircraft-rotation features add 6.3 pts of precision",
    ],
    tags: ["LightGBM", "Optuna", "SHAP", "Scikit-learn", "Pandas"],
    links: [{ label: "GitHub", href: "https://github.com/saikiran2508/Flight-delay-prediction" }],
  },
  {
    title: "A/B Test Analysis & Uplift Modeling",
    kicker: "Experimentation · Causal inference",
    image: "/projects/ab-uplift.jpg",
    summary:
      "Validated and analyzed a randomized email experiment with 64K customers, then modeled who each email actually persuades to decide whom to target under a send budget.",
    results: [
      "Best email lifted site visits +72% (Welch CIs, Holm correction)",
      "Top 30% by predicted uplift captured 52% of incremental visits",
      "8% more incremental visits than random targeting at a 30% budget",
    ],
    tags: ["statsmodels", "SciPy", "CUPED", "Uplift (S/T/X-learners)", "LightGBM"],
    links: [{ label: "GitHub", href: "https://github.com/saikiran2508/Campaign-uplift-modeling" }],
  },
  {
    title: "NYC Flight Delay Analysis (SQL)",
    kicker: "Analytics · SQL",
    image: "/projects/nyc-flights.jpg",
    summary:
      "What drives departure delays out of NYC? Modeled 336K flights across 5 related tables in PostgreSQL, with data-quality checks and analytical SQL using CTEs and window functions.",
    results: [
      "Late inbound aircraft: 85% of next departures leave late (vs. 22%)",
      "Precipitation raises cancellations 4.3×",
      "Flagged 50K+ orphaned keys and 9K+ cancelled or diverted flights",
    ],
    tags: ["PostgreSQL", "SQL window functions", "Python", "matplotlib"],
    links: [{ label: "GitHub", href: "https://github.com/saikiran2508/NYC-flights-sql-analysis" }],
  },
];

export const moreProjects = [
  {
    title: "EV Charging Station Analysis",
    image: "/projects/ev-charging.jpg",
    summary:
      "Python pipeline into PostgreSQL/PostGIS, geospatial SQL on coverage, pricing, and operators, and Tableau dashboards on growth and rural coverage gaps.",
    tags: ["PostGIS", "SQL", "Tableau"],
    links: [{ label: "GitHub", href: "https://github.com/saikiran2508/EV-Charging-Station-Analysis" }],
  },
  {
    title: "Joint Intent Detection System",
    image: "/projects/joint-bert.jpg",
    summary:
      "Fine-tuned a Joint BERT model for intent classification and slot filling (96.5% intent accuracy), served as a real-time REST API.",
    tags: ["PyTorch", "BERT", "NLP"],
    links: [{ label: "GitHub", href: "https://github.com/saikiran2508/JOINT-INTENT-DETECTION-SYSTEM" }],
  },
  {
    title: "NBA Analytics Dashboard",
    image: "/projects/nba.jpg",
    summary:
      "Interactive team and player dashboard in Plotly Dash with season, conference, and metric filters. Deployed on Render.",
    tags: ["Plotly Dash", "Pandas"],
    links: [
      { label: "Live", href: "https://nba-analytics-dashboard-1-ch0j.onrender.com/" },
      { label: "GitHub", href: "https://github.com/saikiran2508/NBA-Analytics-Dashboard" },
    ],
  },
  {
    title: "RIT Institutional Research Dashboard",
    image: "/projects/rit-powerbi.jpg",
    summary:
      "3-page Power BI dashboard on RIT's Common Data Set and IPEDS data: enrollment, admissions funnel, graduation rates, and financial aid.",
    tags: ["Power BI", "DAX"],
    links: [{ label: "View", href: "https://drive.google.com/file/d/1hfVYjT8a4yQNYxfVPeVVln8LlZWU0cWN/view?usp=sharing" }],
  },
  {
    title: "SkimLit: Biomedical Abstract Classifier",
    image: "/projects/skimlit.jpg",
    summary:
      "Hybrid-embedding LSTM that labels sentences of medical abstracts as objective, methods, or results (83% accuracy).",
    tags: ["TensorFlow", "NLP"],
    links: [{ label: "GitHub", href: "https://github.com/saikiran2508/SkimLit_NLP_Project" }],
  },
  {
    title: "Chicken Disease Classification",
    image: "/projects/chicken.jpg",
    summary:
      "VGG16 transfer-learning CNN (87% accuracy) with a DVC + Docker + GitHub Actions pipeline deploying to AWS EC2.",
    tags: ["CNN", "DVC", "Docker", "AWS EC2"],
    links: [{ label: "GitHub", href: "https://github.com/saikiran2508/chicken_disease_classification_project" }],
  },
];

export const earlierWork = [
  { title: "Food Vision 101 (EfficientNetB0, 101 food classes)", href: "https://github.com/saikiran2508/FOOD_VISION_101_EfficientNetB0_Model" },
  { title: "Plant Disease Detection (CNN, 38 classes)", href: "https://github.com/saikiran2508/Plant_Disease_Detection" },
];

export const skills = [
  { group: "Languages", items: ["Python", "SQL", "R"] },
  {
    group: "Machine Learning",
    items: ["LightGBM", "Scikit-learn", "Regression", "Classification", "Clustering", "Time-Series (ARIMA, SARIMA)", "Optuna", "SHAP", "Model Calibration"],
  },
  {
    group: "Statistics & Experimentation",
    items: ["A/B Testing", "Hypothesis Testing", "Power Analysis", "CUPED", "Causal Inference", "Uplift Modeling", "Network Analysis"],
  },
  {
    group: "Deep Learning & GenAI",
    items: ["PyTorch", "TensorFlow", "Hugging Face Transformers", "BERT", "LLMs (Gemini API)", "GraphRAG", "MCP", "LLM Evaluation"],
  },
  {
    group: "Data & Cloud",
    items: ["PostgreSQL", "MySQL", "Neo4j", "AWS Neptune", "DynamoDB", "BigQuery", "AWS (S3, Lambda, API Gateway, Elastic Beanstalk)", "Docker", "Git", "GitHub Actions", "pytest"],
  },
  { group: "Visualization & BI", items: ["Tableau", "Power BI (DAX)", "matplotlib", "seaborn", "Plotly"] },
];

export const education = [
  {
    school: "Rochester Institute of Technology",
    degree: "M.S. in Data Science",
    detail: "GPA 3.9 / 4.0",
    dates: "Aug 2024 – Dec 2026 (expected)",
    logo: "/img/rit.jpg",
  },
  {
    school: "CVR College of Engineering, Hyderabad",
    degree: "B.Tech in Electrical and Electronics Engineering",
    detail: "",
    dates: "2019 – 2023",
    logo: "/img/cvr.jpg",
  },
];

export const certifications = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "2025", href: "https://www.credly.com/badges/8cd4fb42-da39-4f5e-9471-33115c71ad1d/public_url" },
  { name: "Machine Learning Specialization", issuer: "Stanford & DeepLearning.AI", date: "2024", href: "https://drive.google.com/file/d/1x-yXmGHTGpdQ-PQIpi2VsYC9w4tlT6iv/view?usp=sharing" },
  { name: "Database Programming with SQL", issuer: "Oracle Academy", date: "2022", href: "https://drive.google.com/file/d/1a6oZ_z3Rl5TOefyqsKbj5aj2C6blKICl/view?usp=sharing" },
];

export const research = [
  "4 publications, including machine learning for urbanization prediction from automated weather-station data",
  "2 patents: an ML-powered IoT weather station, and data analytics for precision farming",
];
