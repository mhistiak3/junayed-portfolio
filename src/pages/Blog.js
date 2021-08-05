import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { Context } from "../context";

function Blog() {
  let value = useContext(Context);
  if (!value.post) {
    return (
      <div id="video">
        <div className="heading">
          <h2>No Data Found</h2>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Navbar />

      {/* <!-- Start Blog section  --> */}
      <section id="blog">
        <div className="heading">
          <h2>Latest Blog</h2>
          <p>Lets check my work Latest Blog and articles</p>
        </div>
        <div className="blog-container max-width">
          {value.post.map((item, index) => {
            return (
              <div key={index} className="single-blog">
                <div className="blog-img">
                  <img
                    src={item.fields.image.fields.file.url}
                    alt=""
                  />
                </div>
                <div className="blog-content">
                  <h3>{item.fields.title} </h3>

                  <div className="date">
                    <span>{item.fields.author}</span>
                    <span>{item.fields.category}</span>
                  </div>
                  <p>{item.fields.shortDescription}</p>
                  <Link to={`./post/${item.fields.slug}`}>Read more →</Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* <!-- End Blog section  --> */}
      <Footer />
    </div>
  );
}

export default Blog;
