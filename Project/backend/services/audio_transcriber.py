import os
from moviepy.editor import VideoFileClip
import requests

ASSEMBLYAI_API_KEY = os.getenv("ASSEMBLYAI_API_KEY")

def extract_audio(video_path: str, audio_path: str = "temp_audio.wav"):
    video = VideoFileClip(video_path)
    video.audio.write_audiofile(audio_path)
    return audio_path

def transcribe_audio(audio_path: str):
    # Upload audio file to AssemblyAI
    headers = {"authorization": ASSEMBLYAI_API_KEY}
    with open(audio_path, "rb") as f:
        res = requests.post(
            "https://api.assemblyai.com/v2/upload",
            headers=headers,
            data=f
        )
        upload_url = res.json()["upload_url"]

    # Request transcription
    transcript_res = requests.post(
        "https://api.assemblyai.com/v2/transcript",
        headers=headers,
        json={"audio_url": upload_url}
    )
    transcript_id = transcript_res.json()["id"]

    # Poll for completion
    while True:
        poll = requests.get(
            f"https://api.assemblyai.com/v2/transcript/{transcript_id}",
            headers=headers
        ).json()
        if poll["status"] == "completed":
            return poll["text"]
        elif poll["status"] == "failed":
            raise Exception("Transcription failed")

def extract_and_transcribe_audio(video_path: str):
    audio_path = extract_audio(video_path)
    text = transcribe_audio(audio_path)
    os.remove(audio_path)
    return text