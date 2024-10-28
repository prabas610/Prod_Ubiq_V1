import React from 'react';
import { MapPin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-col justify-center items-center w-full">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center w-full py-16 md:py-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-1 flex flex-col justify-center items-start px-6 sm:px-16">
            <motion.h1 
              className="font-poppins font-semibold text-[52px] md:text-[64px] text-white leading-[1.2] mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get in <span className="text-gradient">Touch</span>
            </motion.h1>
            <motion.p 
              className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We'd love to hear from you. Let's discuss how Ubiq can transform your business with AI.
            </motion.p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl px-6 sm:px-16 mb-16">
          {[
            { icon: MapPin, title: 'Our Office', content: 'Ubiq, Sector - 142, Noida, Uttar Pradesh' },
            { icon: Mail, title: 'Email', content: 'raj@ubiqtech.ai' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black-gradient rounded-[20px] p-6 box-shadow hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <item.icon className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-poppins font-medium text-[20px] text-white text-center mb-2">{item.title}</h3>
              <p className="font-poppins font-normal text-dimWhite text-center">{item.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-3xl bg-black-gradient rounded-[20px] p-8 box-shadow mb-16 text-center"
        >
          <h2 className="font-poppins font-semibold text-[32px] text-white mb-4">Ready to Get Started?</h2>
          <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-4">
            Drop us an email and we'll get back to you within 24 hours.
          </p>
          <a
            href="mailto:raj@ubiqtech.ai"
            className="inline-block py-4 px-8 bg-blue-gradient font-poppins font-medium text-[18px] text-primary rounded-[10px] hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Email Us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;