import React, { useState } from 'react';
import { Star, Navigation, Clock, Phone } from 'lucide-react';

interface Place {
  id: string;
  name: string;
  rating: number;
  distance: string;
  type: string;
  openNow: boolean;
  phone: string;
  photo: string;
}

const mockPlaces: Place[] = [
  {
    id: '1',
    name: 'Sanjeevaiah Childrehs Park',
    rating: 4,
    distance: '8 km',
    type: 'Park',
    openNow: true,
    phone: '1800 4254 6464',
    photo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/6b/f9/49/beautiful-nature-inside.jpg?w=900&h=500&s=1',
  },
  {
    id: '2',
    name: 'Chaar Minar',
    rating: 4.5,
    distance: '10.9 km',
    type: 'Landmark',
    openNow: true,
    phone: '040 6674 5986',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Charminar_Hyderabad_1.jpg',
  },
  {
    id: '3',
    name: 'golconda fort',
    rating: 4.4,
    distance: '11.2 km',
    type: 'Palace',
    openNow: true,
    phone: '040 2351 2401',
    photo: 'https://www.savaari.com/blog/wp-content/uploads/2022/10/Golkonda-fort.jpg',
  },
  {
    id: '4',
    name: 'Chowmallah Palace',
    rating: 4.4,
    distance: '11.4 km',
    type: 'Palace',
    openNow: true,
    phone: '040 2452 2032',
    photo: 'https://farm8.staticflickr.com/7276/13761119445_755c029184_z.jpg'
  },
];

const PlaceCard = ({ place }: { place: Place }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <img src={place.photo} alt={place.name} className="w-full h-32 object-cover" />
    <div className="p-4">
      <h3 className="font-semibold text-gray-900 dark:text-white">{place.name}</h3>
      <div className="flex items-center mt-1">
        <Star className="w-4 h-4 text-yellow-400 fill-current" />
        <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">{place.rating}</span>
        <span className="mx-2">•</span>
        <span className="text-sm text-gray-600 dark:text-gray-300">{place.type}</span>
      </div>
      <div className="mt-2 space-y-1">
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
          <Navigation className="w-4 h-4 mr-1" />
          {place.distance}
        </div>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
          <Clock className="w-4 h-4 mr-1" />
          {place.openNow ? 'Open now' : 'Closed'}
        </div>
        {place.phone && (
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Phone className="w-4 h-4 mr-1" />
            {place.phone}
          </div>
        )}
      </div>
    </div>
  </div>
);

const NearbyPlaces = ({ onPlaceSelect }) => {
  const [selectedType, setSelectedType] = useState('all');

  const types = ['all', 'restaurants', 'hotels', 'attractions'];

  return (
    <div className="w-96 bg-gray-50 dark:bg-gray-900 p-4 overflow-y-auto h-[calc(100vh-64px)]">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Nearby Places</h2>
      
      <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize whitespace-nowrap ${
              selectedType === type
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {mockPlaces.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default NearbyPlaces;