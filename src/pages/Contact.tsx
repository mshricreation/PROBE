import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, MapPin, Phone, Clock, Users, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-yellow-400" />,
      title: 'Email',
      info: 'probe@iiitn.ac.in',
      description: 'For official inquiries and collaborations',
      link: 'mailto:probe@iiitn.ac.in',
    },
    {
      icon: <Instagram className="w-6 h-6 text-yellow-400" />,
      title: 'Instagram',
      info: '@probe.iiitn',
      description: 'Follow us for daily updates and featured works',
      link: 'https://instagram.com/probe.iiitn',
    },
    {
      icon: <Phone className="w-6 h-6 text-yellow-400" />,
      title: 'youtube',
      info: 'Probe IIIT Nagpur',
      description: 'New content and club updates',
      link: 'https://wa.me/919876543210',
    },
  ];

  const officeHours = [
    { day: 'Monday - Friday', time: '5:00 PM - 7:00 PM' },
    { day: 'Saturday', time: '2:00 PM - 6:00 PM' },
    { day: 'Sunday', time: 'Event days only' },
  ];

  const faqItems = [
    {
      question: 'Do I need professional equipment to join?',
      answer: 'Not at all! We welcome photographers of all levels, even if you only have a smartphone. We have equipment available for club activities and can guide you on purchasing gear as you progress.',
    },
    {
      question: 'Are there any membership fees?',
      answer: 'PROBE membership is completely free for all IIIT Nagpur students. We believe photography should be accessible to everyone.',
    },
    {
      question: 'How often do you organize events?',
      answer: 'We organize at least 2-3 events per month, including workshops, photo walks, competitions, and exhibitions. Check our events page for the latest schedule.',
    },
    {
      question: 'Can I showcase my work even if I\'m not a member?',
      answer: 'Yes! Our upload page is open to all IIIT Nagpur students. However, being a member gives you priority for featured spots and exclusive opportunities.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions about PROBE? Want to collaborate? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
            
            {/* Contact Methods */}
            <div className="space-y-6 mb-12">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="group flex items-start space-x-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <div className="flex-shrink-0 p-2 bg-gray-800 group-hover:bg-yellow-400/20 rounded-lg transition-colors">
                    {method.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-white font-semibold mb-1">{method.title}</h3>
                    <p className="text-yellow-400 font-medium mb-1">{method.info}</p>
                    <p className="text-gray-400 text-sm">{method.description}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-yellow-400 transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Office Hours */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-900 rounded-lg p-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="w-5 h-5 text-yellow-400" />
                <h3 className="text-white font-semibold">Club Hours</h3>
              </div>
              <div className="space-y-2">
                {officeHours.map((hour, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{hour.day}</span>
                    <span className="text-white font-medium">{hour.time}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Find us at the Student Activity Center, Ground Floor
              </p>
            </motion.div>
          </motion.div>

          {/* Location & FAQ */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {/* Location */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">Visit Us</h2>
              <div className="bg-gray-900 rounded-lg p-6 mb-6">
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">IIIT Nagpur Campus</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Student Activity Center, Ground Floor<br />
                      Indian Institute of Information Technology Nagpur<br />
                      VNIT Campus, South Ambazari Road<br />
                      Nagpur, Maharashtra 440010
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Embedded Map */}
              <div className="relative h-64 bg-gray-800 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8625073835675!2d79.04684931496524!3d21.144159285954506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0b5e7b2a7b9%3A0x2b3a6c7e8f9d1e2f!2sVNIT%20Nagpur!5e0!3m2!1sen!2sin!4v1635687254789!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-gray-900 rounded-lg p-6"
                  >
                    <h3 className="text-white font-semibold mb-3">{item.question}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Follow Our Journey</h2>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://instagram.com/probe.iiitn"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="group p-4 bg-gray-900 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
            >
              <Instagram className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a
              href="mailto:probe@iiitn.ac.in"
              whileHover={{ scale: 1.1 }}
              className="group p-4 bg-gray-900 rounded-full hover:bg-yellow-400 transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-white group-hover:text-black" />
            </motion.a>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Join our community of passionate photographers at IIIT Nagpur
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;