import React from "react";
import CertificateImage1 from '../img/Certificate/1.jpeg'
import CertificateImage2 from '../img/Certificate/2.jpeg'
import CertificateImage3 from '../img/Certificate/3.jpeg'
import CertificateImage4 from '../img/Certificate/4.jpeg'
import CertificateImage5 from '../img/Certificate/5.jpeg'
import CertificateImage6 from '../img/Certificate/6.jpeg'
import CertificateImage7 from '../img/Certificate/7.jpeg'
import CertificateImage8 from '../img/Certificate/8.jpeg'
import CertificateImage9 from '../img/Certificate/9.jpeg'
const Certificate = () => {
  return (
    <>
      {/* <!-- Start Certificate Section  --> */}
      <section id="certificate">
        <div className="heading">
          <h2>My Certificate</h2>
          <p>Here is all my Certificate that i Got For Hard Working</p>
        </div>
        <div className="certificate-container max-width">
          <img src={CertificateImage1} alt="" />
          <img src={CertificateImage2} alt="" />
          <img src={CertificateImage3} alt="" />
          <img src={CertificateImage4} alt="" />
          <img src={CertificateImage5} alt="" />
          <img src={CertificateImage6} alt="" />
          <img src={CertificateImage7} alt="" />
          <img src={CertificateImage8} alt="" />
          <img src={CertificateImage9} alt="" />
        </div>
      </section>
      {/* <!-- End Certificate Section  -->  */}
    </>
  );
};

export default Certificate;
