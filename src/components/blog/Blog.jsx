import React from "react";

const Blog = ({ blog }) => {
  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure>
        <img src={blog.cover} alt="Movie" className="" />
      </figure>
      <div className="card-body justify-center">
        <h2 className="text-2xl font-bold">{blog.title}</h2>
        <p>{blog.posted_date}</p>
        <div className="flex justify-around items-center">
          <div className="w-1/4">
            <img src={blog.author_img} alt="" />
          </div>
          <p className="text-2xl font-medium">{blog.author}</p>
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Mark As Read</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
