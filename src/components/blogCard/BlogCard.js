import React from "react";
import "./BlogCard.css";

const BlogCard = ({ blog }) => (
  <div className="container">
    <div className="square">
      <img src={blog.image} alt="blog" className="blog-card-image mask" />
      <div className="blog-card-title">{blog.title}</div>
      <p className="blog-card-subtitle">{blog.description}</p>
      <div>
        <a href={blog.url} target="_" className="button">
          Read More
        </a>
      </div>
    </div>
  </div>
);

export default BlogCard;
