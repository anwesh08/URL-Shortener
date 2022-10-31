import React from 'react';
import Shortner from './Shortner'

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row container bg-darkBlue h-full w-full px-7">
        <div className='container flex items-center justify-center px-3'>
          <img src="/Share-link.png" alt="Woman with a Link" className='h-5/6' />
        </div>
        <div className="container flex flex-col items-center md:items-start justify-center">
          <div className="container items-center justify-center">
            <h1 className="text-white max-w-xl font-extrabold">
              <span className='text-5xl block my-5'>Fast & Secure</span>
              <span className="text-5xl block my-5">Most Trusted URL Shortner</span>
            </h1>
            <p className="text-base text-gray-400 my-5">
              The fastest and most secure URL Shortener on the web.
            </p>
            <Shortner />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
