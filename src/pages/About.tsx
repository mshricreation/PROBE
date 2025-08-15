import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Target, Users, Award, Instagram, Mail, Linkedin } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Manu Shrivastava',
      role: 'Club Lead',
      year: 'Second Year CSE',
      image: '/images/manu.jpeg',
      specialty: 'Cinematography',
      social: {
        instagram: '@_manu.shriiva',
        email: 'bt24csh008@iiitn.ac.in',
      },
    },
    {
      name: 'Akshit Yadav',
      role: 'Club Co-lead',
      year: 'Second Year CSE',
      image: '/images/akshit.jpg',
      specialty: 'Street Photography',
      social: {
        instagram: '@akshitydv01',
        email: 'bt24cse098@iiitn.ac.in',
      },
    },
    {
      name: 'Sanket Chaudhari',
      role: 'Mentor',
      year: 'Third Year ECE',
      image: '/images/sanketbhaiya.jpg',
      specialty: 'former club Lead',
      social: {
        instagram: '@sankett.45',
        email: 'amit@iiitn.ac.in',
      },
    },
    {
      name: 'Harshal Mestri',
      role: 'ideator',
      year: 'Second Year CSE',
      image: '/images/harshal.jpg',
      specialty: '',
      social: {
        instagram: '@sneha_nature',
        email: 'sneha@iiitn.ac.in',
      },
    },
     {
      name: 'Shreyam Prashar',
      role: 'Marketing Lead',
      year: 'Second Year CSE',
      image: '/images/shreyam.jpeg',
      specialty: 'Good communication skills',
      social: {
        instagram: '#',
        email: 'bt24cse059',
      },
    },
    {
      name: 'Sohan Ganji',
      role: 'Club Co-lead',
      year: 'Second Year CSE',
      image: '/images/sohan.jpeg',
      specialty: 'Street Photography',
      social: {
        instagram: '@akshitydv01',
        email: 'bt24cse098@iiitn.ac.in',
      },
    },
    {
      name: 'Ayush Kathal',
      role: 'Corporate Lead',
      year: 'Second Year CSE',
      image: '/images/kathal.jpeg',
      specialty: 'Street Photography',
      social: {
        instagram: '@akshitydv01',
        email: 'bt24cse098@iiitn.ac.in',
      },
    },
    {
      name: 'varad chopade',
      role: 'VFX lead',
      year: 'Second Year CSE',
      image: '/images/varad.jpeg',
      specialty: 'Street Photography',
      social: {
        instagram: '@akshitydv01',
        email: 'bt24cse098@iiitn.ac.in',
      },
    },
  ];

  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: 'Best Photography Club',
      description: 'Inter-college competition winner 2024',
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: '150+ Active Members',
      description: 'Growing community of photography enthusiasts',
    },
    {
      icon: <Camera className="w-8 h-8 text-yellow-400" />,
      title: '25+ Events Organized',
      description: 'Workshops, competitions, and exhibitions',
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      title: '500+ Photos Showcased',
      description: 'Featured works from our talented members',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">About PROBE</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            We are a passionate community of photographers at IIIT Nagpur, dedicated to capturing 
            life's beautiful moments and fostering creativity through the art of photography.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-gray-900 rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  PROBE was founded in 2022 with a simple yet powerful vision: to create a platform 
                  where photography and videography enthusiasts can learn, grow, and showcase their talent. 
                  We believe that every moment has a story worth capturing, and every creator has a unique 
                  perspective worth sharing.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Through workshops, competitions, exhibitions, and collaborative projects, we aim to 
                  build a vibrant community that celebrates both photography and videography while developing 
                  technical skills and creative vision across all visual media.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="PROBE Club"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Achievements */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="bg-gray-900 p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-white font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Past Event Winners */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Past Event Winners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Homecoming Cinematography Contest */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-lg p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Award className="w-8 h-8 text-yellow-400" />
                <div>
                  <h3 className="text-xl font-bold text-white">Homecoming Cinematography Contest 2024</h3>
                  <p className="text-gray-400 text-sm">October 2024</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                  <div>
                    <p className="text-yellow-400 font-semibold">🥇 First Place</p>
                    <p className="text-white font-medium">Manu Shrivastava</p>
                    <p className="text-gray-400 text-sm">"Memories in Motion"</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                  <div>
                    <p className="text-gray-300 font-semibold">🥈 Second Place</p>
                    <p className="text-white font-medium">Akshit Yadav</p>
                    <p className="text-gray-400 text-sm">"Campus Chronicles"</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                  <div>
                    <p className="text-gray-300 font-semibold">🥉 Third Place</p>
                    <p className="text-white font-medium">Priya Sharma</p>
                    <p className="text-gray-400 text-sm">"Homecoming Vibes"</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Short Film Competition */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-blue-400/10 to-blue-600/10 border border-blue-400/30 rounded-lg p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Award className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold text-white">Short Film Competition 2024</h3>
                  <p className="text-gray-400 text-sm">September 2024</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                  <div>
                    <p className="text-blue-400 font-semibold">🥇 Best Film</p>
                    <p className="text-white font-medium">Amit Kumar</p>
                    <p className="text-gray-400 text-sm">"The Last Lecture"</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                  <div>
                    <p className="text-gray-300 font-semibold">🎬 Best Direction</p>
                    <p className="text-white font-medium">Sneha Reddy</p>
                    <p className="text-gray-400 text-sm">"Silent Echoes"</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                  <div>
                    <p className="text-gray-300 font-semibold">🎭 Best Acting</p>
                    <p className="text-white font-medium">Vikash Reddy</p>
                    <p className="text-gray-400 text-sm">"Midnight Conversations"</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
        {/* Team Section */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="group bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-center space-x-3">
                        <a
                          href={`https://instagram.com/${member.social.instagram.replace('@', '')}`}
                          className="text-white hover:text-yellow-400 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Instagram size={20} />
                        </a>
                        <a
                          href={`mailto:${member.social.email}`}
                          className="text-white hover:text-yellow-400 transition-colors"
                        >
                          <Mail size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-yellow-400 font-medium text-sm mb-1">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-3">{member.year}</p>
                  <p className="text-gray-300 text-xs">{member.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Join Us CTA */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're a beginner with a smartphone or an experienced photographer with professional gear,
              there's a place for you in PROBE. Let's create amazing memories together!
            </p>
            <motion.a
              href="/join"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full hover:bg-yellow-300 transition-colors"
            >
              <span>Join PROBE Today</span>
              <Users className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default About;