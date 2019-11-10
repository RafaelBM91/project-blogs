import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { FIND_ID_POST } from "../queries/posts";
import Wrapper from "../providers";

import { Nav } from "../components/nav";
import { Top } from "../components/top";
import { Footer } from "../components/footer";
import { PostPrint } from "../components/postPrint";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  
  if (id === undefined && typeof window !== "undefined") {
    (window as any).location.href = '/';
  }
  
  const { data, loading, error } = useQuery(FIND_ID_POST(id));

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>Try Again...</h3>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Top />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Nav />
        <div style={{ width: "calc(100% - 290px)", paddingTop: "10px" }}>
          <PostPrint post={data.post} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wrapper(Post);
