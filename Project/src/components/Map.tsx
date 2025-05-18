
import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { MapPin } from 'lucide-react';
import NearbyPlaces from './NearbyPlaces';

const mapContainerStyle = {
  width: '100%',
  height: 'calc(100vh - 64px)',
};

const defaultCenter = {
  lat: 17.427778,
  lng: 78.4425,
};

const Map = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps</div>;

  return (
    <div className="relative flex">
      <div className="flex-1">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={13}
          center={defaultCenter}
          options={{
            styles: [
              {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }],
              },
            ],
          }}
        >
          {selectedPlace && (
            <Marker
              position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }}
              icon={{
                path: MapPin,
                fillColor: '#2563EB',
                fillOpacity: 1,
                strokeWeight: 0,
                scale: 2,
              }}
            />
          )}
        </GoogleMap>
      </div>
      <NearbyPlaces onPlaceSelect={setSelectedPlace} />
    </div>
  );
};

export default Map;
/*

import { useState } from "react";
import SearchBar from "./SearchBar";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (value: string) => {
    if (!value) return;
    const res = await fetch(`/functions/v1/map-autocomplete?input=${encodeURIComponent(value)}`);
    const data = await res.json();
    setSuggestions(data?.predictions || []);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search a place..."
        value={query}
        onChange={(e) => {
          const val = e.target.value;
          setQuery(val);
          fetchSuggestions(val);
        }}
        className="border p-2 rounded w-full"
      />
      <ul>
        {suggestions.map((item: any) => (
          <li key={item.place_id} className="p-1">{item.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;

const Map = () => {
  return (
    <div>
      <SearchBar />
      {/* your map rendering code here }
    </div>
  );
};

export default Map;
*/