import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about-us" },
    { title: "Our Services", path: "/services" },
    { title: "Domain Expertise", path: "/domain-expertise" },
    { title: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setToggle(false);
  };

  return (
    <motion.nav 
      className={`w-full flex py-4 sm:py-6 justify-between items-center navbar fixed top-0 left-0 right-0 z-50 px-4 sm:px-16 transition-all duration-300 ${
        scrolled ? 'bg-primary bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-lg' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="flex items-center" aria-label="Ubiq Home" onClick={handleLinkClick}>
        <Brain className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] text-secondary" />
        <span className="font-poppins font-semibold text-[16px] sm:text-[18px] leading-[23px] ml-2">
          <span className="text-gradient">Ubiq</span>
        </span>
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <motion.li
            key={nav.title}
            className={`font-poppins font-normal cursor-pointer text-[14px] sm:text-[16px] ${
              location.pathname === nav.path ? 'text-white' : 'text-dimWhite'
            } ${index === navLinks.length - 1 ? 'mr-0' : 'mr-6 sm:mr-10'}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={nav.path} className="relative group" onClick={handleLinkClick}>
              {nav.title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
            </Link>
          </motion.li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
          aria-expanded={toggle}
          aria-label="Toggle menu"
        >
          {toggle ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>

        <AnimatePresence>
          {toggle && (
            <motion.div
              className="p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <motion.li
                    key={nav.title}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      location.pathname === nav.path ? 'text-white' : 'text-dimWhite'
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to={nav.path} onClick={handleLinkClick}>{nav.title}</Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;