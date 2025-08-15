import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload as UploadIcon, Image, Camera, Award, AlertCircle } from 'lucide-react';

const Upload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    title: '',
    description: '',
    fileUrl: '',
  });

  const categories = ['Portrait', 'Street', 'Nature', 'Events', 'Architecture', 'Abstract'];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with Google Forms or your backend
    alert('Thank you for your submission! We\'ll review your work and get back to you soon.');
    setFormData({
      name: '',
      email: '',
      category: '',
      title: '',
      description: '',
      fileUrl: '',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Upload Your Work
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Share your photography with the PROBE community. The best submissions get featured on our website and social media!
          </p>
        </motion.div>

        {/* Guidelines */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-6 mb-8"
        >
          <div className="flex items-start space-x-3">
            <Award className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-yellow-400 font-semibold mb-2">Submission Guidelines</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• High-resolution images (minimum 1920x1080px)</li>
                <li>• Original work only - no plagiarism</li>
                <li>• Appropriate content suitable for all audiences</li>
                <li>• Include a meaningful title and description</li>
                <li>• Best submissions will be featured on our gallery</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Upload Form */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900 rounded-lg p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">
                  Full Name *
                </label>
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
                <label className="block text-white font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="your.email@iiitn.ac.in"
                />
              </div>
            </div>

            {/* Photo Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">
                  Category *
                </label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">
                  Photo Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="Give your photo a title"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-white font-medium mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your photo, the story behind it, or your technique..."
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-white font-medium mb-2">
                Photo/Video Upload *
              </label>
              <div
                className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive
                    ? 'border-yellow-400 bg-yellow-400/10'
                    : 'border-gray-600 hover:border-gray-500'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
              >
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 bg-gray-800 rounded-full">
                      <UploadIcon className="w-8 h-8 text-yellow-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-2">
                      Drag and drop your file here, or click to browse
                    </p>
                    <p className="text-gray-400 text-sm">
                      For large files, please upload to Google Drive/Dropbox and share the link below
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Alternative: File URL */}
              <div className="mt-4">
                <label className="block text-gray-400 text-sm mb-2">
                  Or paste a shareable link (Google Drive, Dropbox, etc.)
                </label>
                <input
                  type="url"
                  value={formData.fileUrl}
                  onChange={(e) => setFormData({ ...formData, fileUrl: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="https://drive.google.com/..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-yellow-400 text-black font-semibold py-4 rounded-lg hover:bg-yellow-300 transition-colors flex items-center justify-center space-x-2"
            >
              <Camera className="w-5 h-5" />
              <span>Submit Your Work</span>
            </motion.button>
          </form>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-gray-800/50 rounded-lg p-6"
        >
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
            <div className="text-sm text-gray-300">
              <p className="font-medium text-white mb-1">What happens next?</p>
              <p>
                Our team reviews all submissions within 48 hours. Selected works will be featured in our gallery,
                and you'll receive an email notification. Keep creating amazing content!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Upload;