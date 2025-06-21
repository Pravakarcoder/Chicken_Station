import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Janakpur",
    rating: 5,
    comment: "The best fried chicken in Janakpur! The crispy coating and juicy meat make every bite heavenly. Their secret spices are absolutely amazing!",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Janakpur",
    rating: 5,
    comment: "Fast delivery, hot food, and incredible taste! The chicken deluxe burger is my absolute favorite. Highly recommend to everyone!",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 3,
    name: "Amit Thakur",
    location: "Janakpur",
    rating: 5,
    comment: "Chicken Station has become our family's go-to place for special occasions. The quality is consistent and the staff is very friendly!",
    avatar: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 4,
    name: "Sunita Devi",
    location: "Janakpur",
    rating: 5,
    comment: "Their loaded cheese fries are out of this world! Perfect combination of crispy fries and melted cheese. Can't get enough of it!",
    avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 5,
    name: "Ramesh Yadav",
    location: "Janakpur",
    rating: 5,
    comment: "Great value for money! The portion sizes are generous and the taste is authentic. The spicy wings are perfectly balanced - not too hot, not too mild.",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 6,
    name: "Kavita Singh",
    location: "Janakpur",
    rating: 5,
    comment: "Clean restaurant, quick service, and absolutely delicious food. The mango lassi perfectly complements their spicy chicken dishes!",
    avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy customers who keep coming back for more!
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-red-500/20">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.comment}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-red-500/20"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join thousands of satisfied customers!</h3>
            <p className="text-lg mb-6 opacity-90">
              Experience the taste that everyone's talking about
            </p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Order Your First Meal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};