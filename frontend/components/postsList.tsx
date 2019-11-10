import React from "react";
import { PostItem } from "./postItem";
import { EXCHANGE_RATES } from "../queries/posts";
import { useQuery } from "@apollo/react-hooks";
import Link from "next/link";

export const PostList = () => {
  const { data, loading, error } = useQuery(EXCHANGE_RATES);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>Try Again...</h3>;
  }

  return (
    <div>
      {data.posts.map(post => (
        <Link key={`post-${post.id}`} href={{ pathname: '/post', query: { id: post.id } }}>
          <a>
            <PostItem post={post} />
          </a>
        </Link>
      ))}
    </div>
  );
};
