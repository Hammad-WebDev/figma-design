import { useState } from "react";

const data = [
  {
    quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="Testimonials-container px-[7%] mb-[7%]">
      <div className="heading flex md:flex-row flex-col items-center md:gap-10 gap-7">
        <h2 className="md:text-[2.7vw] text-[4vw] font-medium bg-[#B9FF66] rounded-md h-[1%] px-2">Testimonials</h2>
        <p className="md:text-[1.3vw] md:w-[40%] w-[87%] text-[3vw] max-md:text-center">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
      </div>

      <div className="Slider relative felx justify-center w-full pt-[8%] md:pb-[4%] pb-[13%] mt-[7%] bg-[#191A23] text-white md:rounded-[45px] rounded-4xl flex flex-col items-center shadow-lg overflow-hidden">

        <div className="card-container flex w-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}>
          {data.map((info, i) => (
            <div key={i} className="min-w-full flex flex-col items-center">
              <div className="card md:w-[50%] w-[90%]">

                <div className="bubble relative border border-[#B9FF66] px-[8%] md:py-[50px] py-[10%] md:rounded-[45px] rounded-4xl bg-[#191A23] text-white shadow-lg">
                  <p className="text-white leading-[130%] md:text-[1.27vw] text-[4vw]">"{info.quote}"</p>

                  <div className="bubble-tail absolute -bottom-4 md:left-15 left-[13%] w-8 h-8 bg-[#191A23] rotate-[315deg] border-l border-b border-[#B9FF66]"></div>
                </div>

                <div className="info md:ml-20 ml-12 mt-10 md:text-[1.3vw] text-[3.3vw]">
                  <h3 className="font-medium text-[#B9FF66]">{info.name}</h3>
                  <p className=" text-white">{info.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="navigation w-full flex justify-evenly md:mt-32 mt-[15%]">
          <button onClick={prevSlide} className="text-gray-400 cursor-pointer rotate-[180deg]">
            <img className="md:w-[2vw] w-[5vw]" src="arrow.png" alt="" />
          </button>

          <div className="flex items-center md:gap-4 gap-[2vw]">{data.map((_, i) => (<div key={i}>{i === index ? <img className="md:w-[1.2vw] w-[3.5vw]" src="yellow-star.png" alt="" /> : <img className="md:w-[1.2vw] w-[3.5vw]" src="white-star.png" alt="" />}</div>))}
          </div>

          <button onClick={nextSlide} className="text-gray-400 cursor-pointer">
            <img className="md:w-[2vw] w-[5vw]" src="arrow.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
