import os
from amadeus import Client

AMADEUS_CLIENT_ID = os.getenv("AMADEUS_CLIENT_ID")
AMADEUS_CLIENT_SECRET = os.getenv("AMADEUS_CLIENT_SECRET")

amadeus = Client(
    client_id=AMADEUS_CLIENT_ID,
    client_secret=AMADEUS_CLIENT_SECRET
)

def get_travel_recommendations(location_name):
    # Geocode location with Amadeus
    location_res = amadeus.reference_data.locations.get(keyword=location_name, subType='CITY')
    if not location_res.data:
        return []
    city_code = location_res.data[0]["iataCode"]
    # Get hotel offers (as example)
    hotels = amadeus.shopping.hotel_offers.get(cityCode=city_code, radius=50)
    return hotels.data