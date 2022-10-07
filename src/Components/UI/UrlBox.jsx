import React, { useState, useEffect } from "react";
import axios from "axios";
import CopyToClipboard from "react-copy-to-clipboard";

const UrlBox = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [shortenLink2, setShortenLink2] = useState("");
  const [shortenLink3, setShortenLink3] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(
          `https://api.shrtco.de/v2/shorten?url=${inputValue}`
        );
        setShortenLink(res.data.result.full_short_link);
        setShortenLink2(res.data.result.full_short_link2);
        setShortenLink3(res.data.result.full_short_link3);
      } catch (err) {
        console.log(err);
      }
    };
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  return (
    <>
      {shortenLink && (
        <div>
          <ul className="result">
            <p>{shortenLink}</p>
            <CopyToClipboard text={shortenLink}>
              <button>Copy to Clipboard</button>
            </CopyToClipboard>
          </ul>
          <ul className="result">
            <p>{shortenLink2}</p>
            <CopyToClipboard text={shortenLink2}>
              <button>Copy to Clipboard</button>
            </CopyToClipboard>
          </ul>
          <ul className="result">
            <p>{shortenLink3}</p>
            <CopyToClipboard text={shortenLink3}>
              <button>Copy to Clipboard</button>
            </CopyToClipboard>
          </ul>
        </div>
      )}
    </>
  );
};
export default UrlBox;
