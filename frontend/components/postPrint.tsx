import React from "react";
import ReactMarkdown from 'react-markdown';

export const PostPrint = ({ post }) => {
  return (
    <div className="content is-medium" style={{ display: "flex" }}>
      <div>
        <h1>{post.title}</h1>
        <div>
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
        <br/>
        <p style={{ color: "black" }}>
          <ReactMarkdown source={post.description} />
        </p>
      </div>
    </div>
  );
};
