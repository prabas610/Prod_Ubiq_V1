import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Zap, BarChart, Shield, ArrowRight, Users, Briefcase, Award } from 'lucide-react';

const Home = () => {
  const services = [
    { name: 'AI-Powered Analytics', icon: Brain, description: 'Harness the power of data with our advanced analytics solutions.' },
    { name: 'Natural Language Processing', icon: Zap, description: 'Unlock insights from text data with our NLP technologies.' },
    { name: 'Intelligent Automation', icon: BarChart, description: 'Streamline your processes with AI-driven automation.' },
    { name: 'AI Security Solutions', icon: Shield, description: 'Protect your digital assets with AI-enhanced cybersecurity measures.' },
  ];

  const coreValues = [
    { title: 'Deep Expertise', icon: Users, description: 'Deep domain knowledge across industries' },
    { title: 'Innovation', icon: Briefcase, description: 'Pushing the boundaries of AI technology' },
    { title: 'Integrity', icon: Shield, description: 'Ethical AI development and deployment' },
    { title: 'Collaboration', icon: Award, description: 'Partnering with clients for success' },
  ];

  return (
    <div className="w-full overflow-hidden">
      <motion.section 
        className="flex flex-col md:flex-row justify-between items-center w-full py-16 md:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex-1 flex flex-col justify-center items-start px-6 sm:px-16 mb-12 md:mb-0">
          <motion.h2 
            className="font-poppins font-semibold text-[40px] sm:text-[52px] md:text-[64px] text-white leading-[1.2] mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-gradient">Tailor-Made Gen-AI Solutions</span> for Businesses
          </motion.h2>
          <motion.p 
            className="font-poppins font-normal text-White text-[18px] sm:text-[20px] leading-[1.5] max-w-[600px] mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Designed by Industry Experts & Leaders, harnessing decades of professional experience to deliver AI that truly understands your business.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to="/contact"
              className="py-4 px-6 font-poppins font-medium text-[16px] sm:text-[18px] text-white outline-none bg-transparent border-2 border-blue-gradient rounded-[10px] transition-all hover:bg-blue-gradient hover:text-primary hover:shadow-lg"
            >
              Explore our Expertise
            </Link>
          </motion.div>
        </div>
        <motion.div 
          className="flex-1 flex justify-center items-center md:ml-10 ml-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] relative">
            <div className="absolute inset-0 bg-blue-gradient rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute inset-4 bg-primary rounded-full flex items-center justify-center">
              <Brain className="w-24 h-24 sm:w-32 sm:h-32 text-secondary" />
            </div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section 
        className="flex flex-col justify-center items-center py-16 my-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12 px-6">
          <h2 className="font-poppins font-semibold text-[32px] sm:text-[40px] md:text-[56px] text-white leading-[1.2] mb-4">
            About <span className="text-gradient">Us</span>
          </h2>
        </div>

        <div className="w-full max-w-7xl px-6 sm:px-16">
          <motion.div 
            className="bg-black-gradient rounded-[20px] p-8 box-shadow mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-poppins font-normal text-dimWhite text-[16px] sm:text-[18px] leading-[30.8px] mb-6">
              At Ubiq, we're industry veterans who have built large law firms, accounting firms, regulatory consulting firms, planned launch of biosimilars, founded EV and battery startups, and more. We have identified what AI implementation lacks when the solutions offered in the market didn't work with us.
            </p>
            <p className="font-poppins font-normal text-dimWhite text-[16px] sm:text-[18px] leading-[30.8px] mb-6">
              We have now come together to found Ubiq - an opportunity for domain experts and leaders to lead AI solutions development in niche areas of businesses. Our team combines decades of hands-on experience with cutting-edge AI expertise to create solutions that truly understand the context and nuances of your business.
            </p>
            <p className="font-poppins font-normal text-dimWhite text-[16px] sm:text-[18px] leading-[30.8px]">
              This unique blend allows us to create AI solutions that don't just process data, but truly understand the context and nuances of different workflows and departments within your businesses. 
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <motion.div 
                key={value.title}
                className="bg-black-gradient rounded-[20px] p-6 box-shadow flex items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <value.icon className="w-12 h-12 text-secondary mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-poppins font-medium text-[20px] text-white mb-2">{value.title}</h3>
                  <p className="font-poppins font-normal text-dimWhite">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="flex flex-col justify-center items-center py-16 my-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12 px-6">
          <h2 className="font-poppins font-semibold text-[32px] sm:text-[40px] md:text-[56px] text-white leading-[1.2] mb-4">
            Our <span className="text-gradient">Approach</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-7xl px-6 sm:px-16">
          {[
            { title: "Deep Domain Analysis", description: "We start by leveraging our domain expertise to identify your businesses' most critical needs" },
            { title: "Tailored AI Development", description: "Our solutions are built from the ground up with your industry in mind" },
            { title: "Seamless Implementation", description: "We ensure our AI integrates smoothly with your existing systems and processes" },
            { title: "Continuous Refinement", description: "Our domain expertise allows us to continually evolve our solutions as your field advances" },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="flex flex-col justify-between p-6 sm:p-8 bg-black-gradient-2 rounded-[20px] box-shadow transition-all hover:shadow-lg hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="font-poppins font-semibold text-[20px] sm:text-[24px] leading-[1.2] text-gradient mb-4">{item.title}</h3>
              <p className="font-poppins font-normal text-dimWhite text-[14px] sm:text-[16px] leading-[24px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="flex flex-col justify-center items-center py-16 my-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12 px-6">
          <h2 className="font-poppins font-semibold text-[32px] sm:text-[40px] md:text-[56px] text-white leading-[1.2] mb-4">
            Why Choose<span className="text-gradient"> Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-7xl px-6 sm:px-16">
          {[
            { title: "Been There, Done That", description: "Our team has faced the same challenges we're now solving with AI." },
            { title: "Future-Focused Innovation", description: "We're not just solving today's problems, but anticipating tomorrow's." },
            { title: "Tailored, Not Off-the-Shelf", description: "Every solution is built for your specific industry context." },
            { title: "Continuous Industry Alignment", description: "As your sector evolves, so do our AI solutions." },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="flex flex-col justify-between p-6 sm:p-8 bg-black-gradient-2 rounded-[20px] box-shadow transition-all hover:shadow-lg hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="font-poppins font-semibold text-[20px] sm:text-[24px] leading-[1.2] text-gradient mb-4">{item.title}</h3>
              <p className="font-poppins font-normal text-dimWhite text-[14px] sm:text-[16px] leading-[24px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="flex flex-col sm:flex-row justify-center items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 bg-black-gradient-2 rounded-[20px] box-shadow"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex-1 flex flex-col mb-8 sm:mb-0">
          <h2 className="font-poppins font-semibold text-[32px] sm:text-[40px] md:text-[56px] text-white leading-[1.2] mb-4">
            Ready to <span className="text-gradient">revolutionize</span> your business?
          </h2>
          <p className="font-poppins font-normal text-dimWhite text-[16px] sm:text-[18px] leading-[30.8px] mb-8">
            Discover how Ubiq can transform your operations and drive innovation.
          </p>
        </div>

        <div className="flex justify-center items-center sm:ml-10 ml-0">
          <Link
            to="/contact"
            className="py-4 px-6 bg-blue-gradient font-poppins font-medium text-[16px] sm:text-[18px] text-primary outline-none rounded-[10px] transition-all hover:shadow-lg hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;