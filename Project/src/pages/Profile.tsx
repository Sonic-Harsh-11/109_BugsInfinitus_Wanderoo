import React from 'react';
import { Settings, Globe, Bookmark, Clock } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        <div className="relative px-6 pb-6">
          <div className="flex items-center">
            <div className="absolute -top-12">
              <div className="h-24 w-24 bg-gray-200 dark:bg-gray-700 rounded-full border-4 border-white dark:border-gray-800">
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-2xl text-gray-600 dark:text-gray-300">JD</span>
                </div>
              </div>
            </div>
            <div className="ml-28 pt-3">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">John Doe</h1>
              <p className="text-gray-600 dark:text-gray-300">Travel enthusiast • 12 trips planned</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-3 divide-x divide-gray-200 dark:divide-gray-700">
            <div className="p-4 text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">15</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Countries Visited</div>
            </div>
            <div className="p-4 text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">24</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Cities Explored</div>
            </div>
            <div className="p-4 text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">127</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Places Saved</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Travel Stats</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">Total Distance</span>
              <span className="font-semibold text-gray-900 dark:text-white">24,500 km</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">Longest Trip</span>
              <span className="font-semibold text-gray-900 dark:text-white">21 days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">Average Trip Cost</span>
              <span className="font-semibold text-gray-900 dark:text-white">$2,800</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Settings className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Preferences</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">Currency</span>
              <select className="bg-gray-100 dark:bg-gray-700 rounded-md px-2 py-1">
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>GBP (£)</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">Distance Unit</span>
              <select className="bg-gray-100 dark:bg-gray-700 rounded-md px-2 py-1">
                <option>Kilometers</option>
                <option>Miles</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">Language</span>
              <select className="bg-gray-100 dark:bg-gray-700 rounded-md px-2 py-1">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;