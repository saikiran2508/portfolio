import {
  mobile,
  EV,
  r,
  oracle,
  backend,
  web,
  fullstack,
  javascript,
  java,
  html,
  css,
  reactjs,
  ubuntu,
  tailwind,
  postgresql,
  git,
  rit,
  cvr,
  eforge,
  awscert,
  mackenziehealth,
  privcurity,
  staples,
  google,
  whmis,
  aws,
  python,
  cplusplus,
  typescript,
  sunnifyimage,
  knifethrowimage,
  pythonanalysis,
  password_generator,
  // wordsearch,
  powershell,
  cisco,
  connectwise,
  virtualbox,
  kalilinux,
  wireshark,
  nmap,
  metasploit,
  johntheripper,
  hydra,
  aircrackng,
  photoshop,
  premiere,
  cinema4d,
  blender,
  connectwisecert,
  awsdbcert,
  financialflowimage,
  enterpriseapitester,
  github,
  mongodb,
  deepai,
  ic,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Certifications",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: fullstack,
  },
  {
    title: "Systems Infrastructure",
    icon: backend,
  },
  {
    title: "Cloud Automation",
    icon: mobile,
  },
  {
    title: "Workflows",
    icon: web,
  },
];

const education = [
  {
    title: "Master's In Data Science",
    company_name: "Rochester Institute of Technology, NY, USA",
    icon: rit,
    iconBg: "#fff",
    date: "2024 - Present",
    points: [
      // "Dean's Honours List - Fall 2024",
      "GPA: 4.0/4.0",
      // "Courses undertaken: Data Structures and Algorithms, OOP, REST API, Software Design, Python Data Analysis, Discrete Mathematics, Computer Architecture, Operating Systems, PostgreSQL.",
    ],
  },
  {
    title: "Bachelor's In ECE",
    company_name: "CVR College of Engineering, India",
    icon: cvr,
    iconBg: "#fff",
    date: "2019-2023",
    points: [
      // "Ontario Scholar",
      // "12th Grade: 96%",
      "GPA: 3.7/4.0",
      ,
    ],
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
    {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostGreSQL",
    icon: postgresql,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
    {
    name: "Tailwind CSS",
    icon: tailwind,
  }, 
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "R",
    icon: r,
  },
];

const itTools = [
  {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Cisco",
    icon: cisco,
  },
  {
    name: "ConnectWise",
    icon: connectwise,
  },
  {
    name: "VirtualBox",
    icon: virtualbox,
  },
];

const cybersecurityTools = [
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "Wireshark",
    icon: wireshark,
  },
  {
    name: "Nmap",
    icon: nmap,
  },
  {
    name: "Metasploit",
    icon: metasploit,
  },
  {
    name: "John the Ripper",
    icon: johntheripper,
  },
  {
    name: "Hydra",
    icon: hydra,
  },
  {
    name: "Aircrack-ng",
    icon: aircrackng,
  },
];

const designTools = [
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Premiere",
    icon: premiere,
  },
  {
    name: "Cinema 4D",
    icon: cinema4d,
  },
  {
    name: "Blender",
    icon: blender,
  },
];

const experiences = [
  {
    title: "Research Assistant, RIT - iCitizen Project",
    company_name: "Rochester Institute of Technology",
    icon: ic,
    iconBg: "#fff",
    date: "May 2025 – Present",
    points: [
      "Automated the collection and standardization of congressional datasets from Congress.gov and Bioguide, covering members of Congress from the 1st Congress (1789) to present.",
      "Built an interactive U.S. map visualization linking each state to its senators, representatives, and the bills they sponsor/support, enabling stakeholders to identify the right legislators for policy advocacy.",
      "Deployed scalable data storage and retrieval with AWS DynamoDB, ensuring efficient query performance and supporting downstream analytics and visual dashboards.",
      "Applied data engineering and visualization techniques (Python, Pandas, Requests, SQL, Power BI/Tableau, Geospatial libraries) to deliver actionable insights for academic and institutional stakeholders.",
    ],
},

  {
    title: "Machine Learning Engineer",
    company_name: "EFORGE NEXGEN INNOVATIONS",
    icon: eforge,
    iconBg: "#fff",
    date: "Sep. 2023 - Jul. 2024",
    points: [
      "Engineered and deployed ML pipelines in Python (Pandas, Scikit-learn) for time series forecasting using regression and ARIMA models, delivering actionable environmental predictions and collaborating with cross-functional teams.",
      "Optimized data ingestion pipelines using SQL and AWS IoT Core to ensure seamless time-series data capture, maintained high predictive accuracy through automated retraining pipelines.",
      "Applied MLOps practices for deploying forecasting models via AWS Elastic Beanstalk and automated retraining with Docker, performed SQL-based analysis for forecasting and decision support.",
      "Built Tableau dashboards using Azure SQL and DAX to visualize time-series data trends, supporting actionable insights for decision-making, demonstrated strong analytical skills and attention to detail.",
      // "Deployed Oracle POS/KDS/Debit solutions (EMC, Simphony), tracking updates in Jira & Confluence.",
    ],
  },
  // {
  //   title: "Tech Sales Associate - Staples Canada",
  //   company_name: "Staples Canada (Co-op)",
  //   icon: staples,
  //   iconBg: "#1294C8",
  //   date: "Sep. 2020 - Feb. 2021",
  //   points: [
  //     "Provided specialized support for Windows, Mac, and Linux, performing on-site installations, repairs, and optimizations.",
  //     "Streamlined inventory processes by handling SKUs and POs, maintaining a well-organized sales floor.",
  //     "Maintained accurate sales and inventory data in IBM AS/400, improving workflows and operational efficiency.",
  //     "Resolved complex technical inquiries, delivering tailored solutions that ensured high customer satisfaction.",
  //     "Facilitated e-commerce transactions, merging in-store and online channels.",
  //   ],
  // },
];


const extracurricular = [
  {
    title: "AWS Certified Cloud Practitioner",
    type: "Proof of Completion",
    icon: awscert,
    iconBg: "#000000",
    date: "July 2025",
    points: ["AWS Core services, cloud concepts, security, architecture, and billing."],
    credential: "https://www.credly.com/badges/8cd4fb42-da39-4f5e-9471-33115c71ad1d/public_url",
  },
  {
    title: "Machine Learning Specialization",
    type: "Professional Certificate",
    icon: deepai,
    iconBg: "#000000",
    date: "Issued: April 2024",
    points: ["Supervised Machine Learning: Regression and Classification",
              "Advanced Learning Algorithms",
              "Unsupervised Learning, Recommenders, Reinforcement Learning"],
    credential: "https://drive.google.com/file/d/1x-yXmGHTGpdQ-PQIpi2VsYC9w4tlT6iv/view?usp=sharing",
  },
  {
    title: "Database Programming with SQL",
    type: "Oracle Certification",
    icon: oracle,
    iconBg: "#748C7B",
    date: "30th April 2022",
    points: ["Gained hands-on experience and validated my skills in database programming and SQL through the Oracle Academy certification program."],
    credential: "https://drive.google.com/file/d/1a6oZ_z3Rl5TOefyqsKbj5aj2C6blKICl/view?usp=sharing",
  },
  // {
  //   title: "Google IT Automation With Python",
  //   type: "Professional Certificate",
  //   icon: google,
  //   iconBg: "#050C18",
  //   date: "Mar 2023",
  //   points: [
  //     "Configuration Management, Automation, Google Cloud Platform (GCP), Cloud Servers and VM's, Version Control Tools, Automation.",
  //   ],
  //   credential: "https://www.coursera.org/account/accomplishments/specialization/certificate/82SZFUWF4B3T",
  // },
  // {
  //   title: "WHMIS (Worker Health and Safety)",
  //   type: "Government Workforce Requirement",
  //   icon: whmis,
  //   iconBg: "#CCCFD8",
  //   date: "Sep 2020",
  //   points: ["Hazard Awareness, Legal Compliance, Personal Protection, Accident Prevention"],
  // },
];

const projects = [
  // {
  //   name: "FinancialFlow 💸",
  //   description:
  //     "Comprehensive personal finance management application built with Next.js and Typescript. It empowers users to take control of their financial health through intuitive tracking, insightful analytics, and personalized recommendations.",
  //   tags: [
  //     {
  //       name: "React-native",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Tailwind CSS",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "Next.js",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: financialflowimage,
  //   source_code_link: "https://github.com/sunnypatell/financialflow",
  //   // live_project_link: "https://financial-flow.vercel.app/",
  // },
  {
  name: "Joint Intent Detection System 🗣️",
  description:
    "BERT-based multilingual intent classification system with out-of-scope detection to reduce false positives. Achieved 96.5% accuracy and deployed as a RESTful API on Heroku for real-time chatbot reliability.",
  tags: [
    { name: "PyTorch", color: "blue-text-gradient" },
    { name: "Transformers", color: "green-text-gradient" },
    { name: "NLP", color: "pink-text-gradient" },
    { name: "API", color: "blue-text-gradient" },
  ],
  image: image1,
  source_code_link: "https://github.com/saikiran2508/JOINT-INTENT-DETECTION-SYSTEM",
  // live_project_link: "https://github.com/saikiran2508/JOINT-INTENT-DETECTION-SYSTEM",
},
{
  name: "EV Charging Station Analysis ⚡",
  description:
    "Pipeline for cleaning EV station data, spatial database integration, and geospatial SQL analysis. Tableau dashboards revealed growth trends, rural coverage gaps, and operator market share insights.",
  tags: [
    { name: "Python", color: "blue-text-gradient" },
    { name: "PostgreSQL", color: "green-text-gradient" },
    { name: "SQL", color: "pink-text-gradient" },
    { name: "Tableau", color: "blue-text-gradient" },
  ],
  image: image2,
  source_code_link: "https://github.com/saikiran2508/EV-Charging-Station-Analysis",
  // live_project_link: "https://github.com/saikiran2508/EV-Charging-Station-Analysis",
},
{
  name: "SkimLit NLP Project 📖",
  description:
    "Hybrid-embedding LSTM NLP model to classify biomedical abstracts into structured segments (objectives, methods, results). Reduced literature review time by 33% and achieved 83% accuracy.",
  tags: [
    { name: "TensorFlow", color: "blue-text-gradient" },
    { name: "Deep Learning", color: "green-text-gradient" },
    { name: "NLP", color: "pink-text-gradient" },
  ],
  image: image3,
  source_code_link: "https://github.com/saikiran2508/SkimLit_NLP_Project",
  // live_project_link: "https://github.com/saikiran2508/SkimLit_NLP_Project",
},
{
  name: "Chicken Disease Classification 🐔",
  description:
    "VGG16-based CNN model using transfer learning to detect poultry diseases with 87% accuracy. Deployed via CI/CD pipeline on AWS EC2 with Docker and DVC for dataset management.",
  tags: [
    { name: "AWS", color: "blue-text-gradient" },
    { name: "CNN", color: "green-text-gradient" },
    { name: "Docker", color: "pink-text-gradient" },
    { name: "Flask", color: "blue-text-gradient" },
  ],
  image: image5,
  source_code_link: "https://github.com/saikiran2508/chicken_disease_classification_project",
  // live_project_link: "https://github.com/saikiran2508/chicken_disease_classification_project",
},
{
  name: "Food Vision 101 🍲",
  description:
    "EfficientNetB0-based deep learning model trained on 101 food classes. Achieved 79.2% accuracy with TensorBoard visualization, fine-tuned layers, and mixed precision training for 3x faster GPU performance.",
  tags: [
    { name: "TensorFlow", color: "blue-text-gradient" },
    { name: "EfficientNetB0", color: "green-text-gradient" },
    { name: "Deep Learning", color: "pink-text-gradient" },
    { name: "Jupyter", color: "blue-text-gradient" },
  ],
  image: image4,
  source_code_link: "https://github.com/saikiran2508/FOOD_VISION_101_EfficientNetB0_Model",
  // live_project_link: "https://github.com/saikiran2508/FOOD_VISION_101_EfficientNetB0_Model",
},
{
  name: "Plant Disease Detection 🌱",
  description:
    "CNN-based model trained on the PlantVillage dataset with 54,305 leaf images across 38 plant disease classes. Designed for early diagnosis to aid farmers in protecting crops and improving agricultural yield.",
  tags: [
    { name: "CNN", color: "blue-text-gradient" },
    { name: "Google Colab", color: "green-text-gradient" },
    { name: "Deep Learning", color: "pink-text-gradient" },
    { name: "Python", color: "blue-text-gradient" },
  ],
  image: image6,
  source_code_link: "https://github.com/saikiran2508/Plant_Disease_Detection",
  // live_project_link: "https://github.com/saikiran2508/Plant_Disease_Detection",
}
  
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Sunny for his outstanding technical proficiency and professional approach as a System Support specialist at Mackenzie Hospital. His deep knowledge of iPad systems and troubleshooting abilities were instrumental in ensuring seamless operations and user satisfaction. Sunny's proactive attitude and problem-solving skills made him a reliable asset to our team, and he consistently exceeded expectations in resolving complex issues. I have no hesitation in endorsing him for any tech-related position, as I am confident he will excel in any challenge he takes on.",
    name: "Feda Abukhadrah, BIT | SaaS | Health Tech | MDM | ABM | POS | ITIL®V4 | CompTIA A+",
    designation: "Senior Service Desk Specialist",
    company: "Px Solutions LTD.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Sunny Patel's expertise in the technological domain is truly remarkable. Proficient in programming languages like Java, Python, and C++, and highly skilled in Microsoft's suite of tools, Sunny's grasp of networking concepts is extensive. What sets him apart is his experience in handling over 1000 devices remotely and on-site, along with a successful track record in troubleshooting and deploying various software and hardware upgrades. His dedication to tackling complex challenges, grounded in a strong foundation in software design and a rich academic background in computer science, positions Sunny as a valuable asset to any tech-driven team.",
    name: "Sanjay Sharma, MBA, CISSP, CISA, PMP®",
    designation: "Senior Vice-President and Head of Cybersecurity Services",
    company: "Pathway Communications / ex-Toronto Hydro",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Sunny's proficiency in data entry was impeccable, displaying meticulous attention to detail and accuracy. His commitment to maintaining organized and error-free records significantly improved our operational efficiency. In customer service, Sunny's phone etiquette was truly commendable. He communicated with a warm and professional demeanour, leaving customers with a positive impression and ensuring their needs were met. His ability to multitask and handle multiple customers simultaneously was impressive, showcasing his excellent time management and interpersonal skills. Sunny's dedication to his role and adeptness in data entry, customer service, and managing simultaneous customer interactions made him a valuable asset to our team at Lazer Runner.",
    name: "Michelle Ilizirov",
    designation: "Manager",
    company: "Lazer Runner",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export {
  services,
  technologies,
  itTools,
  cybersecurityTools,
  designTools,
  experiences,
  extracurricular,
  projects,
  education,
  testimonials
};
