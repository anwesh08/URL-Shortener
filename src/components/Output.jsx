import React from "react";

const Output = ({ shortUrl, err, notify }) => {
  return (
    <>
      {shortUrl && (
        <div className="contentOutputContainer">
          <div className="contentOutput">
            <h1 className="contentOutputHeader">Shorten Links :</h1>
            <span>
              <p>{shortUrl.short_link}</p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(shortUrl.short_link);
                  notify();
                }}
              >
                Copy
              </button>
            </span>
            <span>
              <p>{shortUrl.short_link2}</p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(shortUrl.short_link);
                  notify();
                }}
              >
                Copy
              </button>
            </span>
            <span>
              <p>{shortUrl.short_link3}</p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(shortUrl.short_link);
                  notify();
                }}
              >
                Copy
              </button>
            </span>
          </div>
        </div>
      )}
      {err && <p className="contentOutputError">Please enter a valid URL.</p>}
    </>
  );
};

export default Output;
