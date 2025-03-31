import React, { useState } from 'react'

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" })
    const [error, setError] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()

        let newErrors = {};
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!form.name.trim()) {
            newErrors.name = "name is required";
        } else if (form.name.length < 3) {
            newErrors.name = "minimum length is 3";
        } else if (form.name.length > 20) {
            newErrors.name = "maximum length is 20";
        } else if (/\d/.test(form.name)) {
            newErrors.name = "numbers not allowed";
        }

        if (!form.email.trim()) {
            newErrors.email = "email is required";
        } else if (!emailRegex.test(form.email)) {
            newErrors.email = "please enter valid email";
        }

        if (!form.message.trim()) {
            newErrors.message = "message is required";
        }

        setError(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert(`form submit successfully 
                   name: ${form.name} 
                   email: ${form.email} 
                   message: ${form.message}`);
            setForm({ name: "", email: "", message: "" })
        }
    };



    return <>
        <div className="contact-container px-[7%] my-[10%]">
            <div className="heading flex md:flex-row flex-col items-center md:gap-10 gap-7">
                <h2 className="md:text-[2.7vw] text-[4vw] font-medium bg-[#B9FF66] rounded-md h-[1%] px-2">Contact Us</h2>
                <p className="md:text-[1.3vw] md:w-[30%] w-[87%] text-[3vw] max-md:text-center">Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
            </div>

            <div className="contact-card relative overflow-hidden flex items-center bg-[#F3F3F3] mt-[7%] px-[7%] sm:py-[6%] py-[8%] md:rounded-[45px] rounded-4xl">

                <div className="Form md:w-[50%] w-full max-sm:text-sm">
                    <form onSubmit={handleSubmit}>
                        <div className="radio-btns flex items-center mb-7">
                            <input className='mr-3 sm:scale-170 scale-150' type="radio" id='say' name='radio' defaultChecked />
                            <label className='sm:mr-7 mr-[25%]' htmlFor="say">Say Hi</label>

                            <input className='mr-3 sm:scale-170 scale-150' type="radio" id='get' name='radio' />
                            <label htmlFor="get">Get a Quote</label>
                        </div>

                        <div className="fields flex flex-col gap-5">
                            <div className="Name flex flex-col relative">
                                <label htmlFor="name">Name*</label>
                                <input className='bg-white border rounded-[14px] px-7 py-3.5 mt-2'
                                    id='name'
                                    type="text"
                                    placeholder='Name'
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })} />

                                {error.name && <div className="absolute bottom-[-23%] left-7 text-red-500 text-sm">{error.name}</div>}
                            </div>

                            <div className="Email flex flex-col relative">
                                <label htmlFor="email">Email*</label>
                                <input className='bg-white border rounded-[14px] px-7 py-3.5 mt-2'
                                    id='email'
                                    type="email"
                                    placeholder='Email'
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })} />

                                {error.email && <div className="absolute bottom-[-23%] left-7 text-red-500 text-sm">{error.email}</div>}

                            </div>

                            <div className="Message flex flex-col relative">
                                <label htmlFor="message">Message*</label>
                                <textarea className='resize-none bg-white rounded-[14px] border px-7 py-3.5 mt-2 sm:h-[170px] h-28'
                                    id="message"
                                    placeholder='Message'
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                ></textarea>

                                {error.message && <div className="absolute bottom-[-13%] left-7 text-red-500 text-sm">{error.message}</div>}

                            </div>

                            <div className="submit-btn mt-3">
                                <button type="submit" className="btn bg-[#191A23] text-white w-full rounded-[14px] md:py-5 py-4 text-center cursor-pointer">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>


                <div className="image absolute md:block hidden right-[-291px] h-[83%]">
                    <img className='w-full h-full' src="contact-img.png" alt="" />
                </div>
            </div>

        </div>
    </>
}

export default Contact
