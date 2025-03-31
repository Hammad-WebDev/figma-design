import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Logotypes from './Logotypes'
import Services from './Services'
import CTA from './CTA'
import Studies from './Studies'
import Process from './Process'
import Team from './Team'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
    return <>
        <div className="Container">
            <Navbar />
            <Header />
            <Logotypes />
            <Services />
            <CTA />
            <Studies />
            <Process />
            <Team />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    </>
}

export default Home