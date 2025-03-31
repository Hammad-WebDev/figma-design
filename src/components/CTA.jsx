import React from 'react'

const CTA = () => {
    return <>
        <div className="CTA-container px-[7%]">
            <div className="card flex sm:justify-between justify-center items-center bg-[#F3F3F3] sm:p-[5%] p-[10%] w-full sm:h-[24vw] sm:rounded-[45px] rounded-4xl">
                <div className="left flex flex-col justify-center gap-5 sm:w-[45%] w-[80%] md:h-[227px] h-[1%]">
                    <h3 className='sm:text-[2vw] sm:leading-[100%] leading-[5.5vw] text-[5.5vw] font-medium'>Let’s make things happen</h3>
                    <p className='sm:text-[1.3vw] text-[3.3vw]'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>

                    <button className='bg-[#191A23] text-white sm:text-[1.3vw] text-[3vw] sm:w-[57%] sm:py-[4%] py-[8%] sm:rounded-[14px] rounded-[7px]'>Get your free proposal</button>
                </div>

                <div className="right sm:block hidden mr-[-60px]">
                    <img className='w-full h-[28vw]' src="CTA.png" alt="" />
                </div>
            </div>
        </div>
    </>
}

export default CTA