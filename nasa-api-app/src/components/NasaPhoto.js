import React, { useEffect, useState } from "react";
import NavBar from "./Navbar";

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  const apiKey = "BsRyRSu9SSnfC7hv9gyGZviHnrAqAD1l7Tv1yYdY";

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );

      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <>
      <NavBar />
      <div className="nasa-photo">
        {photoData.media_type === "image" ? (
          <img className="photo" src={photoData.url} alt={photoData.title} />
        ) : (
          <iframe
            title="space-video"
            src={photoData.url}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
          />
        )}

        <div>
          <h1>{photoData.title}</h1>
          <p className="date">{photoData.date}</p>
          <p className="explanation">{photoData.explanation}</p>
        </div>
      </div>
    </>
  );
}
