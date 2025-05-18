import React from 'react';
import { X, Settings, LogOut, Award, MapPin, Calendar } from 'lucide-react';

interface UserPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserPanel = ({ isOpen, onClose }: UserPanelProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-80 bg-white dark:bg-gray-800 shadow-xl z-50 transform transition-transform duration-300 ease-in-out">
      <div className="p-4 border-b dark:border-gray-700">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center space-x-4 mb-6">
          <div className="h-16 w-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-2xl text-gray-600 dark:text-gray-300">JD</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">John Doe</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">john.doe@example.com</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Travel Stats
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Places Visited</span>
                </div>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">24</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Trips Planned</span>
                </div>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">12</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Achievements
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-yellow-500" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Globetrotter</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Visited 5 countries</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-purple-500" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Adventure Seeker</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Completed 10 trips</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <button className="w-full flex items-center space-x-2 px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </button>
            <button className="w-full flex items-center space-x-2 px-4 py-2 text-left text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
              <LogOut className="h-5 w-5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;