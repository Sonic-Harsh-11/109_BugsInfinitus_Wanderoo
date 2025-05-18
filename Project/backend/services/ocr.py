import cv2
import pytesseract
import os

def extract_text_from_video(video_path: str, max_frames: int = 5):
    vidcap = cv2.VideoCapture(video_path)
    length = int(vidcap.get(cv2.CAP_PROP_FRAME_COUNT))
    frame_idxs = [int(i * length / max_frames) for i in range(max_frames)]
    ocr_texts = []

    for idx in frame_idxs:
        vidcap.set(cv2.CAP_PROP_POS_FRAMES, idx)
        success, image = vidcap.read()
        if success:
            gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
            text = pytesseract.image_to_string(gray)
            ocr_texts.append(text.strip())
    vidcap.release()
    return [t for t in ocr_texts if t]