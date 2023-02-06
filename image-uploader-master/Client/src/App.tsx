import { useState } from "react";

import "./App.css";

function App() {

   const [image, setImage] = useState("");

   const [isUploading, setIsUploading] = useState(false);

  const dragOver = (e: any) => {
    e.preventDefault();
    const dragDropContainer: any = document.getElementById(
      "drag-drop-container"
    );
    dragDropContainer.classList.add("dragging");
    console.log("drag over");
  };

  const dragEnter = (e: any) => {
    e.preventDefault();
    const dragDropContainer: any = document.getElementById(
      "drag-drop-container"
    );
    dragDropContainer.classList.add("dragging");
    console.log("drag enter");
  };

  const dragLeave = (e: any) => {
    e.preventDefault();
    const dragDropContainer: any = document.getElementById(
      "drag-drop-container"
    );
    dragDropContainer.classList.remove("dragging");
    console.log("drag leave");
  };

  const fileDrop = (e: any) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    const dragDropContainer: any = document.getElementById(
      "drag-drop-container"
    );
    dragDropContainer.classList.remove("dragging");
    // check that the file is an image
    if (files[0].type.split("/")[0] !== "image") {
      alert("File is not an image");
      return;
    }

    console.log(files);
  };



  return (
    <div className="App">
      <div className="image-uploader-container">
        <span className="title">Upload your image</span>
        <span className="sub-title">File should be Jpeg, Png,...</span>
        <div
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={fileDrop}
          id="drag-drop-container"
          className="drag-drop-container"
        >
          <img
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            src="src/assets/image.svg"
            className="logo"
            alt="logo"
          />
          <span
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            className="drag-drop-text"
          >
            Drag & Drop your image here
          </span>
        </div>
        <span className="or">Or</span>
        <button className="choose-file-btn">Choose a file</button>
      </div>
    </div>
  );
}

export default App;
