import React from "react";

const Input = ({ typedUrl, setTypedUrl, getShortURL }) => {
  const handleChange = (e) => {
    setTypedUrl(e.target.value);
  };
  return (
    <>
      <div className="contentInputContainer">
        <input
          type="text"
          name="url"
          className="contentInput"
          placeholder="Paste URL here..."
          onChange={handleChange}
          value={typedUrl}
        />
        <button type="submit" className="contentInputBtn" onClick={getShortURL}>
          Shorten it
        </button>
      </div>
    </>
  );
};

export default Input;
