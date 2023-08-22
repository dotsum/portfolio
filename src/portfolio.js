/* Change this file to get your personal Porfolio */
import { chosenTheme } from "./theme";
// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Vladyslav's Portfolio",
  description:
    "A results-driven Data Engineer with expertise in predictive modeling, ETL processes, and database management. Committed to continuous learning and adapting to the latest industry advancements.",
  og: {
    title: "Vladyslav Sumatokhin Portfolio",
    type: "website",
    url: "https://dotsum.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Vladyslav Sumatokhin",
  logo_name: "DotSum",
  nickname: "dotsum",
  subTitle:
    "A results-driven Data Engineer with expertise in predictive modeling, ETL processes, and database management. Committed to continuous learning and adapting to the latest industry advancements.",
  resumeLink: "#",
  portfolio_repository: "https://github.com/dotsum/portfolio",
  githubProfile: "https://github.com/dotsum",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/dotsum",
  // linkedin: "https://www.linkedin.com/in/dotsum/",
  {
    name: "Github",
    link: "https://github.com/dotsum",
    icon: "github-icon.svg", // Reference https://fontawesome.com/icons/github?style=brands
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dotsum/",
    icon: "linkedin-icon.svg", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
  },
  {
    name: "Mail",
    link: "mailto:me@dotsum.tech",
    icon: "mail-icon.svg", // Reference https://fontawesome.com/icons/github?style=brands
  },
];

const skills = {
  data: [
    {
      title: "Data Engineering",
      fileName: "DataScienceImg",
      skills: [
        "🚀 Diving deep into ETL designs for analytical data warehouses.",
        "🔧 Played around with data loader optimizations for various data types.",
        "🔍 Maintained some cool databases while keeping data safe and sound.",
        "🌐 Mostly flexed these skills during my time at RTK Element.",
      ],
      softwareSkills: [
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: chosenTheme.text,
          },
        },
        {
          skillName: "GreenPlum",
          imageSrc: "greenplum-icon.svg",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: chosenTheme.text,
          },
        },
        {
          skillName: "Minio S3",
          imageSrc: "minio-icon.svg",
        },
        {
          skillName: "Apache Airflow",
          fontAwesomeClassname: "cib:apache-airflow",
          style: {
            backgroundColor: "transparent",
            color: chosenTheme.text,
          },
        },
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "cib:apache-spark",
          style: {
            color: chosenTheme.text,
          },
        },
        {
          skillName: "Dask",
          fontAwesomeClassname: "simple-icons:dask",
          style: {
            color: chosenTheme.text,
          },
        },
        {
          skillName: "JupyterHub",
          fontAwesomeClassname: "devicon-plain:jupyter-wordmark",
          style: {
            color: chosenTheme.text,
          },
        },
      ],
    },
    {
      title: "Data Science and AI",
      fileName: "FullStackImg",
      skills: [
        "🧠 Crafted nifty predictive models tailored for the healthcare scene.",
        "📊 Mixed and matched ML tools to get the best out of data.",
        "🔬 Managed some pretty chunky datasets using Python magic.",
        "✨ Lit up the data scene with vibrant visual dashboards.",
      ],
      softwareSkills: [
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: chosenTheme.text,
          },
        },
        {
          skillName: "scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: chosenTheme.text,
          },
        },
        {
          skillName: "CatBoost (Gradient Boosting)",
          imageSrc: "catboost-logo.svg",
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: {
            color: chosenTheme.text,
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: chosenTheme.text,
          },
        },
      ],
    },
    {
      title: "Web Development (Still Learning!)",
      fileName: "CloudInfraImg",
      skills: [
        "🖥️ Exploring the world of responsive web designs with fresh front-end libraries.",
        "🔗 Dipping my toes into backend magic with the latest frameworks.",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: chosenTheme.dark,
            color: chosenTheme.text,
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: chosenTheme.text,
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: chosenTheme.text,
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: chosenTheme.text,
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: chosenTheme.text,
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/dotsum/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/dotsum",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Bauman Moscow State Technical University",
      subtitle: "Mater in Organization and Management of High-Tech Industries",
      logo_path: "bmstu_logo.svg",
      alt_name: "BMSTU",
      duration: "2020 - 2022",
      descriptions: ["Description will be here..."],
      website_link: "https://bmstu.ru/",
    },
    {
      title: "Moscow Polytechnic University",
      subtitle: "Bachelor in Industrial Engineering",
      logo_path: "mpu_logo.png",
      alt_name: "MPU",
      duration: "2016 - 2020",
      descriptions: ["Description will be here..."],
      website_link: "https://mospolytech.ru/en/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/KHQ43SBD96MZ",
      alt_name: "deeplearning.ai",
      color_code: "#f5f6f6",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship",
  description: "Description will be here...",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "ML/Data Engineer",
          company: "RTK-Element",
          company_url: "https://rtk-element.ru/",
          logo_path: "rostelecom_logo.svg",
          duration: "June 2022 - May 2023",
          location: "Russia, Moscow",
          description:
            "The company is absorbed by Rostelecom, Russia's largest provider of digital services and services",
          responsibilities: [
            "Designed and optimized loaders for raw data from XML files, achieving a more than 2x increase in loading speed.",
            "Developed ETL processes for ML models, creating processes for over 20 data marts from scratch.",
            "Engineered predictive models to assess the risk of death and disease progression using EHR data, contributing to more effective and proactive patient care.",
            "Enhanced model accuracy by reducing Type II error rate to below 20%, while ensuring interpretability for healthcare professionals.",
            "Collaborated in the migration from PostgreSQL to GreenPlum, optimized procedures and data structures for GreenPlum.",
            "Administered ML infrastructure: JupyterHub, MLFlow, S3, GreenPlum for a team of four.",
          ],
        },
        {
          title: "Data Analyst",
          company: "Element Lab",
          company_url: "https://element-lab.ru/",
          logo_path: "element_logo.png",
          duration: "June 2021 - June 2022",
          location: "Russia, Moscow",
          description:
            "Government contractor for the digitalisation of healthcare",
          responsibilities: [
            "Designed and implemented ETL processes for the analytical data warehouse using PostgreSQL and Apache Airflow, successfully developing over 20 processes from scratch.",
            "Administered the Tableau server for over 20 users.",
            "Developed and maintained over 10 executive dashboards in Tableau. Actively engaged with end-users to understand their requirements, enhancing the user experience, resulting in the majority of dashboards being accessed daily.",
            "Prepared scripts for both regular and on-demand reporting.",
            "Improved regular reporting refresh frequency from monthly to daily.",
            "Collaborated in the migration from Oracle DB to PostgreSQL, refactored PL/SQL procedures and ETL processes, successfully migrating over 10 processes.",
          ],
        },
      ],
    },
    {
      title: "Internship",
      work: false,
      experiences: [
        {
          title: "ML/Data Engineer",
          company: "SAS",
          company_url: "https://rtk-element.ru/",
          logo_path: "rostelecom_logo.svg",
          duration: "June 2022 - May 2023",
          location: "Russia, Moscow",
          description:
            "The company is absorbed by Rostelecom, Russia's largest provider of digital services and services",
          responsibilities: [
            "Designed and optimized loaders for raw data from XML files, achieving a more than 2x increase in loading speed.",
            "Developed ETL processes for ML models, creating processes for over 20 data marts from scratch.",
            "Engineered predictive models to assess the risk of death and disease progression using EHR data, contributing to more effective and proactive patient care.",
            "Enhanced model accuracy by reducing Type II error rate to below 20%, while ensuring interpretability for healthcare professionals.",
            "Collaborated in the migration from PostgreSQL to GreenPlum, optimized procedures and data structures for GreenPlum.",
            "Administered ML infrastructure: JupyterHub, MLFlow, S3, GreenPlum for a team of four.",
          ],
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "Description of projects will be here...",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Description of publications will be here...",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "publication_id",
      name: "Artificial Intelligence Paper",
      createdAt: "2023-01-01T00:00:00Z",
      description: "Example of paper description",
      url: "https://axiv.org/#",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_profile_photo.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "...",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "",
    locality: "",
    country: "",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
