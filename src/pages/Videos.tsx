import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, User, Calendar, Award } from 'lucide-react';

const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Short Films', 'Cinematography', 'Music Videos', 'Documentaries', 'Event Coverage'];

  const videoItems = [
    {
      id: 1,
      title: 'Campus Life - A Day at IIIT Nagpur',
      creator: 'Manu Shrivastava',
      category: 'Documentaries',
      platform: 'YouTube',
      thumbnail: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'A cinematic journey through the daily life of students at IIIT Nagpur.',
      duration: '5:32',
      views: '2.1K',
    },
    {
      id: 2,
      title: 'Homecoming 2024 - Official Aftermovie',
      creator: 'Akshit Yadav',
      category: 'Event Coverage',
      platform: 'Instagram',
      thumbnail: 'https://images.pexels.com/photos/1983046/pexels-photo-1983046.jpeg?auto=compress&cs=tinysrgb&w=600',
      embedUrl: 'https://www.instagram.com/reel/sample',
      description: 'Capturing the energy and excitement of Homecoming 2024.',
      duration: '1:45',
      views: '5.8K',
    },
    {
      id: 3,
      title: 'The Last Lecture',
      creator: 'Priya Sharma',
      category: 'Short Films',
      platform: 'YouTube',
      thumbnail: 'https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=600',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'A touching story about a professor\'s final day at the institute.',
      duration: '12:15',
      views: '8.3K',
    },
    {
      id: 4,
      title: 'Monsoon Melodies',
      creator: 'Amit Kumar',
      category: 'Music Videos',
      platform: 'YouTube',
      thumbnail: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'A visual poem celebrating the monsoon season on campus.',
      duration: '3:28',
      views: '1.9K',
    },
    {
      id: 5,
      title: 'Tech Fest 2024 Highlights',
      creator: 'Sneha Reddy',
      category: 'Event Coverage',
      platform: 'YouTube',
      thumbnail: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=600',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Best moments from the annual tech fest.',
      duration: '7:42',
      views: '4.2K',
    },
    {
      id: 6,
      title: 'Shadows and Light',
      creator: 'Vikash Reddy',
      category: 'Cinematography',
      platform: 'Vimeo',
      thumbnail: 'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=600',
      embedUrl: 'https://player.vimeo.com/video/sample',
      description: 'An experimental piece exploring light and shadow.',
      duration: '4:56',
      views: '3.1K',
    },
  ];

  const filteredVideos = selectedCategory === 'All' 
    ? videoItems 
    : videoItems.filter(item => item.category === selectedCategory);

  const [selectedVideo, setSelectedVideo] = useState<any>(null);

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
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Video Gallery
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the cinematic works of our videography community - from short films to event coverage
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-yellow-400 text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="bg-yellow-400 rounded-full p-4 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-black fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
                <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded font-medium">
                  {video.platform}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1 text-gray-300">
                    <User size={14} />
                    <span>{video.creator}</span>
                  </div>
                  <div className="text-gray-400">
                    {video.views} views
                  </div>
                </div>
                
                <div className="mt-3 text-xs text-yellow-400 font-medium">
                  {video.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-gray-900 rounded-lg overflow-hidden max-w-4xl w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video Player */}
              <div className="aspect-video bg-black">
                {selectedVideo.platform === 'YouTube' ? (
                  <iframe
                    src={selectedVideo.embedUrl}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : selectedVideo.platform === 'Instagram' ? (
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <div className="text-center">
                      <p className="mb-4">Instagram Reel</p>
                      <a
                        href={selectedVideo.embedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center space-x-2"
                      >
                        <span>View on Instagram</span>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src={selectedVideo.embedUrl}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>

              {/* Video Details */}
              <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-2">{selectedVideo.title}</h3>
                <p className="text-gray-400 mb-4">{selectedVideo.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-300">
                    <div className="flex items-center space-x-1">
                      <User size={16} />
                      <span>{selectedVideo.creator}</span>
                    </div>
                    <span>{selectedVideo.views} views</span>
                    <span className="text-yellow-400">{selectedVideo.category}</span>
                  </div>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Videos;