import React from "react";
import aboutImg from '../img/about.jpeg'
const About = () => {
  return (
    <>
      {/* <!-- Start About Section  --> */}
      <section id="about-me">
        <div className="about-container max-width">
          <div className="about-img">
            <img src={aboutImg} alt="about" />
          </div>
          <div className="about-skill">
            <h2>About Me</h2>
            <p>
              Hi, My name is Junayed Alhasan. Recently i am studying in Miskat
              in Qawmi Madhrasa and also i am studying in SSC from Shcool Borde.
              WIthout studying i am a teacher and Secretary of Education in
              Sumaiya (Ra) Girls Madhrasa also i am a Adviser of Mahad Al-Imam
              Muhammad Kasem An-Nanutubi Madhrasa.
            </p>
            <ul>
              <li>Date of Birth : 22/01/2000</li>
              <li>Blood Group : AB+</li>
              <li>Religion : Muslim</li>
              <li>Nationality : Bangladeshi</li>
            </ul>
            <a href="Info.pdf" target="blank" className="btn">
              For More Info
            </a>
            <div className="progress-container">
              <div className="box">
                <div className="progress-bar">
                  <div className="progress"style={{width:'70%'}}></div>
                </div>
                <div className="skill-value">
                  <span>Calligraphy</span>
                  <span>70%</span>
                </div>
              </div>
              <div className="box">
                <div className="progress-bar">
                  <div className="progress" style={{width:'60%'}}></div>
                </div>
                <div className="skill-value">
                  <span>Writting</span>
                  <span>60%</span>
                </div>
              </div>
              <div className="box">
                <div className="progress-bar">
                  <div className="progress" style={{width:'80%'}}></div>
                </div>
                <div className="skill-value">
                  <span>Teaching</span>
                  <span>90%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About Section  -->    */}
    </>
  );
};

export default About;
