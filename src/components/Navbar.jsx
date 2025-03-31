import React, { useState } from 'react'

const Navbar = () => {
    const [show, setShow] = useState(false)

    return <>
        <div className="nav-container mt-3 md:py-5 py-2 md:px-[7%] sticky top-0 bg-white z-10">
            <nav className='flex md:flex-row flex-col md:justify-between md:items-center md:py-0 py-[5%] relative'>
                <div className="logo-and-ham md:contents flex justify-between md:px-0 px-[7%]">
                    <div className="logo w-[20%] min-w-[150px]">
                        <img className='w-full' src='/Logo.png' alt="LOGO" />
                    </div>
                    <div onClick={() => setShow(!show)} className="hamburger md:hidden block">
                        {show ? <img src="cross.png" width={30} alt="" /> : <img src="bar.png" width={30} alt="" />}
                    </div>
                </div>

                <div className={`list flex md:flex-row flex-col xl:gap-10 gap-7 md:pb-0 md:py-0 py-5 bg-white md:px-0 px-[7%] md:items-center md:text-[1.3vw] max-md:absolute max-md:z-10 max-md:w-full max-md:top-[89%] max-md:duration-300 md:translate-x-0 -translate-x-full ${show ? "translate-x-0" : "-translate-x-full"}`}>

                    <ul className='flex md:flex-row flex-col xl:gap-10 md:gap-7 gap-3 list-none text-center'>
                        <li>About us</li>
                        <li>Services</li>
                        <li>Use Cases</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                    </ul>

                    <div className="btn xl:px-10 xl:py-5 px-8 py-4 border rounded-[14px] text-center md:block">
                        <button>Request a quote</button>
                    </div>
                </div>
            </nav>
        </div>
    </>
}

export default Navbar