import os
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from services.reel_downloader import download_reel_and_metadata
from services.audio_transcriber import extract_and_transcribe_audio
from services.ocr import extract_text_from_video
from services.location_identifier import find_and_validate_location
from services.recommendation_engine import get_travel_recommendations

app = FastAPI()

# === ADD THIS CORS SETUP ===
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5175"],  # or ["*"] for any origin (dev only)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class AnalyzeRequest(BaseModel):
    url: str

@app.post("/analyze")
def analyze_instagram_reel(req: AnalyzeRequest):
    try:
        # Step 1: Download reel and get metadata (caption, location, hashtags)
        video_path, caption, hashtags, scraped_location = download_reel_and_metadata(req.url)

        # Step 2: Extract audio and transcribe
        transcript = extract_and_transcribe_audio(video_path)

        # Step 3: OCR for on-screen text
        ocr_texts = extract_text_from_video(video_path)

        # Step 4: NLP to find location (caption + transcript + ocr + hashtags)
        possible_text = " ".join([caption or "", transcript or ""] + ocr_texts + (hashtags or []))
        location = find_and_validate_location(possible_text, scraped_location)

        if not location:
            raise HTTPException(status_code=404, detail="Could not detect location")

        # Step 5: Get travel recommendations
        recos = get_travel_recommendations(location)

        return {
            "location": location,
            "recommendations": recos,
            "caption": caption,
            "transcript": transcript,
            "ocr_texts": ocr_texts,
            "hashtags": hashtags
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))