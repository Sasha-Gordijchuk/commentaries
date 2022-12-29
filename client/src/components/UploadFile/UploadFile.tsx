/* eslint-disable no-console */
import React from 'react';

interface Props {
  selectedFile: any;
  setSelectedFile: (file: any) => void;
}

export const UploadFile: React.FC<Props> = ({
  selectedFile,
  setSelectedFile,
}) => {
  const handleChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="file has-name">
      <label className="file-label">
        <input
          className="file-input"
          type="file"
          name="resume"
          onChange={handleChange}
          accept=".jpg,.gif,.png,.txt"
        />
        <span className="file-cta">
          <span className="file-icon">
            <i className="fas fa-upload" />
          </span>
          <span className="file-label">
            Choose a file…
          </span>
        </span>
        <span className="file-name">
          {selectedFile
            ? selectedFile.name
            : 'No file uploaded'}
        </span>
      </label>
    </div>
  );
};
