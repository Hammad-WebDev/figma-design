import React, { useState } from 'react'

const Process = () => {
    const [cardIndex, setCardIndex] = useState(null)
    const data = [
        {
            title: "Consultation",
            des: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            title: "Research and Strategy Development",
            des: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            title: "Implementation",
            des: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            title: "Monitoring and Optimization",
            des: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            title: "Reporting and Communication",
            des: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            title: "Continual Improvement",
            des: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
    ]

    const handleCardExpand = (index) => {
        if (cardIndex === index) {
            setCardIndex(null)
        } else {
            setCardIndex(index)
        }
    };

    return <>
        <div className="process-container px-[7%] my-[10%]">
            <div className="heading flex sm:flex-row flex-col items-center sm:gap-10 gap-7">
                <h2 className="sm:text-[2.7vw] text-[4vw] font-medium bg-[#B9FF66] rounded-sm h-[1%] px-2">Our Working Process </h2>
                <p className="sm:text-[1.3vw] sm:w-[27%] w-[83%] text-[3vw] max-sm:text-center">Step-by-Step Guide to Achieving Your Business Goals</p>
            </div>

            <div className="card-container mt-[7%]">
                {data.map((data, index) => {
                    return <div key={index} className={`card sm:h-[12vw] h-[17vw] max-sm:min-h-[20vw] w-full mb-7 md:px-[5%] md:py-[3%] sm:p-[3%] p-[5%] rounded-[45px] border shadow-[0px_5px_0px_0px_black] transition-all duration-500 ${cardIndex === index ? "bg-[#B9FF66] sm:h-[23vw] h-[70vw]" : "bg-[#F3F3F3]"}`}>
                        <div className="content flex justify-between items-center w-full font-medium">
                            <div className="text w-[65%] flex items-center gap-5">
                                <h2 className='sm:text-[4.3vw] text-[7vw]'>0{index + 1}</h2>
                                <p className='sm:text-[2.1vw] text-[3vw]'>{data.title}</p>
                            </div>

                            <div onClick={() => handleCardExpand(index)} className="plus-icon sm:w-[5vw] w-[10vw] z-[1] cursor-pointer">
                                {cardIndex === index ? <img className='sm:w-full w-full' src="minus-icon.png" alt="" /> : <img className='sm:w-full w-full' src="plus-icon.png" alt="" />}
                            </div>
                        </div>

                        <div className={`line-and-dec duration-400 ${cardIndex === index ? "opacity-100" : "opacity-0"}`}>
                            <div className="line bg-black mt-5 w-full h-[1px]"></div>
                            <p className='sm:text-[1.3vw] text-[3.5vw] mt-7'>{data.des}</p>
                        </div>

                    </div>
                })}


            </div>
        </div>
    </>
}

export default Process