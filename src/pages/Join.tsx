import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Camera, Award, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rollNumber: '',
    branch: '',
    year: '',
    phone: '',
    experience: '',
    equipment: '',
    interests: [],
    portfolio: '',
    whyJoin: '',
  });

  const branches = ['CSE', 'ECE', 'DSAI', 'Other'];
  const years = ['First Year', 'Second Year', 'Third Year', 'Final Year'];
  const experienceLevels = ['Beginner', 'Intermediate', 'Advanced', 'Professional'];
  const interestOptions = [
    'Portrait Photography',
    'Street Photography',
    'Nature Photography',
    'Event Photography',
    'Macro Photography',
    'Architecture Photography',
    'Photo Editing',
    'Videography',
  ];

  const roles = [
    {
      title: 'General Member',
      description: 'Perfect for beginners and enthusiasts who want to learn and participate in club activities.',
      requirements: ['Interest in photography', 'Willingness to learn', 'Active participation'],
      icon: <Users className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: 'Core Team Member',
      description: 'For experienced photographers who want to take leadership roles and mentor others.',
      requirements: ['2+ years experience', 'Portfolio required', 'Leadership skills'],
      icon: <Award className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: 'Technical Team',
      description: 'For those interested in photo editing, website management, and technical aspects.',
      requirements: ['Technical skills', 'Software knowledge', 'Creative problem solving'],
      icon: <Camera className="w-8 h-8 text-yellow-400" />,
    },
  ];

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(item => item !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with Google Forms or your backend
    alert('Thank you for your application! We\'ll review it and get back to you within a week.');
    setFormData({
      name: '',
      email: '',
      rollNumber: '',
      branch: '',
      year: '',
      phone: '',
      experience: '',
      equipment: '',
      interests: [],
      portfolio: '',
      whyJoin: '',
    });
  };

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
          <h1 className="text-5xl font-bold text-white mb-4">Join PROBE</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Become part of IIIT Nagpur's premier photography community. Whether you're just starting 
            or already experienced, we have a place for you.
          </p>
        </motion.div>

        {/* Important Info */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-12"
        >
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Recruitment Information</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Applications are open year-round for general membership</li>
                <li>• Core team positions open during semester breaks</li>
                <li>• No prior experience required - we welcome all skill levels</li>
                <li>• Active participation in club events is expected</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Available Roles */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Available Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {role.icon}
                </div>
                <h3 className="text-white font-bold text-xl text-center mb-3">{role.title}</h3>
                <p className="text-gray-400 text-sm text-center mb-4">{role.description}</p>
                <div className="space-y-2">
                  <p className="text-white font-medium text-sm">Requirements:</p>
                  {role.requirements.map((req, reqIndex) => (
                    <div key={reqIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{req}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Application Form */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Application Form</h2>
          <div className="bg-gray-900 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="your.email@iiitn.ac.in"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Roll Number *</label>
                    <input
                      type="text"
                      required
                      value={formData.rollNumber}
                      onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="Your roll number"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Branch *</label>
                    <select
                      required
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    >
                      <option value="">Select your branch</option>
                      {branches.map((branch) => (
                        <option key={branch} value={branch}>{branch}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Year *</label>
                    <select
                      required
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    >
                      <option value="">Select your year</option>
                      {years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Photography Background */}
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Photography Background</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Experience Level *</label>
                    <select
                      required
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    >
                      <option value="">Select your experience level</option>
                      {experienceLevels.map((level) => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Equipment You Own</label>
                    <input
                      type="text"
                      value={formData.equipment}
                      onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="e.g., DSLR, Smartphone, Mirrorless, etc."
                    />
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-white font-medium mb-4">Areas of Interest *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {interestOptions.map((interest) => (
                    <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                        className="w-4 h-4 text-yellow-400 bg-gray-800 border-gray-700 rounded focus:ring-yellow-400"
                      />
                      <span className="text-gray-300 text-sm">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Portfolio */}
              <div>
                <label className="block text-white font-medium mb-2">Portfolio Link</label>
                <input
                  type="url"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="Instagram, Flickr, Google Drive, or personal website"
                />
                <p className="text-gray-400 text-sm mt-1">
                  Share your existing work if you have any (optional for beginners)
                </p>
              </div>

              {/* Why Join */}
              <div>
                <label className="block text-white font-medium mb-2">Why do you want to join PROBE? *</label>
                <textarea
                  required
                  value={formData.whyJoin}
                  onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your passion for photography and what you hope to achieve..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-yellow-400 text-black font-semibold py-4 rounded-lg hover:bg-yellow-300 transition-colors flex items-center justify-center space-x-2"
              >
                <Users className="w-5 h-5" />
                <span>Submit Application</span>
              </motion.button>
            </form>
          </div>
        </motion.section>

        {/* What Happens Next */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gray-800/50 rounded-lg p-6"
        >
          <div className="flex items-start space-x-3">
            <Clock className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
            <div className="text-sm text-gray-300">
              <p className="font-medium text-white mb-1">What happens after you apply?</p>
              <p>
                We review all applications within one week. If selected, you'll receive an email with 
                next steps including an informal interview (for core positions) and an invitation to 
                our orientation session. Welcome to the PROBE family!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Join;