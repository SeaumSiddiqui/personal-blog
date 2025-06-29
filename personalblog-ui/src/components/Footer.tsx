import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Code, 
  Coffee,
  Heart,
  ExternalLink
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`mt-20 border-t transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-slate-900/50 border-slate-700' 
        : 'bg-white/50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="lg:col-span-2 ml-10">
            <div className="mb-8">
              <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Seaum Siddiqui
              </h2>
              <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Backend Spring Boot Developer passionate about building scalable, 
                robust applications and sharing knowledge through technical writing. 
                I specialize in Java ecosystem, microservices architecture, 
                cloud-native solutions and RESTful APIs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Skills */}
              <div>
                <h3 className={`text-lg font-semibold mb-4 flex items-center space-x-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  <Code className="w-5 h-5" />
                  <span>Tech Stack</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Spring Boot', 'Java', 'Microservices', 'REST APIs', 
                    'PostgreSQL', 'Docker', 'Kubernetes', 'AWS'
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-sm rounded-full transition-colors duration-300 ${
                        isDarkMode
                          ? 'bg-blue-900/30 text-blue-300 border border-blue-700/50'
                          : 'bg-blue-100 text-blue-800 border border-blue-300'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Get In Touch
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:seaum.siddiqui@example.com"
                    className={`flex items-center space-x-3 transition-colors duration-200 ${
                      isDarkMode
                        ? 'text-slate-300 hover:text-blue-400'
                        : 'text-slate-600 hover:text-blue-600'
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                    <span>seaumsiddiqui@outlook.com</span>
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/seaum-siddiqui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 transition-colors duration-200 ${
                      isDarkMode
                        ? 'text-slate-300 hover:text-blue-400'
                        : 'text-slate-600 hover:text-blue-600'
                    }`}
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  
                  <a
                    href="https://github.com/SeaumSiddiqui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 transition-colors duration-200 ${
                      isDarkMode
                        ? 'text-slate-300 hover:text-blue-400'
                        : 'text-slate-600 hover:text-blue-600'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  
                  <div className={`flex items-center space-x-3 transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    <MapPin className="w-4 h-4" />
                    <span>Available for Remote Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Quick Links
            </h3>
            <div className="space-y-4">
              <Link
                to="/home"
                className={`block transition-colors duration-200 ${
                  isDarkMode
                    ? 'text-slate-300 hover:text-blue-400'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Blogs
              </Link>
              
              <Link
                to="/about"
                className={`block transition-colors duration-200 ${
                  isDarkMode
                    ? 'text-slate-300 hover:text-blue-400'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                About Me
              </Link>
              
              <a
                href="#"
                className={`block transition-colors duration-200 ${
                  isDarkMode
                    ? 'text-slate-300 hover:text-blue-400'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Resume / CV
              </a>
              
              <a
                href="/"
                className={`block transition-colors duration-200 ${
                  isDarkMode
                    ? 'text-slate-300 hover:text-blue-400'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Portfolio
              </a>
            </div>

            {/* Fun Section */}
            <div className="mt-8">
              <div className={`p-4 rounded-lg transition-colors duration-300 ${
                isDarkMode ? 'bg-slate-800/50' : 'bg-slate-100/50'
              }`}>
                <div className={`flex items-center space-x-2 mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  <Coffee className="w-4 h-4" />
                  <span className="text-sm font-medium">Powered by</span>
                </div>
                <p className={`text-sm transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Countless cups of coffee, late-night coding sessions, and a passion for clean code.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`mt-12 ml-10 pt-8 border-t transition-colors duration-300 ${
          isDarkMode ? 'border-slate-700' : 'border-slate-200'
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className={`flex items-center space-x-2 text-sm transition-colors duration-300 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              <span>© {currentYear} Seaum Siddiqui. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and Spring Boot</span>
            </div>
            
            <div className={`text-sm transition-colors duration-300 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              <Link
                to="/"
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Seaum Siddiqui
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};