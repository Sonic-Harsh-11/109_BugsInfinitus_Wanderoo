import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Map, Calendar, List } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Plan Your Next Adventure
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Create beautiful itineraries, discover amazing places, and share your journey with others.
        </p>
        <Link
          to="/create-trip"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          <Plane className="mr-2 h-5 w-5" />
          Start Planning
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <Map className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Multi-City Planning
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Plan complex itineraries across multiple destinations with ease.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <Calendar className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Day-by-Day Schedule
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Create detailed daily schedules with activities and time slots.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <List className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Travel Checklist
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Keep track of packing lists and travel documents in one place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;