import React from "react";
import phone from '../img/phone.svg'
import location from '../img/location.svg'
import mail from '../img/mail.svg'
const Contact = () => {
  return (
    <>
      {/* <!-- Start Contact Form  --> */}
      <section id="contact">
        <div className="heading">
          <h2>Contact ME</h2>
          <p>You can Contact Me for you any kind of programming Help</p>
        </div>
        <div className="contact-container max-width">
          <div className="contact-form">
            <form action="https://formspree.io/f/xeqvlego" method="Post">
              <h3>Get In Touch</h3>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter Your Name"
              />

              <input
                type="email"
                name="_replyto"
                required
                placeholder="Enter Your Email"
              />
              <textarea
                placeholder="Enter Your Message"
                name="message"
                required
                cols="30"
                rows="10"
              ></textarea>
              <button className="btn" type="submit">
                Send
              </button>
            </form>
          </div>
          <div className="contact-info">
            <div className="info-box">
              <img src={mail} alt="" />
              <div>
                <a style={{color:'black'}} href="mailto:junayedalhasan54@gmail.com">
                  junayedalhasan54@gmail.com
                </a>
              </div>
            </div>
            <div className="info-box">
              <img src={location} alt="" />
              <div>
                <span>44/1 Meradia, Noyapara, Khilgaon, Dhaka </span>
              </div>
            </div>
            <div className="info-box">
              <img src={phone} alt="" />
              <a href="tel:+8801875524454" style={{color:'black'}}>
                +8801875524454
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact Form  --> */}
    </>
  );
};

export default Contact;
