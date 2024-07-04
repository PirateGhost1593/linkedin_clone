import "../styles/addpost.css";
import firebase from "firebase/compat/app";

import { useState } from "react";

import { ReactComponent as CloseSVG } from "/src/images/close.svg";

function AddPost({ closeDisplay }) {
  const postsRef = firebase.firestore().collection("posts");

  const [userName, setUserName] = useState("");
  const [userDesc, setUserDesc] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [imageTag, setImageTag] = useState("");

  const addPost = async (e) => {
    e.preventDefault();

    var newDocRef = postsRef.doc();

    await newDocRef.set({
      name: userName,
      description: userDesc,
      message: userMessage,
      tags: imageTag,
      id: newDocRef.id,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setUserName("");
    setUserDesc("");
    setUserMessage("");
    setImageTag("");
    closeDisplay();
  };

  return (
    <div className="overlay">
      <div className="modal">
        <h3>Create a Post </h3>
        <CloseSVG className="closeicon" onClick={closeDisplay} />
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter Username"
        />
        <input
          value={userDesc}
          onChange={(e) => setUserDesc(e.target.value)}
          placeholder="Enter User Description"
        />
        <input
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Enter Message"
        />
        <input
          value={imageTag}
          onChange={(e) => setImageTag(e.target.value)}
          placeholder="Enter Image tag"
        />

        <button
          onClick={addPost}
          disabled={!userName || !userDesc || !userMessage || !imageTag}
        >
          {" "}
          Post{" "}
        </button>
      </div>
    </div>
  );
}

export default AddPost;
