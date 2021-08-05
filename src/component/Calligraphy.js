import React from 'react'
import calleImage1 from '../img/calligraphy/1.jpeg'
import calleImage2 from '../img/calligraphy/2.jpeg'
import calleImage3 from '../img/calligraphy/3.jpeg'
import calleImage4 from '../img/calligraphy/4.jpeg'
import calleImage5 from '../img/calligraphy/5.jpeg'
import calleImage6 from '../img/calligraphy/6.jpeg'
import calleImage7 from '../img/calligraphy/7.jpeg'
import calleImage8 from '../img/calligraphy/8.jpeg'
import calleImage9 from '../img/calligraphy/9.jpeg'

const Calligraphy = () => {
    return (
        <>
          {/* <!-- Start Services Section  --> */}
  <section id="calligraphy">
    <div className="heading">
      <h2>My Calligraphy</h2>
      <p>Check out all my latest Calligraphy</p>
      <div className="calligraphy-container max-width">
        <img src={calleImage1} alt="" />
        <img src={calleImage2} alt="" />
        <img src={calleImage3} alt="" />
        <img src={calleImage4} alt="" />
        <img src={calleImage5} alt="" />
        <img src={calleImage6} alt="" />
        <img src={calleImage7} alt="" />
        <img src={calleImage8} alt="" />
        <img src={calleImage9} alt="" />
      </div>
    </div>

  </section>
  {/* <!-- End Services Section  -->  */}
        </>
    )
}

export default Calligraphy
