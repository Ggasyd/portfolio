import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/gocod.png";
import rmtdevImg from "@/public/sentiment.png";
import wordanalyticsImg from "@/public/RAG.png";
import faunsc from "@/public/faunesc.png";
import certreact from "@/public/react.png";
import github from "@/public/github.png";
import git from "@/public/git.png";
import azfct from "@/public/archi.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const certificationsData = [
  {
    imageUrl : git,
    altText : "git",
  },
  {
    imageUrl : github,
    altText : "github",
  },
  {
    imageUrl : certreact,
    altText : "certifReact",
  },
] as const;

export const experiencesData = [
  {
    title: "Big Data Engineer",
    location: "Rouen, France",
    description:
      "I am currently in my last months of engineering studies at ESIGELEC. I am specialized in Artificial Intelligence.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2024",
  },
  {
    title: "Machine Learning Engineer",
    location: "Rouen, France",
    description:
      "I'm currently interning as an ML engineer at SQLI, where my primary role involves collaborating with Microsoft France teams to develop AI-powered proof of concepts for various company use cases.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
  {
    title: "Marketing Data Scientist",
    location: "Paris, France",
    description:
      "At Hanalytics, I enhanced forecasting with advanced models, orchestrated data pipelines. I also honed my data analysis skills, using sophisticated SQL and visualization tools to derive actionable insights.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "GoCod",
    description:
      "AI-assisted project creation tool,to generate a project in just a few minutes using a simplified form, along with personalised recommendations.",
    tags: ["React", "FastAPI", "LLM", "Git" , "Docker" , "CI/CD"],
    imageUrl: corpcommentImg,
    repoUrl: "https://github.com/Ggasyd/gocod",
  },
  {
    title: "Real-time analysis",
    description:
      "Sentiment analysis in Reddit comments in real time with spark streaming and apache kafka",
    tags: ["Spark SQL", "Python", "Textblob", "NLP" , "Spark streaming" , "Apache Kafka"],
    imageUrl: rmtdevImg,
    repoUrl: "https://github.com/Ggasyd/sentiment-analysis"
  },
  {
    title: "Chatbot with Retrieval-Augmented Generation",
    description:
      "Use of dolly-v2-3b, FAISS, roberta-large and LangChain for answering questions about documents",
    tags: ["Similarity search", "NLP", "Embeddings"],
    imageUrl: wordanalyticsImg,
    repoUrl:"https://github.com/Ggasyd/RAG"
  },
  {
    title: "Faunascan",
    description:
      "Noise analysis system based on artificial intelligence that can automatically identify and classify animal species based on their vocalizations.",
    tags: ["Similarity search" , "Audio processing" , "React" , "FastAPI"],
    imageUrl: faunsc,
    repoUrl:"https://github.com/Ggasyd/faunascan",
  },
  {
    title: "Images description",
    description: 
      "An Azure Function that automates the process of handling image uploads to a specified Blob storage container.",
    tags : ["Azure OpenAI", "Azure Cosmos DB", "Blob trigger"],
    imageUrl: azfct,
    repoUrl: "https://github.com/Ggasyd/images-description"
  },
] as const;

export const skillsData = [
  "Python",
  "FastAPI",
  "Git",
  "NoSQL",
  "NLP",
  "Flask",
  "Spark",
  "SQL",
  "Docker",
  "Kubernetes",
  "Apache Kafka",
  "Terraform",
  "Google Cloud Platform",
  "CI/CD",
  "Azure cloud",
  "AWS cloud",
  "Apache Airflow",
  "Django",
  "Azure Functions",
  "Java",
  "Mage AI",
  "Azure OpenAI",
  "Kestra",
  "DBT",
  "Power BI",
  "Looker Studio",
] as const;