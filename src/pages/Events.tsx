import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, ExternalLink } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Portrait Photography Workshop',
      date: 'March 15, 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'IIIT Nagpur Auditorium',
      description: 'Learn the fundamentals of portrait photography with professional lighting techniques.',
      image: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600',
      registered: 45,
      maxCapacity: 60,
      registrationLink: '#',
    },
    {
      id: 2,
      title: 'Night Photography Challenge',
      date: 'March 28, 2025',
      time: '8:00 PM - 11:00 PM',
      location: 'IIIT Nagpur Campus',
      description: 'Capture the beauty of night scenes. Equipment will be provided for beginners.',
      image: 'https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=600',
      registered: 23,
      maxCapacity: 30,
      registrationLink: '#',
    },
    {
      id: 3,
      title: 'Annual Photography Exhibition',
      date: 'April 10-12, 2025',
      time: '10:00 AM - 6:00 PM',
      location: 'IIIT Nagpur Gallery',
      description: 'Showcase of the best photography works from our community throughout the year.',
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=600',
      registered: 120,
      maxCapacity: 200,
      registrationLink: '#',
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: 'Street Photography Walk',
      date: 'February 10, 2025',
      participants: 35,
      highlights: [
        'https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=300',
        'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=300',
        'https://images.pexels.com/photos/1983046/pexels-photo-1983046.jpeg?auto=compress&cs=tinysrgb&w=300',
      ],
    },
    {
      id: 2,
      title: 'Macro Photography Session',
      date: 'January 25, 2025',
      participants: 28,
      highlights: [
        'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=300',
        'https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=300',
        'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=300',
      ],
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
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Events</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join our photography workshops, competitions, and community events
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-white mb-8 flex items-center"
          >
            <Calendar className="w-8 h-8 text-yellow-400 mr-3" />
            Upcoming Events
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {event.date}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-300 text-sm">
                      <Clock className="w-4 h-4 mr-2 text-yellow-400" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <Users className="w-4 h-4 mr-2 text-yellow-400" />
                      {event.registered}/{event.maxCapacity} registered
                    </div>
                  </div>

                  {/* Registration Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                      <span>Registration Progress</span>
                      <span>{Math.round((event.registered / event.maxCapacity) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(event.registered / event.maxCapacity) * 100}%` }}
                      />
                    </div>
                  </div>

                  <button
                    className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-300 transition-colors flex items-center justify-center space-x-2"
                    disabled={event.registered >= event.maxCapacity}
                  >
                    <span>
                      {event.registered >= event.maxCapacity ? 'Event Full' : 'Register Now'}
                    </span>
                    {event.registered < event.maxCapacity && <ExternalLink className="w-4 h-4" />}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold text-white mb-8 flex items-center"
          >
            <Calendar className="w-8 h-8 text-yellow-400 mr-3" />
            Past Events Highlights
          </motion.h2>

          <div className="space-y-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="bg-gray-900 rounded-lg p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 text-yellow-400" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1 text-yellow-400" />
                        {event.participants} participants
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {event.highlights.map((image, imageIndex) => (
                    <motion.div
                      key={imageIndex}
                      whileHover={{ scale: 1.05 }}
                      className="aspect-square rounded-lg overflow-hidden"
                    >
                      <img
                        src={image}
                        alt={`${event.title} highlight ${imageIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Events;