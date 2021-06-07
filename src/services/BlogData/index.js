import React, { createContext, useState } from "react";
import { Alert } from "react-native";
import { db } from "../firebase/firebaseInit";
import { blogImageUrl } from "../mockData";

export const BlogContext = createContext();
const BlogContextProvider = ({ children }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [allBlogs, setAllBlogs] = useState([]);
  //post data to firebase
  const postBlog = (
    title,
    category,
    description,
    displayName,
    email,
    photoURL
  ) => {
    db.collection("blogs")
      .add({
        blogImageUrl: blogImageUrl[Math.floor(Math.random() * 8)],
        title,
        category,
        description,
        displayName,
        email,
        photoURL,
      })
      .then(() => {
        setIsSuccess(true);
      })
      .catch((error) => {
        Alert.alert("Error adding document: ", error);
      });
  };
  //get data
  const getAllBlogs = () => {
    db.collection("blogs")
      .get()
      .then((snapshot) => {
        const blogs = [];
        snapshot.docs.map((doc) =>
          blogs.unshift({ ...doc.data(), id: doc.id })
        );
        setAllBlogs(blogs);
      })
      .catch((err) => Alert.alert("didn't get data", err));
  };
  //filtering
  const getBlogsByCategory = (cat) => {
    db.collection("blogs")
      .where("category", "==", cat)
      .get()
      .then((snapshot) => {
        const specificBlogs = [];
        snapshot.docs.map((doc) =>
          specificBlogs.push({ ...doc.data(), id: doc.id })
        );
        setAllBlogs(specificBlogs);
      });
  };
  return (
    <BlogContext.Provider
      value={{
        onPostBlog: postBlog,
        isSuccess,
        setIsSuccess,
        getAllBlogs,
        allBlogs,
        getBlogsByCategory,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
export default BlogContextProvider;
