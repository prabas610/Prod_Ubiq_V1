import React from 'react';
import { motion } from 'framer-motion';

const CookiePolicy = () => {
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
              Cookie <span className="text-gradient">Policy</span>
            </motion.h1>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 flex flex-col justify-start items-start px-6 sm:px-16 w-full max-w-7xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mb-8">
            This Cookie Policy explains how Ubiq AI uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <h2 className="font-poppins font-semibold text-[32px] text-white mb-4">1. What are cookies?</h2>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mb-8">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>

          <h2 className="font-poppins font-semibold text-[32px] text-white mb-4">2. Why do we use cookies?</h2>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mb-8">
            We use cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics and other purposes.
          </p>

          <h2 className="font-poppins font-semibold text-[32px] text-white mb-4">3. Types of cookies we use</h2>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mb-8">
            The specific types of first and third-party cookies served through our website and the purposes they perform are described below:
          </p>
          <ul className="list-disc list-inside font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mb-8">
            <li>Essential website cookies</li>
            <li>Performance and functionality cookies</li>
            <li>Analytics and customization cookies</li>
            <li>Advertising cookies</li>
          </ul>

          <h2 className="font-poppins font-semibold text-[32px] text-white mb-4">4. How can you control cookies?</h2>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mb-8">
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
          </p>

          <h2 className="font-poppins font-semibold text-[32px] text-white mb-4">5. Changes to this Cookie Policy</h2>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mb-8">
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;