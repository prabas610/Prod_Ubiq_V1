import React from 'react';
import { motion } from 'framer-motion';

const TermsOfUse = () => {
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
              Terms of <span className="text-gradient">Use</span>
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
            Welcome to Ubiq AI. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="font-poppins font-semibold text-[32px] text-white mb-4">1. Acceptance of Terms</h2>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mb-8">
            By accessing this website, you are agreeing to be bound by these Terms of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
          </p>

          <h2 className="font-poppins font-semibold text-[32px] text-white mb-4">2. Use License</h2>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mb-8">
            Permission is granted to temporarily download one copy of the materials (information or software) on Ubiq AI's website for personal, non-commercial transitory viewing only.
          </p>

          <h2 className="font-poppins font-semibold text-[32px] text-white mb-4">3. Disclaimer</h2>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mb-8">
            The materials on Ubiq AI's website are provided on an 'as is' basis. Ubiq AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="font-poppins font-semibold text-[32px] text-white mb-4">4. Limitations</h2>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mb-8">
            In no event shall Ubiq AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Ubiq AI's website.
          </p>

          <h2 className="font-poppins font-semibold text-[32px] text-white mb-4">5. Revisions and Errata</h2>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mb-8">
            The materials appearing on Ubiq AI's website could include technical, typographical, or photographic errors. Ubiq AI does not warrant that any of the materials on its website are accurate, complete or current. Ubiq AI may make changes to the materials contained on its website at any time without notice.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfUse;