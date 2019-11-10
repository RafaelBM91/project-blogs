import React from "react";

export const PostItem = props => {
  const post = props.post;
  return (
    <div className="content is-small" style={{ display: "flex" }}>
      <div>
        <figure className="image is-90x90">
          <img
            className="is-rounded"
            src={post.image[0].url}
            style={{ maxWidth: "195px" }}
          />
        </figure>
      </div>
      <div>
        <h1>{post.title}</h1>
        <p style={{ color: "black" }}>
          {post.description.substring(0, 256)}...
        </p>
        <span
          className="tag"
          style={{ backgroundColor: "white", color: "gray" }}
        >
          {post.createdAt.toString().substring(0, 10)}
        </span>
        &nbsp;
        {post.tags.map((tag, index) => (
          <span
            key={`tag-${index}`}
            style={{ marginLeft: "5px" }}
            className="tag"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
