import * as React from "react";

import { useQuery } from "@apollo/react-hooks";
import { FIND_URL_POST } from "../../graphql/querys/post";
import Wrapper from "../../graphql/provider";
//Components
import BlogSC from "./blog";

export interface BlogProps {
  props: any;
}

const Blog: React.SFC<BlogProps> = props => {
  const { data, loading, error } = useQuery(
    FIND_URL_POST(props.props.match.params.url)
  );

  return data ? <BlogSC data={data} /> : null;
};

export default Wrapper(Blog);
