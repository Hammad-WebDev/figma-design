import React from 'react'

const Studies = () => {
    return <>
        <div className="studies-container px-[7%] mt-[10%]">
            <div className="heading flex sm:flex-row flex-col items-center sm:gap-10 gap-7">
                <h2 className="sm:text-[2.7vw] text-[4vw] font-medium bg-[#B9FF66] rounded-sm h-[1%] px-2">Case Studies</h2>
                <p className="sm:text-[1.3vw] sm:w-[47%] w-full text-[3vw] max-sm:text-center">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
            </div>

            <div className="card-container flex sm:justify-around sm:gap-0 gap-3 sm:bg-[#191A23] hide-scrollbar  overflow-y-auto px-[3%] py-[5%] mt-[7%] md:rounded-[45px]">
                <div className="card bg-[#191A23] sm:rounded-none rounded-4xl sm:w-[24%] max-sm:min-w-full sm:p-0 p-10">
                    <p className='text-white sm:text-[1.2vw] text-[3.3vw]'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>

                    <div className="link mt-5">
                        <img className='w-[60%]' src="studies-link.png" alt="" />
                    </div>
                </div>

                <div className="line bg-white w-[1px]"></div>

                <div className="card bg-[#191A23] sm:rounded-none rounded-4xl sm:w-[24%] max-sm:min-w-full sm:p-0 p-10">
                    <p className='text-white sm:text-[1.2vw] text-[3.3vw]'>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>

                    <div className="link mt-5">
                        <img className='w-[60%]' src="studies-link.png" alt="" />
                    </div>
                </div>

                <div className="line bg-white w-[1px]"></div>


                <div className="card bg-[#191A23] sm:rounded-none rounded-4xl sm:w-[24%] max-sm:min-w-full sm:p-0 p-10">
                    <p className='text-white sm:text-[1.2vw] text-[3.3vw]'>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>

                    <div className="link mt-5">
                        <img className='w-[60%]' src="studies-link.png" alt="" />
                    </div>

                    <div className="line bg-white w-[1px]"></div>

                </div>
            </div>
        </div>
    </>
}

export default Studies