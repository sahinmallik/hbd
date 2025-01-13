import React from "react";
import "./photo.css";

const Photos = () => {
  return (
    <>
      <div
        className="photos-container"
        style={{
          marginTop: "20px",
        }}
      >
        <figure className="wave">
          <img src="/photos/17.png" alt="rajni"></img>
        </figure>
        <figure className="wave">
          <img src="/photos/3.png" alt="rajni"></img>
        </figure>
        <figure className="wave">
          <img src="/photos/4.png" alt="rajni"></img>
        </figure>
        <figure className="wave">
          <img src="/photos/6.png" alt="rajni"></img>
        </figure>
        <figure className="wave">
          <img src="/photos/8.png" alt="rajni"></img>
        </figure>
        <figure className="wave">
          <img src="/photos/9.png" alt="rajni"></img>
        </figure>
        <figure className="wave">
          <img src="/photos/10.png" alt="rajni"></img>
        </figure>
        <figure className="wave">
          <img src="/photos/11.png" alt="rajni"></img>
        </figure>
        <figure className="wave">
          <img src="/photos/12.png" alt="rajni"></img>
        </figure>
        <figure className="wave">
          <img src="/photos/13.png" alt="rajni"></img>
        </figure>
        <figure className="wave">
          <img src="/photos/15.png" alt="rajni"></img>
        </figure>
        <figure className="wave">
          <img src="/photos/16.png" alt="rajni"></img>
        </figure>
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Go Next
        </button>
      </div>
    </>
  );
};

export default Photos;
