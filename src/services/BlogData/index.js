import React, { createContext } from "react";
import { blogImageUrl } from "../mockData";

blogImageUrl[Math.floor(Math.random() * 8)];
const BlogContext = createContext();
const BlogContextProvider = ({ children }) => {
  const postBlog = () => {
    db.collection("users")
      .add({
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  return <BlogContext.Provider value={{}}>{children}</BlogContext.Provider>;
};
export default BlogContextProvider;
