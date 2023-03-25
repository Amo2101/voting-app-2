import React, { useState } from "react";

function FileUploadButton() {
  const [selectedFile, setSelectedFile] = useState(null);

  function handleFileSelect(event) {
    setSelectedFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Here you can do something with the selected file
    console.log(selectedFile);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="file-upload"></label>
      <input
        id="file-upload"
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={handleFileSelect}
      />
      <button type="submit" disabled={!selectedFile}>
        Upload
      </button>
    </form>
  );
}

export default FileUploadButton;
