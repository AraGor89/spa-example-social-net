import React, { useState, useEffect } from "react";
import Lists from "../../common/Lists";
import { postsAPI } from "../../api/api";
import { Pagination } from "../../common/pagination";
import style from "./blog.module.css";

const Blog = (props) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPosts = () => {
      setLoading(true);
      postsAPI.getPosts().then((res) => {
        setLoading(false);
        setPosts(res.data);
      });
    };
    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container mt-5">
      <h1 className={style.heading}>My blog (with hooks)</h1>
      <Lists items={currentPost} loading={loading} />
      <Pagination
        itemsPerPage={postsPerPage}
        totalItems={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Blog;
