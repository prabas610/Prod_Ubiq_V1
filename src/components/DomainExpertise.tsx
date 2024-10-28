import React from 'react';
import { Scale, DollarSign, FileText, ShoppingCart, Heart, Landmark, Database, Microscope, Flask, ChemicalGlass, TestTube } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const domains = [
  {
    name: 'Legal',
    icon: Scale,
    description: 'Revolutionizing legal processes with AI-powered solutions.',
    solutions: [
      {
        name: 'Legal Research Assistant',
        description: 'AI-powered tool for quick analysis of legal data, case laws, and precedents.',
      },
      {
        name: 'Contract Intelligence',
        description: 'AI-driven platform for efficient review and analysis of legal contracts.',
      },
      {
        name: 'Litigation Prediction',
        description: 'AI system to predict litigation success likelihood based on case details and historical data.',
      },
    ],
    expertise: 'Our team includes legal tech experts and former lawyers who understand the intricacies of the legal domain.',
    certifications: 'ISO 27001 certified for information security management in legal tech.',
  },
  {
    name: 'Accounting and Finance',
    icon: DollarSign,
    description: 'Enhancing financial operations with intelligent AI solutions.',
    solutions: [
      {
        name: 'Intelligent Auditing',
        description: 'AI-enabled solution for streamlined analysis of financial records and transactions.',
      },
      {
        name: 'Automated Bookkeeping',
        description: 'AI-driven platform for accurate categorization and recording of financial transactions.',
      },
      {
        name: 'Financial Forecasting',
        description: 'AI-powered system for accurate financial projections based on historical data and market trends.',
      },
    ],
    expertise: 'Our finance AI team includes certified accountants and financial analysts with decades of industry experience.',
    certifications: 'SOC 2 Type II certified for maintaining the highest standards of financial data security.',
  },
  {
    name: 'Regulatory and Compliance',
    icon: FileText,
    description: 'Ensuring adherence to complex regulations with AI-driven compliance solutions.',
    solutions: [
      {
        name: 'Regulatory Compliance Assistant',
        description: 'AI platform for real-time guidance on complex regulatory requirements.',
      },
      {
        name: 'Risk Assessment and Monitoring',
        description: 'AI-driven solution for continuous monitoring and assessment of compliance risks.',
      },
      {
        name: 'Policy Management',
        description: 'AI-enabled platform for streamlined creation and management of organizational policies.',
      },
    ],
    expertise: 'Our compliance AI team includes former regulators and compliance officers from various industries.',
    certifications: 'GDPR and CCPA compliant, ensuring the highest standards of data protection and privacy.',
  },
  {
    name: 'E-commerce',
    icon: ShoppingCart,
    description: 'Transforming online shopping experiences with AI-powered personalization and security.',
    solutions: [
      {
        name: 'Personalized Product Recommendations',
        description: 'AI-driven system for tailored product suggestions based on customer behavior.',
      },
      {
        name: 'Intelligent Chatbots',
        description: 'AI-powered chatbots for 24/7 customer support and assistance.',
      },
      {
        name: 'Fraud Detection and Prevention',
        description: 'AI-enabled system to identify and prevent fraudulent activities in e-commerce.',
      },
    ],
    expertise: 'Our e-commerce AI specialists have worked with leading global online retailers and marketplaces.',
    certifications: 'PCI DSS certified, ensuring secure handling of payment card information.',
  },
  {
    name: 'Health Tech',
    icon: Heart,
    description: 'Advancing healthcare with AI-driven diagnostics and personalized medicine.',
    solutions: [
      {
        name: 'Medical Imaging Analysis',
        description: 'AI platform for analyzing medical images to assist in disease detection and diagnosis.',
      },
      {
        name: 'Clinical Decision Support',
        description: 'AI-driven system for personalized treatment recommendations based on patient data.',
      },
      {
        name: 'Predictive Analytics for Disease Management',
        description: 'AI-enabled platform for predicting disease risks and enabling preventive measures.',
      },
    ],
    expertise: 'Our health tech AI team includes medical professionals and biomedical engineers.',
    certifications: 'HIPAA compliant and FDA-approved for select medical AI applications.',
  },
  {
    name: 'FinTech',
    icon: Landmark,
    description: 'Innovating financial services with AI-powered solutions for improved efficiency and security.',
    solutions: [
      {
        name: 'Automated Investment Management',
        description: 'AI platform for data-driven investment management and advisory services.',
      },
      {
        name: 'Intelligent Fraud Detection',
        description: 'AI system for identifying and preventing fraudulent activities in finance.',
      },
      {
        name: 'Credit Risk Assessment',
        description: 'AI-enabled platform for accurate credit risk assessments and lending decisions.',
      },
    ],
    expertise: 'Our FinTech AI experts have backgrounds in quantitative finance and machine learning.',
    certifications: 'SOC 2 Type II and ISO 27001 certified for financial data security and management.',
  },
  {
    name: 'Web 3.0 and Blockchain',
    icon: Database,
    description: 'Pushing the boundaries of decentralized technologies with AI-enhanced blockchain solutions.',
    solutions: [
      {
        name: 'Smart Contract Auditing',
        description: 'AI-powered platform for analyzing and auditing smart contracts for vulnerabilities.',
      },
      {
        name: 'Decentralized Application (DApp) Development',
        description: 'Leveraging AI and blockchain for innovative DApp creation across various domains.',
      },
      {
        name: 'Blockchain Analytics',
        description: 'AI-enabled platform for valuable insights from blockchain data and network activity.',
      },
    ],
    expertise: 'Our blockchain AI team includes cryptographers and distributed systems experts.',
    certifications: 'Certified by the Blockchain Council for blockchain expertise and best practices.',
  },
  {
    name: 'Lab and Research',
    icon: Microscope,
    description: 'Accelerating scientific discovery with AI-powered research and laboratory solutions.',
    solutions: [
      {
        name: 'Research Assistant AI',
        description: 'AI-powered platform for literature review, data analysis, and research planning.',
      },
      {
        name: 'Lab Process Automation',
        description: 'AI-driven system for automating laboratory workflows and documentation.',
      },
      {
        name: 'Experimental Design Optimization',
        description: 'AI-enabled platform for optimizing experimental parameters and predicting outcomes.',
      },
    ],
    expertise: 'Our research AI team includes PhD scientists and experienced laboratory professionals.',
    certifications: 'ISO 17025 accredited for laboratory testing and calibration services.',
  },
];

const DomainExpertise = () => {
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
              Our <span className="text-gradient">Domain Expertise</span>
            </motion.h1>
            <motion.p 
              className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Leveraging decades of industry experience to deliver AI solutions that truly understand your business context.
            </motion.p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl px-6 sm:px-16 mb-24">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col justify-between p-8 bg-black-gradient-2 rounded-[20px] box-shadow transition-all hover:shadow-lg hover:scale-105"
            >
              <div>
                <div className="flex items-center mb-4">
                  <domain.icon className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="font-poppins font-semibold text-[24px] leading-[1.2] text-gradient">{domain.name}</h3>
                </div>
                <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-6">
                  {domain.description}
                </p>
                <div className="bg-gray-800 p-4 rounded-lg mb-6">
                  <h4 className="font-poppins font-medium text-[18px] text-white mb-2">Key Solutions:</h4>
                  <ul className="space-y-2">
                    {domain.solutions.map((solution) => (
                      <li key={solution.name} className="flex items-start">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <div>
                          <span className="font-medium text-secondary">{solution.name}:</span>
                          <span className="text-dimWhite text-sm"> {solution.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg mb-6">
                  <h4 className="font-poppins font-medium text-[18px] text-white mb-2">Our Expertise:</h4>
                  <p className="text-dimWhite text-sm">{domain.expertise}</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-poppins font-medium text-[18px] text-white mb-2">Certifications:</h4>
                  <p className="text-dimWhite text-sm">{domain.certifications}</p>
                </div>
              </div>
              <Link
                to="/contact"
                className="mt-6 flex items-center justify-center font-poppins font-medium text-[16px] text-primary bg-blue-gradient py-4 px-6 rounded-[10px] transition-all hover:shadow-lg hover:scale-105"
              >
                Learn More About {domain.name}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.section 
          className="flex flex-col sm:flex-row justify-center items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 bg-black-gradient-2 rounded-[20px] box-shadow w-full max-w-7xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex-1 flex flex-col mb-8 sm:mb-0">
            <h2 className="font-poppins font-semibold text-[32px] text-white leading-[1.2] mb-4">
              Ready to leverage our <span className="text-gradient">domain expertise</span>?
            </h2>
            <p className="font-poppins font-normal text-dimWhite text-[16px] sm:text-[18px] leading-[30.8px] mb-8">
              Let's discuss how our industry experience can help transform your business with AI.
            </p>
          </div>

          <div className="flex justify-center items-center sm:ml-10 ml-0">
            <Link
              to="/contact"
              className="py-4 px-6 bg-blue-gradient font-poppins font-medium text-[16px] sm:text-[18px] text-primary outline-none rounded-[10px] transition-all hover:shadow-lg hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default DomainExpertise;