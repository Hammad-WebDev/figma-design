import React from 'react'

const Team = () => {
    return <>
        <div className="team-container px-[7%] my-[10%]">
            <div className="heading flex md:flex-row flex-col items-center md:gap-10 gap-7">
                <h2 className="md:text-[2.7vw] text-[4vw] font-medium bg-[#B9FF66] rounded-md h-[1%] px-2">Team</h2>
                <p className="md:text-[1.3vw] md:w-[43%] w-[87%] text-[3vw] max-md:text-center">Meet the skilled and experienced team behind our successful digital marketing strategies </p>
            </div>

            <div className="card-container mt-[7%]">
                <div className="three-cards-conatiner md:flex-row flex-col flex gap-9">
                    <div className="card border md:rounded-[45px] rounded-4xl md:w-[32%] w-full md:px-[2%] p-[9%] md:py-[3%] shadow-[0px_5px_0px_0px_black]">
                        <div className="profile flex justify-between px-[3%]">
                            <div className="pic-and-name flex items-end gap-3">
                                <img className='w-[40%]' src="profile-1.png" alt="" />

                                <div className="name">
                                    <h3 className='font-medium md:text-[1.3vw] text-[5vw]'>John mdith</h3>
                                    <p className='md:text-[1.2vw] text-[3vw] w-[140%]'>CEO and Founder</p>
                                </div>
                            </div>

                            <img className='h-[1%] w-[12%]' src="linkedin-icon.png" alt="" />
                        </div>

                        <div className="line bg-black h-0.5 mt-5"></div>

                        <div className="dec">
                            <p className=' mt-5 md:text-[1.3vw] text-[3vw]'>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
                        </div>
                    </div>

                    <div className="card border md:rounded-[45px] rounded-4xl md:w-[32%] w-full md:px-[2%] p-[9%] md:py-[3%] shadow-[0px_5px_0px_0px_black]">
                        <div className="profile flex justify-between px-[3%]">
                            <div className="pic-and-name flex items-end gap-3">
                                <img className='w-[40%]' src="profile-2.png" alt="" />

                                <div className="name">
                                    <h3 className='font-medium md:text-[1.3vw] text-[5vw]'>Jane Doe</h3>
                                    <p className='md:text-[1.2vw] text-[3vw] w-[140%]'>Director of Operations</p>
                                </div>
                            </div>

                            <img className='h-[1%] w-[12%]' src="linkedin-icon.png" alt="" />
                        </div>

                        <div className="line bg-black h-0.5 mt-5"></div>

                        <div className="dec">
                            <p className=' mt-5 md:text-[1.3vw] text-[3vw]'>7+ years of experience in project management and team leadership. Strong organizational and communication skills</p>
                        </div>
                    </div>

                    <div className="card border md:rounded-[45px] rounded-4xl md:w-[32%] w-full md:px-[2%] p-[9%] md:py-[3%] shadow-[0px_5px_0px_0px_black]">
                        <div className="profile flex justify-between px-[3%]">
                            <div className="pic-and-name flex items-end gap-3">
                                <img className='w-[40%]' src="profile-3.png" alt="" />

                                <div className="name">
                                    <h3 className='font-medium md:text-[1.3vw] text-[5vw]'>Michael Brown</h3>
                                    <p className='md:text-[1.2vw] text-[3vw] w-[140%]'>Senior SEO Specialist</p>
                                </div>
                            </div>

                            <img className='h-[1%] w-[12%]' src="linkedin-icon.png" alt="" />
                        </div>

                        <div className="line bg-black h-0.5 mt-5"></div>

                        <div className="dec">
                            <p className=' mt-5 md:text-[1.3vw] text-[3vw]'>5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization</p>
                        </div>
                    </div>
                </div>


                <div className="three-cards-conatiner md:flex-row flex-col flex gap-9 mt-10">
                    <div className="card border md:rounded-[45px] rounded-4xl md:w-[32%] w-full md:px-[2%] p-[9%] md:py-[3%] shadow-[0px_5px_0px_0px_black]">
                        <div className="profile flex justify-between px-[3%]">
                            <div className="pic-and-name flex items-end gap-3">
                                <img className='w-[40%]' src="profile-4.png" alt="" />

                                <div className="name">
                                    <h3 className='font-medium md:text-[1.3vw] text-[5vw]'>Emily Johnson</h3>
                                    <p className='md:text-[1.2vw] text-[3vw] w-[140%]'>PPC Manager</p>
                                </div>
                            </div>

                            <img className='h-[1%] w-[12%]' src="linkedin-icon.png" alt="" />
                        </div>

                        <div className="line bg-black h-0.5 mt-5"></div>

                        <div className="dec">
                            <p className=' mt-5 md:text-[1.3vw] text-[3vw]'>3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis</p>
                        </div>
                    </div>

                    <div className="card border md:rounded-[45px] rounded-4xl md:w-[32%] w-full md:px-[2%] p-[9%] md:py-[3%] shadow-[0px_5px_0px_0px_black]">
                        <div className="profile flex justify-between px-[3%]">
                            <div className="pic-and-name flex items-end gap-3">
                                <img className='w-[40%]' src="profile-5.png" alt="" />

                                <div className="name">
                                    <h3 className='font-medium md:text-[1.3vw] text-[5vw]'>Brian Williams</h3>
                                    <p className='md:text-[1.2vw] text-[3vw] w-[140%]'>Social Media Specialist</p>
                                </div>
                            </div>

                            <img className='h-[1%] w-[12%]' src="linkedin-icon.png" alt="" />
                        </div>

                        <div className="line bg-black h-0.5 mt-5"></div>

                        <div className="dec">
                            <p className=' mt-5 md:text-[1.3vw] text-[3vw]'>4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement</p>
                        </div>
                    </div>

                    <div className="card border md:rounded-[45px] rounded-4xl md:w-[32%] w-full md:px-[2%] p-[9%] md:py-[3%] shadow-[0px_5px_0px_0px_black]">
                        <div className="profile flex justify-between px-[3%]">
                            <div className="pic-and-name flex items-end gap-3">
                                <img className='w-[40%]' src="profile-6.png" alt="" />

                                <div className="name">
                                    <h3 className='font-medium md:text-[1.3vw] text-[5vw]'>Sarah Kim</h3>
                                    <p className='md:text-[1.2vw] text-[3vw] w-[140%]'>Content Creator</p>
                                </div>
                            </div>

                            <img className='h-[1%] w-[12%]' src="linkedin-icon.png" alt="" />
                        </div>

                        <div className="line bg-black h-0.5 mt-5"></div>

                        <div className="dec">
                            <p className=' mt-5 md:text-[1.3vw] text-[3vw]'>2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries</p>
                        </div>
                    </div>
                </div>

                <div className="btn flex justify-end mt-10">
                    <button className='bg-[#191A23] text-white px-20 py-5 rounded-[14px] max-md:w-full'>See all team</button>
                </div>
            </div>


        </div>
    </>
}

export default Team