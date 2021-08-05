import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../context";

const SinglePost = () => {
  let slug = useParams("slug");
  let value = useContext(Context);

  let singlepost = value.post.find((item) => {
    return slug.slug === item.fields.slug;
  });

  if (!singlepost) {
    return (
      <div className="singlPost">
        <h2 className="heading">No Data Found</h2>
        <Link to='/post' className='btn'>Back To Post</Link>
      </div>
    );
  } 
    
    return (
      <div className="container">
        <div className="singlPost">
        <Link to='/post' className='btn'>Back To Home</Link>
          <div className="heading">
            <h2>{singlepost.fields.title} </h2>
          <h3>Author : {singlepost.fields.author}</h3>
            <h4>Category : {singlepost.fields.category} </h4>
          </div>
          <img src={singlepost.fields.image.fields.file.url} alt="" />
          <p>
          {singlepost.fields.longDescription}
          </p>
        </div>
      </div>
    );
  
};

export default SinglePost;
