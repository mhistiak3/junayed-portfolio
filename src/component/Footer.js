import React from 'react'

function Footer() {
    return (
        <>
            {/* <!-- Site footer --> */}
  <footer className="footer">
    <div className="footer-container max-width">
      <div className="footer-box">
        <h3>About</h3>
        <p>
          Hi, My name is Junayed Alhasan. Recently i am studying in Miskat in Qawmi Madhrasa and also i am studying in
          SSC from Shcool Borde. WIthout studying i am a teacher and Secretary of Education in Sumaiya (Ra) Girls
          Madhrasa also i am a Adviser of Mahad Al-Imam Muhammad Kasem An-Nanutubi Madhrasa.
        </p>
      </div>

      <div className="footer-box">
        <h3>Others Links</h3>
        <ul>
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/">Term and Condition</a></li>
          <li><a href="/">Cookie Policy</a></li>
          <li><a href="/">Privacy Policy</a></li>
        </ul>
      </div>

      <div className="footer-box">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#portfolio">Services</a></li>
        </ul>
      </div>
    </div>
    <div className="sm-footer-container max-width">
      <hr />
      <div className="sm-footer-box">
        <p className="copyright-text">
          Copyright &copy; 2021 All Rights Reserved by
          <a href="/">Junayed Alhasan</a>.
        </p>
      </div>


    </div>
  </footer>
  {/* <!-- End Footer section  -->  */}
        </>
    )
}

export default Footer

