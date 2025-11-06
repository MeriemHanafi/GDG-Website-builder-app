import React from 'react';

const Header = ({ onPreview, onPublish }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Website Builder</h1>
        <div className="header-buttons">
          <button onClick={onPreview} className="preview-btn">
            Preview
          </button>
          <button onClick={onPublish} className="publish-btn">
            Publish
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;