import React, { useState } from 'react'
import toast from 'react-hot-toast'

function Shortner() {
   const [typedUrl, setTypedUrl] = useState(null);
   const [shortenUrl, setShortenUrl] = useState(null);
   const [error, setError] = useState(null);
   const handleUrlChange = (e) => {
      setTypedUrl(e.target.value);
   }
   const getShortURL = async (e) => {
      e.preventDefault();
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${typedUrl}`)
      const data = await res.json()
      if (typedUrl == null || res.ok !== true) {
         setError(true)
         setShortenUrl(false)
      }
      const shortenedUrl = data.result
      setShortenUrl(shortenedUrl)
   }
   const notify = () => toast.success('Successfully Copied')
   return (
      <>
         <div className="mt-5">
            <form onSubmit={getShortURL}>
               <div className="sm:flex">
                  <div className="min-w-0 flex">
                     <label htmlFor="url" className='sr-only'>URL Input</label>
                     <input type="text" onChange={handleUrlChange} name="url" placeholder='Paste your link here' className="block w-full px-4 py-3 rounded-md border-0 mb-2 text-gray-900 placeholder-gray-500" />
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-4 mb-2">
                     <button className="w-full py-3 px-4 h-12 rounded-md shadow bg-[#6961ff] text-white font-bold hover:bg-indigo-700">
                        Shorten it!
                     </button>
                  </div>
               </div>
            </form>
            {shortenUrl && (
               <div className="my-5 bg-violet-800 rounded-lg p-5 shadow-md shadow-gray-400 max-w-md">
                  <p className="text-white font-extrabold text-2xl">
                     Your Shortened Links :
                  </p>
                  <div className="flex flex-col gap-2 py-5">
                     <div className="flex justify-between">
                        <p className="text-zinc-200 font-bold text-lg">
                           {shortenUrl.short_link}
                        </p>
                        <button className="block w-28 py-1 px-4 h-10 rounded-lg text-white font-bold bg-[#6961ff] hover:bg-indigo-700 border-2 border-black" onClick={() => { navigator.clipboard.writeText(shortenUrl.short_link); notify(); }}>Copy it!</button>
                     </div>
                     <div className="flex justify-between">
                        <p className="text-zinc-200 font-bold text-lg">
                           {shortenUrl.short_link2}
                        </p>
                        <button className="block w-28 py-1 px-2 h-10 rounded-lg text-white font-bold bg-[#6961ff] hover:bg-indigo-700 border-2 border-black" onClick={() => { navigator.clipboard.writeText(shortenUrl.short_link2); notify(); }}>Copy it!</button>
                     </div>
                     <div className="flex justify-between">
                        <p className="text-zinc-200 font-bold text-lg">
                           {shortenUrl.short_link3}
                        </p>
                        <button className="block w-28 py-1 px-4 h-10 rounded-lg text-white font-bold bg-[#6961ff] hover:bg-indigo-700 border-2 border-black" onClick={() => { navigator.clipboard.writeText(shortenUrl.short_link3); notify(); }}>Copy it!</button>
                     </div>
                  </div>
               </div>
            )}
            {error && (
               <p className="mt-3 text-red-500 font-semibold text-xl">
                  Please enter a valid URL.
               </p>
            )}
         </div>
      </>
   )
}

export default Shortner