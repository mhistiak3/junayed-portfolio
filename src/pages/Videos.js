import React, { useContext } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Context } from "../context";

const Videos = () => {
  let value = useContext(Context);
  if (!value.video) {
    return (
      <div id="video">
        <div className="heading">
          <h2>No Data Found</h2>
        </div>
      </div>
    );
  }
  return (
    <>
      {/* <!-- Start Video Section  --> */}
      <Navbar />
      <section id="video">
        <div className="heading">
          <h2>My Videos</h2>
          <p>Lets check my work Latest My Videos</p>
        </div>
        <div className="video-container max-width">
          {value.video.map((item,index) => {
            return (
              <div key={index}>
                <iframe
                  width="560"
                  height="315"
                  src={item.fields.videoUrl}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
      {/* <!-- End Video Section  --> */}
    </>
  );
};

export default Videos;
