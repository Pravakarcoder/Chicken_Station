import React from 'react';
import { Gift, Clock, Star, ArrowRight } from 'lucide-react';

const offers = [
  {
    id: 1,
    title: "First Order Special",
    discount: "25% OFF",
    description: "Get 25% off on your first order with us. Welcome to the family!",
    code: "WELCOME25",
    validity: "Valid for new customers only",
    image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400",
    popular: true
  },
  {
    id: 2,
    title: "Family Combo Deal",
    discount: "Rs. 200 OFF",
    description: "Perfect for family dinners! 4 pieces chicken + 2 burgers + fries + drinks",
    code: "FAMILY200",
    validity: "Valid on orders above Rs. 800",
    image: "https://images.pexels.com/photos/1106673/pexels-photo-1106673.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    title: "Wednesday Wings",
    discount: "Buy 1 Get 1",
    description: "Every Wednesday, buy 1 portion of wings and get another absolutely free!",
    code: "WINGSWED",
    validity: "Valid only on Wednesdays",
    image: "https://images.pexels.com/photos/1766682/pexels-photo-1766682.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 4,
    title: "Student Special",
    discount: "15% OFF",
    description: "Show your student ID and get 15% off on all menu items",
    code: "STUDENT15",
    validity: "Valid with student ID",
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 5,
    title: "Weekend Feast",
    discount: "30% OFF",
    description: "Celebrate weekends with our special 30% discount on all combo meals",
    code: "WEEKEND30",
    validity: "Valid on Saturdays & Sundays",
    image: "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 6,
    title: "Delivery Champion",
    discount: "Free Delivery",
    description: "Free delivery on all orders above Rs. 300. No minimum order on weekends!",
    code: "FREEDEL",
    validity: "Valid on all delivery orders",
    image: "https://images.pexels.com/photos/1586942/pexels-photo-1586942.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

export const Offers: React.FC = () => {
  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    alert(`Coupon code "${code}" copied to clipboard!`);
  };

  return (
    <section id="offers" className="py-20 bg-gradient-to-br from-red-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-100 dark:bg-red-900/20 rounded-full px-4 py-2 text-red-600 dark:text-red-400 mb-4">
            <Gift className="w-5 h-5" />
            <span className="font-medium">Special Offers</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Delicious Deals & Offers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Save more while enjoying your favorite dishes with our exciting offers and combo deals
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative"
            >
              {offer.popular && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span>Popular</span>
                </div>
              )}

              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold text-lg">
                  {offer.discount}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  {offer.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {offer.description}
                </p>

                {/* Coupon Code */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Coupon Code:</p>
                      <code className="text-red-600 dark:text-red-400 font-bold text-lg">{offer.code}</code>
                    </div>
                    <button
                      onClick={() => copyToClipboard(offer.code)}
                      className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors duration-200"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                {/* Validity */}
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{offer.validity}</span>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group">
                  <span>Order Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Don't Miss Out on These Amazing Deals!</h3>
            <p className="text-lg mb-6 opacity-90">
              Follow us on social media to stay updated with the latest offers and exclusive deals
            </p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Follow Us for More Offers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};