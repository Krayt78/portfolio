import React from 'react';
import { Github, Linkedin, Mail, User, ChevronDown, Briefcase, GraduationCap } from 'lucide-react';
import { FeaturedProjects } from './components/FeaturedProjects';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-indigo-600">Ludovic DOMINGUES</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Blockchain & Fullstack Developer with 5+ years of experience
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a href="https://github.com/ludovic-domingues" target="_blank" rel="noopener noreferrer" 
               className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/ludovic-domingues" target="_blank" rel="noopener noreferrer"
               className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@ludovic-domingues.com"
               className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <ChevronDown className="absolute bottom-8 animate-bounce text-gray-400" size={32} />
      </header>

      {/* Projects Section */}
      <FeaturedProjects />

      {/* Skills Section */}
      <section className="py-20 bg-gray-50" id="skills">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
            <Briefcase className="text-indigo-600" />
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "Solidity", "Rust", "Smart Contracts", "DAO",
              "Node.js", "React.js", "TypeScript", "Unity",
              "C#", "Java", "Blockchain", "NFT",
              "VR", "Microservices", "REST API", "Web3"
            ].map((skill) => (
              <div key={skill} className="bg-white rounded-lg p-4 shadow-md text-center hover:shadow-lg transition-shadow">
                <p className="font-medium text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white" id="education">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
            <GraduationCap className="text-indigo-600" />
            Education
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-xl mb-2">Polkadot Blockchain Academy</h3>
              <p className="text-gray-600">Rust Blockchain Developer (2024)</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-xl mb-2">Alyra</h3>
              <p className="text-gray-600">Certification Développeur Solidity (2022)</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-xl mb-2">ESSIEE - IT</h3>
              <p className="text-gray-600">Master Management Ingénierie Informatique, Gaming & Smart Tech (2021)</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-xl mb-2">CY Cergy Paris Université</h3>
              <p className="text-gray-600">Licence Informatique Générale (2019)</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50" id="about">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
            <User className="text-indigo-600" />
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 leading-relaxed mb-8">
              I'm a passionate Blockchain & Fullstack Developer with over 5 years of experience, specializing in blockchain technologies,
              smart contract development, and decentralized applications. My expertise spans across Solidity, Rust, and Unity development,
              with a strong focus on creating innovative solutions in the Web3 space. Currently teaching blockchain development at Alyra
              while working on cutting-edge projects in the blockchain gaming and DeFi sectors.
            </p>
            <a href="#contact" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com/ludovic-domingues" target="_blank" rel="noopener noreferrer" 
               className="hover:text-indigo-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/ludovic-domingues" target="_blank" rel="noopener noreferrer"
               className="hover:text-indigo-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@ludovic-domingues.com"
               className="hover:text-indigo-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-400">© {new Date().getFullYear()} Ludovic DOMINGUES. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;