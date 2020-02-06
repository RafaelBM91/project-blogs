import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { FIND_POSTS } from "../../graphql/querys/post";
import Wrapper from "../../graphql/provider";
//Mango-Ly
import { CardML } from "../../mangoLy";
//Components
import CardBlog from "./card";
export interface BlogsProps {}

const Blogs: React.SFC<BlogsProps> = () => {
  const { data, loading, error } = useQuery(FIND_POSTS);

  return data ? (
    <>
      <CardML.Container gridColumns={3} gridGap="41px" no100vh={true}>
        {data.posts.map((dato: any) => (
          <div key={dato.id}>
            <CardBlog data={dato} />
          </div>
        ))}
      </CardML.Container>
    </>
  ) : null;
};

export default Wrapper(Blogs);
