import React, { useState, useEffect } from 'react';
import { X, Gift, Clock } from 'lucide-react';

export const OfferModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenOffer = localStorage.getItem('hasSeenOffer');
    if (!hasSeenOffer) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenOffer', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />
      
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-md w-full mx-4 overflow-hidden shadow-2xl transform animate-pulse">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-red-500 to-yellow-500 p-6 text-white relative overflow-hidden">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-white/20 p-2 rounded-full">
              <Gift className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Special Offer!</h2>
          </div>
          
          <div className="flex items-center space-x-2 text-yellow-200">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Limited Time Only</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">
              25% OFF
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              On Your First Order!
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Welcome to Chicken Station Janakpur! Enjoy our signature Crunchy Fried Chicken with an exclusive discount.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Use coupon code:</p>
              <div className="bg-white dark:bg-gray-700 border-2 border-dashed border-red-300 dark:border-red-600 p-3 rounded-lg">
                <code className="text-lg font-bold text-red-600 dark:text-red-400">WELCOME25</code>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button 
              onClick={handleClose}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Order Now & Save!
            </button>
            <button 
              onClick={handleClose}
              className="w-full text-gray-500 dark:text-gray-400 py-2 text-sm hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              Maybe Later
            </button>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-500 text-center mt-4">
            *Valid on orders above Rs. 300. Cannot be combined with other offers.
          </p>
        </div>
      </div>
    </div>
  );
};