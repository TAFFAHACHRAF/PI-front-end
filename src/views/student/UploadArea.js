import React, { useRef } from "react";
import "./payment.css";

const UploadArea = () => {
  const dropZoneRef = useRef(null);
  const fileInputRef = useRef(null);
  const previewImageRef = useRef(null);
  const uploadedFileNameRef = useRef(null);
  const uploadedFileIconTextRef = useRef(null);
  const uploadedFileCounterRef = useRef(null);

  const imagesTypes = ["jpeg", "png", "svg", "gif"];

  const handleDragOver = (event) => {
    event.preventDefault();
    dropZoneRef.current.classList.add("drop-zoon--over");
  };

  const handleDragLeave = () => {
    dropZoneRef.current.classList.remove("drop-zoon--over");
  };

  const handleDrop = (event) => {
    event.preventDefault();
    dropZoneRef.current.classList.remove("drop-zoon--over");
    const file = event.dataTransfer.files[0];
    uploadFile(file);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    uploadFile(file);
  };

  const uploadFile = (file) => {
    const fileReader = new FileReader();
    const fileType = file.type;
    const fileSize = file.size;

    if (fileValidate(fileType, fileSize)) {
      dropZoneRef.current.classList.add("drop-zoon--Uploaded");
      // Rest of the code...
    } else {
      // Handle file validation error
    }
  };

  const progressMove = () => {
    let counter = 0;
    setTimeout(() => {
      let counterIncrease = setInterval(() => {
        if (counter === 100) {
          clearInterval(counterIncrease);
        } else {
          counter += 10;
          uploadedFileCounterRef.current.innerHTML = `${counter}%`;
        }
      }, 100);
    }, 600);
  };

  const fileValidate = (fileType, fileSize) => {
    let isImage = imagesTypes.filter(
      (type) => fileType.indexOf(`image/${type}`) !== -1
    );

    if (isImage[0] === "jpeg") {
      uploadedFileIconTextRef.current.innerHTML = "jpg";
    } else {
      uploadedFileIconTextRef.current.innerHTML = isImage[0];
    }

    if (isImage.length !== 0) {
      if (fileSize <= 2000000) {
        return true;
      } else {
        alert("Please make sure your file is 2 Megabytes or less");
        return false;
      }
    } else {
      alert("Please make sure to upload an image file type");
      return false;
    }
  };

  return (
    <div id="uploadArea" className="upload-area">
      {/* Header */}
      <div className="upload-area__header">
        <h1 className="upload-area__title">Upload your file</h1>
        <p className="upload-area__paragraph">
          File should be an image
          <strong className="upload-area__tooltip"> {" "}
            Like
            <span className="upload-area__tooltip-data">
             jpeg, png, svg, gif  
            </span>{" "}
            {/* Data Will be Comes From Js */}
          </strong>
        </p>
      </div>
      {/* End Header */}

      {/* Drop Zoon */}
      <div
        id="dropZoon"
        ref={dropZoneRef}
        className="upload-area__drop-zoon drop-zoon"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <span className="drop-zoon__icon">
          <i className="bx bxs-file-image"></i>
        </span>
        <p className="drop-zoon__paragraph">
          Drop your file here or Click to browse
        </p>
        <span id="loadingText" className="drop-zoon__loading-text">
          Please Wait
        </span>
        <img
          src=""
          alt="Preview Image"
          id="previewImage"
          ref={previewImageRef}
          className="drop-zoon__preview-image"
          draggable="false"
        />
        <input
          type="file"
          id="fileInput"
          ref={fileInputRef}
          className="drop-zoon__file-input"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      {/* End Drop Zoon */}

      {/* File Details */}
      <div id="fileDetails" className="upload-area__file-details file-details">
        <h3 className="file-details__title">Uploaded File</h3>

        <div id="uploadedFile" className="uploaded-file">
          <div className="uploaded-file__icon-container">
            <i className="bx bxs-file-blank uploaded-file__icon"></i>
            <span
              className="uploaded-file__icon-text"
              ref={uploadedFileIconTextRef}
            ></span>{" "}
            {/* Data Will be Comes From Js */}
          </div>

          <div id="uploadedFileInfo" className="uploaded-file__info">
            <span
              className="uploaded-file__name"
              ref={uploadedFileNameRef}
            ></span>{" "}
            {/* Data Will be Comes From Js */}
            <span
              className="uploaded-file__counter"
              ref={uploadedFileCounterRef}
            ></span>{" "}
            {/* Data Will be Comes From Js */}
          </div>
        </div>
      </div>
      {/* End File Details */}
    </div>
  );
};

export default UploadArea;
