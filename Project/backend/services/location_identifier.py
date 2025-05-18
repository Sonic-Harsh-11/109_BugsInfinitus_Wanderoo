import os
import spacy
import requests

GOOGLE_PLACES_API_KEY = os.getenv("GOOGLE_PLACES_API_KEY")
nlp = spacy.load("en_core_web_sm")

def find_named_entities(text):
    doc = nlp(text)
    places = [ent.text for ent in doc.ents if ent.label_ in ("GPE", "LOC", "FAC")]
    return places

def validate_place(place_name):
    url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json"
    params = {
        "input": place_name,
        "inputtype": "textquery",
        "fields": "formatted_address,name,geometry",
        "key": GOOGLE_PLACES_API_KEY
    }
    response = requests.get(url, params=params).json()
    if response.get("candidates"):
        return response["candidates"][0]
    return None

def find_and_validate_location(text, scraped_location=None):
    # Prefer scraped location if present
    if scraped_location:
        result = validate_place(scraped_location)
        if result:
            return result["name"]
    # Otherwise, analyze text
    places = find_named_entities(text)
    for place in places:
        result = validate_place(place)
        if result:
            return result["name"]
    return None