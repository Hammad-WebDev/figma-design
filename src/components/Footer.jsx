import React from 'react'

const Footer = () => {
    return <>
        <div className="footer-container sm:px-[7%] mt-[10%]">
            <footer className='bg-[#191A23] flex flex-col md:gap-[50px] gap-7 sm:p-[5%] px-[5%] py-[9%] sm:rounded-tr-[45px] sm:rounded-tl-[45px]'>
                <div className="nav-and-contacts relative">
                    <div className="navigation flex md:flex-row flex-col justify-between items-center gap-8">
                        <div className="logo md:w-[17%] w-[50%]">
                            <img className='w-full' src="footer-logo.png" alt="" />
                        </div>

                        <div className="list">
                            <ul className='flex md:flex-row flex-col text-white md:gap-[2.4vw] gap-2 md:text-[1.3vw] text-[4vw] text-center'>
                                <li className='md:underline'>About us</li>
                                <li className='md:underline'>Services</li>
                                <li className='md:underline'>Use Cases</li>
                                <li className='md:underline'>Pricing</li>
                                <li className='md:underline'>Blog</li>
                            </ul>
                        </div>

                        <div className="social-icons md:w-[12%] w-[37%] max-md:absolute max-md:bottom-[0]">
                            <img className='w-full' src="social-icons.png" alt="" />
                        </div>
                    </div>

                    <div className="contacts flex md:flex-row flex-col justify-between items-center mt-[3%]">
                        <div className="left max-md:text-center">
                            <h3 className='bg-[#B9FF66] rounded-[7px] font-medium md:text-[1.5vw] text-[4vw] px-3 my-5 inline-block'>Contact us:</h3>

                            <div className="info flex flex-col md:gap-5 gap-3 text-white md:text-[1.3vw] text-[4vw]">
                                <p>Email: info@positivus.com</p>
                                <p>Phone: 555-567-8901</p>
                                <p>Address: 1234 Main St <br />
                                    Moonstone City, Stardust State 12345</p>
                            </div>
                        </div>

                        <div className="right flex items-center md:h-40 py-[7%] md:mt-0 mt-6 md:mb-0 mb-[20%] px-[3%] bg-[#292A32] rounded-[14px] md:w-[60%] w-full">
                            <div className="subs flex md:flex-row flex-col items-center gap-5 w-full md:text-[1.5vw]">
                                <input className='rounded-[14px] border text-white px-7 lg:h-[4.5vw] md:h-[6vw] h-14 md:w-[50%] w-full' type="email" placeholder='Email' />
                                <button className='rounded-[14px] bg-[#B9FF66] md:w-[45%] lg:h-[4.5vw] md:h-[6vw] h-14 w-full'>Subscribe to news</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="line h-[1px] bg-white"></div>

                <div className="copyright flex md:flex-row flex-col md:gap-10 gap-3 text-center text-white md:text-[1.3vw] text-[4vw]">
                    <p>© 2023 Positivus. All Rights Reserved.</p>
                    <p className='md:underline'>Privacy Policy</p>
                </div>
            </footer>
        </div>
    </>
}

export default Footer