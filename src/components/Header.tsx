import React, { useState, useEffect } from "react";
import { ChefHat, Menu, X, Phone, MapPin } from "lucide-react";
import { DarkModeToggle } from "./DarkModeToggle";

interface HeaderProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSection,
  onNavigate,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "offers", label: "Offers" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="px-4 py-2 text-sm text-white bg-red-600 dark:bg-red-700">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+977 980-1673630</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Janakpur, Nepal</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>
              Open: 10:00 AM - 10:00 PM | Free Delivery on Orders Above Rs. 500
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed w-full top-8 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-full bg-gradient-to-br from-red-500 to-red-600">
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  Chicken Station
                </h1>
                <p className="text-xs font-medium text-red-600 dark:text-red-400">
                  Janakpur
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="items-center hidden space-x-8 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-red-600 dark:hover:text-red-400 ${
                    currentSection === item.id
                      ? "text-red-600 dark:text-red-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <DarkModeToggle />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-700 rounded-lg md:hidden dark:text-gray-300"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-white border-t border-gray-200 md:hidden dark:bg-gray-900 dark:border-gray-700">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    currentSection === item.id
                      ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button className="w-full px-6 py-3 font-medium text-white transition-all duration-200 rounded-full shadow-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700">
                Order Now
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
