import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Map, PlusCircle, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  onProfileClick: () => void;
}

const Navbar = ({ onProfileClick }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <Compass className="h-8 w-8 text-blue-600 dark:text-blue-400 transition-transform group-hover:rotate-45" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Wanderoo
            </span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/dashboard"
              className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Map className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            
            <Link
              to="/create-trip"
              className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <PlusCircle className="h-5 w-5" />
              <span>New Trip</span>
            </Link>

            {/* Reel Analyzer Link */}
            <Link
              to="/reel-analyzer"
              className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <span role="img" aria-label="reel">🎬</span>
              <span>Reel Analyzer</span>
            </Link>
            
            <button
              onClick={onProfileClick}
              className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <User className="h-5 w-5" />
              <span>Profile</span>
            </button>

            <div className="h-6 w-px bg-gray-200 dark:bg-gray-700"></div>
            
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;