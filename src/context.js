import React, { createContext, useEffect, useState } from "react";
import Client from "./contentful";
let Context = createContext();
const ContextPeovider = ({ children }) => {
  let [post, setPost] = useState([]);
  let [video, setVideo] = useState([]);

  useEffect(() => {
    getPostData();
    getVideoData()
  }, []);

//   Post 
  const getPostData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "post",
        order: "sys.createdAt",
      });
      setPost(response.items);
    } catch (error) {
      console.log(error);
    }
  };

//   video 
  const getVideoData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "videos",
        order: "sys.createdAt",
      });
      setVideo(response.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Context.Provider value={{ post: post, video: video }}>
      {children}
    </Context.Provider>
  );
};

export { ContextPeovider, Context };
