import React from 'react';
import { Calendar, MapPin, Clock, DollarSign } from 'lucide-react';

const CreateTrip = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Create New Trip</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Trip Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="e.g., Summer Europe Tour"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Start Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                End Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Destinations
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Add cities you plan to visit"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Budget
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="number"
                className="w-full pl-10 pr-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Enter your budget"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Create Trip
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTrip;