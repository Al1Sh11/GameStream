// src/hooks/useGameImage.js
// Automatically pulls game cover art from the RAWG API
// Get your FREE key at: https://rawg.io/apidocs (takes 30 seconds)

import { useState, useEffect } from "react";

const RAWG_KEY = "YOUR_RAWG_API_KEY"; // <-- replace with your free key

// Simple in-memory cache so we don't re-fetch the same game twice
const imageCache = {};

export function useGameImage(gameTitle, fallbackImg = "") {
  const [imgSrc, setImgSrc] = useState(fallbackImg || "https://placehold.co/300x200/1c2541/ffb703?text=Loading...");

  useEffect(() => {
    if (!gameTitle) return;

    // Return cached result instantly
    if (imageCache[gameTitle]) {
      setImgSrc(imageCache[gameTitle]);
      return;
    }

    // If no API key set, just use the fallback
    if (RAWG_KEY === "YOUR_RAWG_API_KEY") {
      if (fallbackImg) setImgSrc(fallbackImg);
      return;
    }

    const query = encodeURIComponent(gameTitle);
    fetch(`https://api.rawg.io/api/games?key=${RAWG_KEY}&search=${query}&page_size=1`)
      .then((res) => res.json())
      .then((data) => {
        const img = data?.results?.[0]?.background_image;
        if (img) {
          imageCache[gameTitle] = img;
          setImgSrc(img);
        } else if (fallbackImg) {
          setImgSrc(fallbackImg);
        }
      })
      .catch(() => {
        if (fallbackImg) setImgSrc(fallbackImg);
      });
  }, [gameTitle]);

  return imgSrc;
}
