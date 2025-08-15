import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Instagram, Mail, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div>
                
                <img src="/images/logo.png" alt="Logo" className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">PROBE</h3>
                <p className="text-sm text-gray-400">IIIT Nagpur</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Capturing moments, creating memories, and connecting photographers at IIIT Nagpur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'Gallery', path: '/gallery' },
                { name: 'Videos', path: '/videos' },
                { name: 'Events', path: '/events' },
                { name: 'Join Us', path: '/join' },
                { name: 'Upload Work', path: '/upload' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail size={16} />
                <span>probe@iiitn.ac.in</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Instagram size={16} />
                <span>@probe_iiitn</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin size={16} />
                <span>IIIT Nagpur, India</span>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h4 className="text-white font-semibold mb-4">Next Event</h4>
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="flex items-center space-x-2 text-yellow-400 text-sm mb-2">
                <Calendar size={16} />
                <span>March 15, 2025</span>
              </div>
              <p className="text-white text-sm font-medium">Photography Workshop</p>
              <p className="text-gray-400 text-xs mt-1">Portrait Photography Basics</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 PROBE Photography Club, IIIT Nagpur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;