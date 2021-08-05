import React from 'react'
import SocialImage1 from '../img/social/3146786_instagram_logo_icon.svg'
import SocialImage2 from '../img/social/317725_linkedin_social_icon.svg'
import SocialImage3 from '../img/social/386622_facebook_icon.svg'
import SocialImage4 from '../img/social/386736_twitter_tweet_twitter bird_icon.svg'
import SocialImage5 from '../img/social/3377030_logo_media_messager_social_icon.svg'
const Extra = () => {
    return (
        <>
           {/* <!-- Start Promotion Section --> */}
  <section className="promotion">
    <span>Do you love to connect Me?</span>
    <h2>Available For Contact!</h2>
    <a href="#contact" className="btn">Contact Me</a>
  </section>
  {/* <!-- End Promotion Section --> */}

  {/* <!-- Start Social Section  --> */}
  <div id="socialMedia">
    <div className="heading">
      <h2>Follow Me On Social Media</h2>
      <div className="socialIcon max-width">
        <a href="https://www.instagram.com/junayedalhasan518/">
          <img src={SocialImage1} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/junayed-alhasan-7b1900189">
          <img src={SocialImage2} alt="" />
        </a>
        <a href="https://www.facebook.com/junayedalhasan518">
          <img src={SocialImage3} alt="" />
        </a>
        <a href="https://twitter.com/junayedalhasan5">
          <img src={SocialImage4} alt="" />
        </a>
        <a href="https://www.facebook.com/messages/t/100014045867988">
          <img src={SocialImage5} alt="" /> 
        </a>
      </div>
    </div>

  </div>
  {/* <!-- End Social Section  --> */}
        </>
    )
}

export default Extra
