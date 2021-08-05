import React from 'react'
import About from '../component/About'
import Banner from '../component/Banner'
import Calligraphy from '../component/Calligraphy'
import Certificate from '../component/Certificate'
import Contact from '../component/Contact'
import Education from '../component/Education'
import Extra from '../component/Extra'
import Footer from '../component/Footer'
function Home() {
    return (
        <>
            <Banner/>
            <About/>
            <Education/>
            <Certificate/>
            <Calligraphy/>
            <Extra/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home
