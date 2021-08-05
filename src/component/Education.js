import React from "react";

const Education = () => {
  return (
    <>
      {/* <!-- Start Education  --> */}
      <section className="timmeLine" id="education">
        <div className="heading">
          <h2>My Education</h2>
          <p>Here is all my Educational Qualifacation</p>
        </div>
        <ul className="timeline">
          {/* <!-- Item 1 --> */}
          <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="flag">Hifz</span>
                <span className="time-wrapper">
                  <span className="time">2014 - completed</span>
                </span>
              </div>
              <div className="desc">
                I Completed my Hifz from rajapur jamia Islamia!
              </div>
            </div>
          </li>

          {/* <!-- Item 2 --> */}
          <li>
            <div className="direction-l">
              <div className="flag-wrapper">
                <span className="flag">Tisir </span>
                <span className="time-wrapper">
                  <span className="time">2015 - 2016</span>
                </span>
              </div>
              <div className="desc">
                I Completed my Hifz from rajapur jamia Islamia.
              </div>
            </div>
          </li>

          {/* <!-- Item 3 --> */}
          <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="flag">JDC Exam</span>
                <span className="time-wrapper">
                  <span className="time">2019 Extra</span>
                </span>
              </div>
              <div className="desc">I have completed JDC from Madhrasa Borde</div>
            </div>
          </li>

          {/* <!-- Item 4 --> */}
          <li>
            <div className="direction-l">
              <div className="flag-wrapper">
                <span className="flag">Nahbemir</span>
                <span className="time-wrapper">
                  <span className="time">2019 - completed</span>
                </span>
              </div>
              <div className="desc">I have Completed from .</div>
            </div>
          </li>

          {/* <!-- Item 5 --> */}
          <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="flag">Sorhe Bekaya</span>
                <span className="time-wrapper">
                  <span className="time">2020 - completed</span>
                </span>
              </div>
              <div className="desc">I have Completed from .</div>
            </div>
          </li>
        </ul>
      </section>
      {/* <!-- End Education  -->    */}
    </>
  );
};

export default Education;
