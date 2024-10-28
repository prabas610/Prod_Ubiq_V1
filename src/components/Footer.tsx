import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative flex justify-center items-center sm:py-16 py-6 flex-col bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-[#0a192f] to-[#091322] opacity-80"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSItMTAwJSIgeTE9IjEwMCUiIHgyPSIyMDAlIiB5Mj0iMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjNWNlMWU2IiBzdG9wLW9wYWNpdHk9Ii4yNSIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMzM2JiY2YiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTI4IDAgTDAgMjggTDU2IDI4IEw1NiAwIFoiIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-10"></div>
      <div className="w-full flex justify-center items-start md:flex-row flex-col mb-8 max-w-7xl px-6 sm:px-16 relative z-10">
        <div className="flex-[1] flex flex-col justify-start mr-10 mb-8 md:mb-0">
          <Link to="/" className="flex items-center" aria-label="Ubiq Home">
            <Brain className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] text-secondary" />
            <span className="font-poppins font-semibold text-[16px] sm:text-[18px] leading-[23px] ml-2">
              <span className="text-gradient">Ubiq</span>
            </span>
          </Link>
          <p className="font-poppins font-normal text-White text-[16px] sm:text-[18px] leading-[30.8px] mt-4">
            Integrating Our Deep Domain Expertise with Customised AI Solutions.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {[
            { title: "Our Services", links: [
              { name: "Custom AI Assistants", path: "/services#assistants" },
              { name: "Specialized AI Models", path: "/services#models" },
              { name: "AI Integration", path: "/services#integration" },
              { name: "Industry Solutions", path: "/services#industry" }
            ]},
            { title: "Domain Expertise", links: [
              { name: "Legal Tech", path: "/domain-expertise#legal" },
              { name: "FinTech", path: "/domain-expertise#fintech" },
              { name: "Health Tech", path: "/domain-expertise#health" },
              { name: "E-commerce", path: "/domain-expertise#ecommerce" }
            ]},
            { title: "Legal", links: [
              { name: "Terms of Use", path: "/terms" },
              { name: "Privacy Policy", path: "/privacy" },
              { name: "Cookie Policy", path: "/cookie-policy" }
            ]},
          ].map((section, index) => (
            <div key={section.title} className={`flex flex-col ss:my-0 my-4 min-w-[140px] ${index !== 3 ? 'mr-8' : ''}`}>
              <h4 className="font-poppins font-medium text-[16px] sm:text-[18px] leading-[27px] text-white mb-4">
                {section.title}
              </h4>
              <ul className="list-none">
                {section.links.map((link, index) => (
                  <motion.li
                    key={link.name}
                    className={`font-poppins font-normal text-[14px] sm:text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer transition-colors duration-300 ${
                      index !== section.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to={link.path}>{link.name}</Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] max-w-7xl px-6 sm:px-16 relative z-10">
        <p className="font-poppins font-normal text-center text-[14px] sm:text-[18px] leading-[27px] text-dimWhite">
          Copyright © 2023 Ubiq. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[21px] h-[21px] object-contain cursor-pointer"
            aria-label="LinkedIn"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-full h-full text-dimWhite hover:text-secondary transition-colors duration-300" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;