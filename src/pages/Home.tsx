import React from 'react';
import { Github, Linkedin, Mail, User, ChevronDown, Briefcase, GraduationCap } from 'lucide-react';
import { FeaturedProjects } from '../components/FeaturedProjects';

interface SkillCategory {
  [key: string]: string[];
}

const skillCategories: SkillCategory = {
  "Programming Languages": [
    "Solidity",
    "Rust",
    "TypeScript",
    "JavaScript",
    "C#",
    "Java"
  ],
  "Frameworks & Libraries": [
    "React.js",
    "Node.js",
    "Unity",
    "Express.js",
    "Web3.js",
    "Ethers.js"
  ],
  "Technologies": [
    "Blockchain",
    "Smart Contracts",
    "NFT",
    "DAO",
    "Web3",
    "VR"
  ],
  "Development": [
    "Microservices",
    "REST API",
    "Git",
    "CI/CD",
    "Testing",
    "DevOps"
  ]
};

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Ludovic DOMINGUES</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Blockchain & Fullstack Developer with 5+ years of experience
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <a href="https://github.com/Krayt78" target="_blank" rel="noopener noreferrer" 
                 className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ludovicdomingues/" target="_blank" rel="noopener noreferrer"
                 className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:ludovic.domingues96@gmail.com"
                 className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        <ChevronDown className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 dark:text-gray-500" size={32} />
      </header>

      <FeaturedProjects />

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800" id="skills">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2 text-gray-900 dark:text-white">
            <Briefcase className="text-indigo-600 dark:text-indigo-400" />
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div key={category} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">{category}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill) => (
                    <div key={skill} className="bg-gray-50 dark:bg-gray-600 rounded-lg p-3 text-center hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors">
                      <p className="font-medium text-gray-800 dark:text-gray-200">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white dark:bg-gray-900" id="education">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2 text-gray-900 dark:text-white">
            <GraduationCap className="text-indigo-600 dark:text-indigo-400" />
            Education
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Polkadot Blockchain Academy</h3>
              <p className="text-gray-600 dark:text-gray-300">Rust Blockchain Developer (2024)</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Alyra</h3>
              <p className="text-gray-600 dark:text-gray-300">Certification Développeur Solidity (2022)</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">ESSIEE - IT</h3>
              <p className="text-gray-600 dark:text-gray-300">Master Management Ingénierie Informatique, Gaming & Smart Tech (2021)</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">CY Cergy Paris Université</h3>
              <p className="text-gray-600 dark:text-gray-300">Licence Informatique Générale (2019)</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800" id="about">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2 text-gray-900 dark:text-white">
            <User className="text-indigo-600 dark:text-indigo-400" />
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              I'm a passionate Blockchain & Fullstack Developer with over 5 years of experience, specializing in blockchain technologies,
              smart contract development, and decentralized applications. My expertise spans across Solidity, Rust, and Unity development,
              with a strong focus on creating innovative solutions in the Web3 space. Currently teaching blockchain development at Alyra
              while working on cutting-edge projects in the blockchain gaming and DeFi sectors.
            </p>
            <a href="#contact" className="inline-block bg-indigo-600 dark:bg-indigo-500 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}