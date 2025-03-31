import React from 'react'

const Services = () => {
    return <>
        <div className="services-container px-[7%] mt-[12%]">
            <div className="heading flex md:flex-row flex-col items-center md:gap-10 gap-7">
                <h2 className='md:text-[3vw] text-[4vw] font-medium bg-[#B9FF66] rounded-md h-[1%] px-2'>Services</h2>
                <p className='md:text-[1.5vw] md:w-[50vw] w-full text-[3vw] max-md:text-center'>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
            </div>

            <div className="card-container flex flex-col gap-10 my-[10%]">
                <div className='tow-card-container flex md:flex-row flex-col items-center gap-10'>
                    <div className="card flex justify-between items-center p-[5%] md:w-[50%] md:h-[23vw] w-full sm:h-[43vw] h-[55vw] shadow-[0px_5px_0px_0px_black] bg-[#F3F3F3] border rounded-[45px]">
                        <div className="left">
                            <div className="card-heading">
                                <div className="bg-[#B9FF66] rounded-[7px] px-[7px] h-[1%] inline-block">
                                    <span className='font-medium md:text-[2.2vw] text-[4vw]'>Search engine</span>
                                </div>
                                <div className="bg-[#B9FF66] rounded-[7px] px-[7px] h-[1%] inline-block">
                                    <span className='font-medium md:text-[2.2vw] text-[4vw]'>optimazion</span>
                                </div>
                            </div>

                            <div className="card-link flex items-center gap-3 mt-[40%]">
                                <img className='md:w-[3.2vw] w-[9vw]' src="arrow-icon.png" alt="" />
                                <span className='md:text-[1.5vw] text-[4vw] sm:block hidden'>Learn more</span>
                            </div>
                        </div>

                        <div className="right w-[50%]">
                            <img className='w-full h-full' src="service-img-1.png" alt="" />
                        </div>
                    </div>

                    <div className="card flex justify-between items-center p-[5%] md:w-[50%] md:h-[23vw] w-full sm:h-[43vw] h-[55vw] shadow-[0px_5px_0px_0px_black] bg-[#B9FF66] border rounded-[45px]">
                        <div className="left">
                            <div className="card-heading">
                                <div className="bg-white rounded-[7px] px-[7px] h-[1%] w-[11md:5%] inline-block">
                                    <span className='font-medium md:text-[2.2vw] text-[4vw]'>Pay-per-click</span>
                                </div>
                                <div className="bg-white rounded-[7px] px-[7px] h-[1%] w-[10md:0%] inline-block">
                                    <span className='font-medium md:text-[2.2vw] text-[4vw]'>advertising</span>
                                </div>
                            </div>

                            <div className="card-link flex items-center gap-3 mt-[40%]">
                                <img className='md:w-[3.2vw] w-[9vw]' src="arrow-icon.png" alt="" />
                                <span className='md:text-[1.5vw] text-[4vw] sm:block hidden'>Learn more</span>
                            </div>
                        </div>

                        <div className="right w-[50%]">
                            <img className='w-full h-full' src="service-img-2.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className='tow-card-container flex md:flex-row flex-col items-center gap-10'>
                    <div className="card flex justify-between items-center p-[5%] md:w-[50%] md:h-[23vw] w-full sm:h-[43vw] h-[55vw] shadow-[0px_5px_0px_0px_black] bg-[#191A23] border rounded-[45px]">
                        <div className="left">
                            <div className="card-heading">
                                <div className="bg-white rounded-[7px] px-[7px] h-[1%] w-[11md:5%] inline-block">
                                    <span className='font-medium md:text-[2.2vw] text-[4vw]'>Social Media</span>
                                </div>
                                <div className="bg-white rounded-[7px] px-[7px] h-[1%] w-[10md:0%] inline-block">
                                    <span className='font-medium md:text-[2.2vw] text-[4vw]'>Marketing</span>
                                </div>
                            </div>

                            <div className="card-link flex items-center gap-3 mt-[40%]">
                                <img className='md:w-[3.2vw] w-[9vw]' src="white-arrow-icon.png" alt="" />
                                <span className='md:text-[1.5vw] text-[4vw] text-white sm:block hidden'>Learn more</span>
                            </div>
                        </div>

                        <div className="right w-[50%]">
                            <img className='w-full h-full' src="service-img-3.png" alt="" />
                        </div>
                    </div>

                    <div className="card flex justify-between items-center p-[5%] md:w-[50%] md:h-[23vw] w-full sm:h-[43vw] h-[55vw] shadow-[0px_5px_0px_0px_black] bg-[#F3F3F3] border rounded-[45px]">
                        <div className="left">
                            <div className="card-heading">
                                <div className="bg-[#B9FF66] rounded-[7px] px-[7%] h-[1%] inline-block">
                                    <span className='font-medium md:text-[2.2vw] text-[4vw]'>Email</span>
                                </div>
                                <div className="bg-[#B9FF66] rounded-[7px] px-[7px] h-[1%] inline-block">
                                    <span className='font-medium md:text-[2.2vw] text-[4vw] w-[72%]'>Marketing</span>
                                </div>
                            </div>

                            <div className="card-link flex items-center gap-3 mt-[40%]">
                                <img className='md:w-[3.2vw] w-[9vw]' src="arrow-icon.png" alt="" />
                                <span className='md:text-[1.5vw] text-[4vw] sm:block hidden'>Learn more</span>
                            </div>
                        </div>

                        <div className="right w-[50%]">
                            <img className='w-full h-full' src="service-img-4.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className='tow-card-container flex md:flex-row flex-col items-center gap-10'>
                    <div className="card flex justify-between items-center p-[5%] md:w-[50%] md:h-[23vw] w-full sm:h-[43vw] h-[55vw] shadow-[0px_5px_0px_0px_black] bg-[#B9FF66] border rounded-[45px]">
                        <div className="left">
                            <div className="card-heading">
                                <div className="bg-white rounded-[7px] px-[7%] h-[1%] w-[11md:5%] inline-block">
                                    <span className='font-medium md:text-[2.2vw] text-[4vw]'>Content</span>
                                </div>
                                <div className="bg-white rounded-[7px] px-[7px] h-[1%] w-[10md:0%] inline-block">
                                    <span className='font-medium md:text-[2.2vw] text-[4vw]'>Creation</span>
                                </div>
                            </div>

                            <div className="card-link flex items-center gap-3 mt-[40%]">
                                <img className='md:w-[3.2vw] w-[9vw]' src="arrow-icon.png" alt="" />
                                <span className='md:text-[1.5vw] text-[4vw] sm:block hidden'>Learn more</span>
                            </div>
                        </div>

                        <div className="right w-[50%]">
                            <img className='w-full h-full' src="service-img-5.png" alt="" />
                        </div>
                    </div>

                    <div className="card flex justify-between items-center p-[5%] md:w-[50%] md:h-[23vw] w-full sm:h-[43vw] h-[55vw] shadow-[0px_5px_0px_0px_black] bg-[#191A23] border rounded-[45px]">
                        <div className="left">
                            <div className="card-heading">
                                <div className="bg-[#B9FF66] rounded-[7px] px-[7px] h-[1%] inline-block">
                                    <span className='font-medium md:text-[2.2vw] text-[4vw]'>Pay-per-click</span>
                                </div>
                                <div className="bg-[#B9FF66] rounded-[7px] px-[7px] h-[1%] inline-block">
                                    <span className='font-medium md:text-[2.2vw] text-[4vw]'>advertising</span>
                                </div>
                            </div>

                            <div className="card-link flex items-center gap-3 mt-[40%]">
                                <img className='md:w-[3.2vw] w-[9vw]' src="white-arrow-icon.png" alt="" />
                                <span className='md:text-[1.5vw] text-[4vw] text-white sm:block hidden'>Learn more</span>
                            </div>
                        </div>

                        <div className="right w-[50%]">
                            <img className='w-full h-full' src="service-img-6.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Services