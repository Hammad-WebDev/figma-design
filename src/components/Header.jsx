import React from 'react'

const Header = () => {
  return <>
    <div className="header-container relative px-[7%] md:mt-14 mt-7">
      <div className="heading md:w-[50%] w-full mb-9">
        <p className='md:text-[5vw] text-[10vw] font-semibold leading-[100%]'>Navigating the digital landscape for success</p>
      </div>

      <div className="image md:w-[40%] w-full md:absolute right-[6%] top-2">
        <img className='w-full' src="header-img.png" alt="" />
      </div>

      <div className="para md:w-[50%] w-full mb-9">
        <p className='md:text-[1.5vw] md:w-[80%] text-[4vw]'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
      </div>

      <div className="btn mb-9 bg-[#191A23] md:rounded-[14px] rounded-[10px] md:py-[1.5vw] py-[3.4vw] text-center md:w-[20vw]">
        <button className='text-white md:text-[1.5vw]'>Book a consultation</button>
      </div>


    </div>
  </>
}

export default Header