import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Tag } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const categories = ['All', 'Portrait', 'Street', 'Nature', 'Events', 'Architecture'];

  const galleryItems = [
    {
      id: 1,
      src: '/images/ostrich.jpg',
      category: 'Portrait',
      photographer: 'Manu.S',
      title: 'Ostrich',
    },
    {
      id: 2,
      src: '/images/vipnight.jpg',
      category: 'Street',
      photographer: 'Manu.S',
      title: 'City Life',
    },
    {
      id: 3,
      src: '/images/lakerow4.jpg',
      category: 'Nature',
      photographer: 'Manu.S',
      title: 'Morning Dew',
    },
    {
      id: 4,
      src: '/images/horse.jpg',
      category: 'Architecture',
      photographer: 'Manu.S',
      title: 'Modern Lines',
    },
    {
      id: 5,
      src: '/images/effieltower.jpg',
      category: 'Events',
      photographer: 'Manu.S',
      title: 'Cultural Fest 2024',
    },
    {
      id: 6,
      src: '/images/monkey2.jpg',
      category: 'Portrait',
      photographer: 'Manu.S',
      title: 'Candid Moment',
    },
    {
      id: 7,
      src: '/images/bird4.jpg',
      category: 'Street',
      photographer: 'Manu.S',
      title: 'Urban Rhythm',
    },
    {
      id: 8,
      src: '/images/collegeacad.jpg',
      category: 'Nature',
      photographer: 'Manu.S',
      title: 'Sunset Silhouette',
    },
  ];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

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
            Gallery
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore the creative works of our talented photography community
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

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg bg-gray-900 cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-square">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-gray-300 text-sm">
                        <User size={14} />
                        <span>{item.photographer}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-yellow-400 text-sm">
                        <Tag size={14} />
                        <span>{item.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-lg">No photos found in this category.</p>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-bold mb-2">{selectedImage.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <User size={16} />
                    <span>{selectedImage.photographer}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-yellow-400">
                    <Tag size={16} />
                    <span>{selectedImage.category}</span>
                  </div>
                </div>
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;