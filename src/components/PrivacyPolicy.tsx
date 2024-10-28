import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
              Privacy <span className="text-gradient">Policy</span>
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
            At Ubiq AI, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines our practices concerning the collection, use, and disclosure of your data.
          </p>

          <h2 className="font-poppins font-semibold text-[32px] text-white mb-4">1. Information We Collect</h2>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mb-8">
            We may collect personal information such as your name, email address, and company details when you interact with our website or use our services. We also collect non-personal information such as browser type, IP address, and pages visited on our site.
          </p>

          <h2 className="font-poppins font-semibold text-[32px] text-white mb-4">2. How We Use Your Information</h2>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mb-8">
            We use the information we collect to provide and improve our services, communicate with you, and comply with legal obligations. We may also use your information for marketing purposes, but you can opt out at any time.
          </p>

          <h2 className="font-poppins font-semibold text-[32px] text-white mb-4">3. Data Security</h2>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mb-8">
            We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
          </p>

          <h2 className="font-poppins font-semibold text-[32px] text-white mb-4">4. Third-Party Disclosure</h2>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mb-8">
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you.
          </p>

          <h2 className="font-poppins font-semibold text-[32px] text-white mb-4">5. Your Rights</h2>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mb-8">
            You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your data. To exercise these rights, please contact us using the information provided at the end of this policy.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;