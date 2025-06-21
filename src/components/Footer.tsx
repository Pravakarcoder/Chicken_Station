import React from "react";
import {
  ChefHat,
  Phone,
  MapPin,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Clock,
} from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-2 rounded-full">
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Chicken Station</h1>
                <p className="text-sm text-red-400">Janakpur</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We serve the best fast foods along with our popular Crunchy Fried
              Chicken. Feel the original taste that keeps you coming back for
              more.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Menu", "Offers", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-400" />
                <span className="text-gray-400">+977 980-1673630</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-400" />
                <span className="text-gray-400">Janakpur Dham, Nepal</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400" />
                <span className="text-gray-400">info@chickenstation.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-red-400" />
                <span className="text-gray-400">10:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Popular Items */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Items</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-red-400 transition-colors duration-200 cursor-pointer">
                Crunchy Fried Chicken
              </li>
              <li className="text-gray-400 hover:text-red-400 transition-colors duration-200 cursor-pointer">
                Chicken Deluxe Burger
              </li>
              <li className="text-gray-400 hover:text-red-400 transition-colors duration-200 cursor-pointer">
                Loaded Cheese Fries
              </li>
              <li className="text-gray-400 hover:text-red-400 transition-colors duration-200 cursor-pointer">
                Spicy Wings
              </li>
              <li className="text-gray-400 hover:text-red-400 transition-colors duration-200 cursor-pointer">
                Fresh Lime Soda
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Chicken Station Janakpur. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors duration-200"
              >
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
