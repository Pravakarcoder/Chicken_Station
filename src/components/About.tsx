import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '1000+', color: 'text-blue-600' },
    { icon: Award, label: 'Years of Excellence', value: '5+', color: 'text-green-600' },
    { icon: Clock, label: 'Average Delivery Time', value: '30 min', color: 'text-purple-600' },
    { icon: Heart, label: 'Customer Satisfaction', value: '98%', color: 'text-red-600' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Chicken Station
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Since our establishment in Janakpur, we've been committed to serving the most delicious and authentic fast food experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Story of Taste & Tradition
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Chicken Station Janakpur was born from a passion for creating the perfect fried chicken experience. Our founder, inspired by traditional cooking methods and modern culinary techniques, developed our signature recipe that has become the talk of Janakpur.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              We believe that great food brings people together. Every piece of our Crunchy Fried Chicken is prepared with carefully selected spices, ensuring that original taste that keeps our customers coming back for more.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              From our humble beginnings to becoming Janakpur's favorite fast food destination, we've never compromised on quality, taste, or service. We're not just serving food; we're serving memories, one crispy bite at a time.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Restaurant kitchen"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 mb-4 ${stat.color}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-red-50 dark:bg-red-900/20 p-8 rounded-2xl">
            <div className="text-red-600 dark:text-red-400 mb-4">
              <Award className="w-12 h-12" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Quality First</h4>
            <p className="text-gray-600 dark:text-gray-400">
              We use only the finest ingredients and follow strict quality standards to ensure every meal meets our high expectations.
            </p>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-8 rounded-2xl">
            <div className="text-yellow-600 dark:text-yellow-400 mb-4">
              <Heart className="w-12 h-12" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Made with Love</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Every dish is prepared with care and attention to detail, ensuring that you taste the love in every bite.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl">
            <div className="text-green-600 dark:text-green-400 mb-4">
              <Users className="w-12 h-12" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Community Focus</h4>
            <p className="text-gray-600 dark:text-gray-400">
              We're proud to be part of the Janakpur community and are committed to serving our neighbors with excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};