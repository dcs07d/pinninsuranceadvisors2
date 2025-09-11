import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import ReviewCard from './ReviewCard';

const reviews = [
  {
    name: "Patricia Johnson",
    location: "Fort Lauderdale, FL",
    text: "The team at Pinnacle Insurance made choosing my Medicare plan so simple. They took the time to understand my needs and found the perfect coverage for me.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    name: "Robert Wilson",
    location: "Miami, FL",
    text: "I was overwhelmed by all the Medicare options until I found Pinnacle Insurance. Their guidance was invaluable in making the right choice for my healthcare needs.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    name: "Mary Thompson",
    location: "Orlando, FL",
    text: "Exceptional service! They helped me navigate through the complex Medicare system and found a plan that perfectly fits my needs and budget.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&q=80&w=120&h=120"
  }
];

export default function ReviewSection() {
  const [isLoading] = useState(false);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                What Our Clients Say
              </h2>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                <span className="text-gray-600">Trusted by Thousands</span>
              </div>
            </motion.div>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading reviews...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <ReviewCard
                  key={index}
                  name={review.name}
                  location={review.location}
                  text={review.text}
                  rating={review.rating}
                  image={review.image}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}