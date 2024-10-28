import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Zap, BarChart, Shield, Microscope, Code, Database, Cpu, Bot, Cog, Network, LineChart, FileText, Heart, Landmark, ArrowRight } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      name: 'Custom AI Assistants',
      icon: Bot,
      description: 'Intelligent virtual assistants tailored to your specific industry needs.',
      features: [
        'Industry-Specific Chatbots',
        'Virtual Customer Service Agents',
        'Internal Support Assistants',
        'Document Processing Assistants'
      ]
    },
    {
      name: 'Specialized AI Models',
      icon: Brain,
      description: 'Custom-trained AI models designed for your unique business requirements.',
      features: [
        'Custom-Trained Language Models',
        'Domain-Specific AI Models',
        'Business Process Automation',
        'Predictive Analytics Models'
      ]
    },
    {
      name: 'AI Integration Services',
      icon: Network,
      description: 'Seamless integration of AI solutions into your existing workflows.',
      features: [
        'AI-Powered Workflow Automation',
        'Legacy System Enhancement',
        'Smart Document Processing',
        'Intelligent Data Analytics'
      ]
    }
  ];

  const industrySpecific = [
    {
      title: 'Legal Tech AI',
      icon: Shield,
      solutions: [
        {
          name: 'Legal AI Assistant',
          features: [
            'Case law research automation',
            'Document review & analysis',
            'Legal drafting support',
            'Citation verification'
          ]
        },
        {
          name: 'Contract Intelligence',
          features: [
            'Automated contract analysis',
            'Risk identification',
            'Compliance verification',
            'Template generation'
          ]
        }
      ]
    },
    {
      title: 'Accounting & Finance',
      icon: FileText,
      solutions: [
        {
          name: 'Finance AI Assistant',
          features: [
            'Transaction categorization',
            'Audit support',
            'Financial analysis',
            'Report generation'
          ]
        },
        {
          name: 'Accounting Automation',
          features: [
            'Bookkeeping automation',
            'Reconciliation support',
            'Tax compliance checking',
            'Financial forecasting'
          ]
        }
      ]
    },
    {
      title: 'Health Tech',
      icon: Heart,
      solutions: [
        {
          name: 'Healthcare AI Assistant',
          features: [
            'Clinical documentation',
            'Patient data analysis',
            'Treatment planning',
            'Research support'
          ]
        },
        {
          name: 'Medical Intelligence',
          features: [
            'Diagnostic support',
            'Medical imaging analysis',
            'Patient monitoring',
            'Care coordination'
          ]
        }
      ]
    },
    {
      title: 'FinTech',
      icon: Landmark,
      solutions: [
        {
          name: 'Finance AI Agent',
          features: [
            'Investment analysis',
            'Risk assessment',
            'Trading support',
            'Portfolio management'
          ]
        },
        {
          name: 'Financial Intelligence',
          features: [
            'Market analysis',
            'Fraud detection',
            'Credit assessment',
            'Transaction monitoring'
          ]
        }
      ]
    },
    {
      title: 'Web 3.0 & Blockchain',
      icon: Database,
      solutions: [
        {
          name: 'Blockchain AI Assistant',
          features: [
            'Smart contract analysis',
            'Transaction monitoring',
            'Risk assessment',
            'Security verification'
          ]
        },
        {
          name: 'DeFi Intelligence',
          features: [
            'Protocol analysis',
            'Market monitoring',
            'Smart contract auditing',
            'Performance tracking'
          ]
        }
      ]
    },
    {
      title: 'Lab & Research',
      icon: Microscope,
      solutions: [
        {
          name: 'Research AI Assistant',
          features: [
            'Literature review',
            'Data analysis',
            'Experiment planning',
            'Report generation'
          ]
        },
        {
          name: 'Lab Intelligence',
          features: [
            'Process automation',
            'Quality control',
            'Documentation support',
            'Research optimization'
          ]
        }
      ]
    }
  ];

  const additionalFeatures = [
    { name: 'Custom model training', icon: Brain },
    { name: 'System integration', icon: Network },
    { name: 'Real-time analytics', icon: LineChart },
    { name: 'Performance monitoring', icon: Cog }
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Our Core <span className="text-gradient">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black-gradient-2 rounded-[20px] p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-secondary/10 rounded-full mr-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gradient">{service.name}</h3>
                </div>
                <p className="text-dimWhite text-base mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-dimWhite">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Industry <span className="text-gradient">Solutions</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {industrySpecific.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black-gradient-2 rounded-[20px] p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-secondary/10 rounded-full mr-4 group-hover:scale-110 transition-transform">
                    <industry.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gradient">{industry.title}</h3>
                </div>
                <div className="space-y-6">
                  {industry.solutions.map((solution) => (
                    <div key={solution.name} className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-colors">
                      <h4 className="text-lg font-semibold text-white mb-4">{solution.name}</h4>
                      <ul className="space-y-3">
                        {solution.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-dimWhite">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Additional <span className="text-gradient">Services</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black-gradient-2 rounded-[20px] p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="p-4 bg-secondary/10 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-gradient">{feature.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-black-gradient-2 rounded-[20px] p-12 lg:p-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-gradient">Transform</span> Your Business?
          </h2>
          <p className="text-dimWhite mb-8 max-w-2xl mx-auto text-lg">
            Let's discuss how our AI solutions can revolutionize your operations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-gradient text-primary font-medium text-lg py-4 px-8 rounded-[10px] hover:shadow-lg transition-all duration-300 hover:scale-105 group"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;