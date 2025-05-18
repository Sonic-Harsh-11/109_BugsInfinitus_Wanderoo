import os
import re
from instaloader import Instaloader, Post

def extract_shortcode(url: str) -> str:
    # Extracts shortcode from Instagram Reel URL
    m = re.search(r"instagram.com/reel/([a-zA-Z0-9_-]+)", url)
    if not m:
        raise ValueError("Invalid Instagram Reel URL")
    return m.group(1)

def download_reel_and_metadata(url: str):
    loader = Instaloader(dirname_pattern="downloads", download_videos=True, download_comments=False)
    shortcode = extract_shortcode(url)
    post = Post.from_shortcode(loader.context, shortcode)
    loader.download_post(post, target="single_reel")
    # Find the downloaded .mp4 file
    video_path = None
    for f in os.listdir("downloads/single_reel"):
        if f.endswith(".mp4"):
            video_path = os.path.join("downloads/single_reel", f)
            break
    caption = post.caption or ""
    hashtags = [h for h in re.findall(r"#(\w+)", caption)]
    scraped_location = post.location.name if post.location else None
    return video_path, caption, hashtags, scraped_location