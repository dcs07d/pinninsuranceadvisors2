import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
  index: number;
}

export default function ReviewCard({ name, location, text, rating, image, index }: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150;
  const shouldTruncate = text.length > maxLength;
  const displayText = shouldTruncate && !isExpanded ? `${text.slice(0, maxLength)}...` : text;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1]
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white rounded-xl p-6 shadow-sm relative group"
    >
      <div className="flex items-start gap-4 mb-4">
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.1 }}
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold text-gray-900">{name}</h3>
          <p className="text-gray-500 text-sm">{location}</p>
          <motion.div 
            className="flex gap-1 mt-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.4 }}
      >
        <p>{displayText}</p>
        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary hover:text-primary-dark font-medium mt-2 transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}