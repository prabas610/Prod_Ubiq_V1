import React from 'react';
import { Users, Briefcase, Award, Brain, Zap, BarChart, Shield, Scale, DollarSign, Heart, ShoppingCart, Database, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const coreValues = [
    { title: 'Innovation', icon: Briefcase, description: 'Pushing the boundaries of AI technology' },
    { title: 'Expertise', icon: Users, description: 'Deep domain knowledge across industries' },
    { title: 'Integrity', icon: Shield, description: 'Ethical AI development and deployment' },
    { title: 'Collaboration', icon: Award, description: 'Partnering with clients for success' },
  ];

  const expertise = [
    { title: 'Law', icon: Scale },
    { title: 'Finance', icon: DollarSign },
    { title: 'Healthcare', icon: Heart },
    { title: 'E-commerce', icon: ShoppingCart },
    { title: 'Supply Chain', icon: Database },
    { title: 'Scientific Research', icon: Microscope },
  ];

  const approach = [
    { title: "Deep Domain Analysis", description: "We start by leveraging our industry insight to identify your most critical needs", icon: Brain },
    { title: "Tailored AI Development", description: "Our solutions are built from the ground up with your industry in mind", icon: Zap },
    { title: "Seamless Implementation", description: "We ensure our AI integrates smoothly with your existing systems and processes", icon: BarChart },
    { title: "Continuous Refinement", description: "Our industry expertise allows us to continually evolve our solutions as your field advances", icon: Shield },
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-col justify-center items-center w-full max-w-7xl mx-auto px-6 sm:px-16">
        <motion.div 
          className="w-full py-16 md:py-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="font-poppins font-semibold text-[52px] md:text-[64px] text-white leading-[1.2] mb-6 text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About <span className="text-gradient">Ubiq</span>
          </motion.h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full mb-16"
        >
          <div className="bg-black-gradient-2 rounded-[20px] p-8 box-shadow backdrop-blur-sm bg-opacity-30">
            <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mb-6">
              At our core, we're industry veterans who have built large law firms, accounting firms, regulatory consulting firms, planned launch of biosimilars, founded EV and battery startups, and more. We identified what AI implementation lacks when the solutions offered in the market didn't work for us. We realized they weren't built by domain experts and leaders.
            </p>
            <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
              We have now come together to found Ubiq - an opportunity for domain experts and leaders to lead AI solutions development in niche areas of businesses.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full mb-16"
        >
          <h2 className="font-poppins font-semibold text-[32px] text-white mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <motion.div 
                key={value.title} 
                className="bg-black-gradient-2 rounded-[20px] p-6 box-shadow flex items-center backdrop-blur-sm bg-opacity-30"
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
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full mb-16"
        >
          <h2 className="font-poppins font-semibold text-[32px] text-white mb-8 text-center">Our Expertise</h2>
          <div className="bg-black-gradient-2 rounded-[20px] p-8 box-shadow mb-8 backdrop-blur-sm bg-opacity-30">
            <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
              Our team combines decades of hands-on experience in law, regulatory, accounting, finance, business processes, supply chain, e-commerce, and scientific research with cutting-edge AI expertise. This unique blend allows us to create AI solutions that don't just process data, but truly understand the context and nuances of different workflows and departments within your businesses.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {expertise.map((item, index) => (
              <motion.div 
                key={item.title} 
                className="bg-black-gradient-2 rounded-[20px] p-4 box-shadow flex flex-col items-center justify-center text-center backdrop-blur-sm bg-opacity-30"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <item.icon className="w-12 h-12 text-secondary mb-2" />
                <h3 className="font-poppins font-medium text-[18px] text-white">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="w-full mb-16"
        >
          <h2 className="font-poppins font-semibold text-[32px] text-white mb-8 text-center">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approach.map((item, index) => (
              <motion.div 
                key={item.title} 
                className="bg-black-gradient-2 rounded-[20px] p-6 box-shadow flex items-start backdrop-blur-sm bg-opacity-30"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <item.icon className="w-12 h-12 text-secondary mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-poppins font-medium text-[20px] text-white mb-2">{item.title}</h3>
                  <p className="font-poppins font-normal text-dimWhite">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-full mb-24 text-center"
        >
          <h2 className="font-poppins font-semibold text-[32px] text-white mb-8">Ready to Transform Your Business?</h2>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mb-8">
            Let's discuss how our AI solutions can address your unique challenges and drive innovation in your industry.
          </p>
          <Link
            to="/contact"
            className="py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] transition-all hover:shadow-lg hover:scale-105 inline-block"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;