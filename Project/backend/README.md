# Backend Microservices for Instagram Reel Travel Recommendation

This backend provides the API for the Instagram Reel analysis and travel recommendation feature.

## Structure

- **/services**: Python modules for each processing step.
- **main.py**: FastAPI API Gateway.
- **requirements.txt**: Python dependencies.
- **Dockerfile**: Containerization.
- **.env.example**: Environment variable template.

---

## Setup

1. Copy `.env.example` to `.env` and fill in your API keys.
2. Build and run with Docker:

```bash
cd backend
docker build -t travel-backend .
docker run --env-file .env -p 8000:8000 travel-backend
```

---

## API

- `POST /analyze`  
  Body: `{"url": "<instagram_reel_url>"}`
  Returns: Travel recommendations and place info.

---

## Services Overview

- **reel_downloader.py**: Downloads reel, extracts captions/metadata.
- **audio_transcriber.py**: Extracts audio and transcribes speech.
- **ocr.py**: Extracts on-screen text from video frames.
- **location_identifier.py**: NLP/NER for place detection & validation.
- **recommendation_engine.py**: Fetches travel recommendations.

---

## Testing

Run tests with pytest:
```bash
pytest
```