import React, { useEffect, useRef, useState } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
const Deshbord = () => {
  const [ImageUploade, setImageUploade] = useState(null);
  const [imagelist, setimagelist] = useState([]);
  const imageRef = ref(storage, "images/");

  const url =
    "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";

  const fetchData = async () => {
    try {
      const response = await listAll(imageRef);

      const urls = await Promise.all(
        response.items.map(async (item) => await getDownloadURL(item))
      );
      setimagelist((prev) => [...prev, ...urls]);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const uploadImage = async () => {
    try {
      if (ImageUploade == null) return;
      const imageRef = ref(storage, `images/${ImageUploade.name + v4()}`);
      await uploadBytes(imageRef, ImageUploade);
      alert("Image Uploaded");
      fetchData();
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="container">
      <img src={url} className="img" />
      <div className="wrapper">
        <h1>Simple file sharing!</h1>
        <p>Upload and share the download link.</p>

        <button onClick={() => uploadImage()}>Upload</button>
        <div>
          <input
            type="file"
            onChange={(e) => setImageUploade(e.target.files[0])}
          />
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", padding: "10px" }}
        >
          {imagelist.map((url, i) => {
            return (
              <a
                key={i}
                href={url}
                target="_blank"
                style={{
                  marginTop: "10px",
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                {url.slice(0, 38)}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Deshbord;
