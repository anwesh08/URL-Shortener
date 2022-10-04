import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CopyToClipboard from 'react-copy-to-clipboard';

const UrlBox = ({ inputValue }) => {
   const [shortenLink, setShortenLink] = useState("");

   const fetchData = async () => {
      try {
         const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
         setShortenLink(res.data.result.full_short_link);
      } catch (err) {
         console.log(err)
      }
   }

   useEffect(() => {
      if (inputValue.length) {
         fetchData();
      }
   }, [inputValue]);



   return (
      <>
         {shortenLink && (
            <div className="result">
               <p>{shortenLink}</p>
               <CopyToClipboard
                  text={shortenLink}
           >
               <button>Copy to Clipboard</button>
            </CopyToClipboard>
         </div>
   )
}
     </>
   )
 }
export default UrlBox;
