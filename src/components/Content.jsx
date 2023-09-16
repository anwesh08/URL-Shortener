import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Input from "./Input";
import Output from "./Output";

const Content = () => {
  const [typedUrl, setTypedUrl] = useState("");
  const [shortUrl, setShortUrl] = useState(false);
  const [err, setErr] = useState(null);
  const getShortURL = async (e) => {
    e.preventDefault();
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${typedUrl}`);
    const data = await res.json();
    if (typedUrl === null || res.ok !== true) {
      setErr(true);
      setShortUrl(false);
    }
    const shortenUrl = data.result;
    setShortUrl(shortenUrl);
  };
  const notify = () => toast.success("Successfully Copied");
  return (
    <>
      <div className="contentMainContainer">
        <div className="contentSubContainer">
          <div className="contentImgContainer">
            <img src="/link_shortener.svg" alt="image" className="contentImg" />
          </div>
          <div className="contentTextContainer">
            <div className="contentTitleContainer">
              <span className="title">Fast & Secure</span>
              <span className="title">Most Trusted URL Shortner</span>
              <p className="titleDesc">
                The fastest and most secure URL Shortener on the web.
              </p>
            </div>
            <Input
              typedUrl={typedUrl}
              setTypedUrl={setTypedUrl}
              getShortURL={getShortURL}
            />
            <Output shortUrl={shortUrl} err={err} notify={notify} />
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Content;
