import "cross-fetch/polyfill";
import React from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { ApolloProvider } from "@apollo/react-hooks";

const createApolloClient = (cache = {}) =>
  new ApolloClient({
    ssrMode: typeof window !== "undefined",
    cache: new InMemoryCache().restore(cache),
    link: createUploadLink({ uri: "/graphql" })
  });

export default Component => {
  const Wrapper = () => {
    let cache = undefined;
    if (typeof window !== "undefined") {
      cache = (window as any).cache;
    }
    const apolloClient = createApolloClient(cache);
    cache = apolloClient.cache.extract();
    if (cache && typeof window !== "undefined") {
      (window as any).cache = cache;
    }
    return (
      <ApolloProvider client={apolloClient}>
        <Component />
      </ApolloProvider>
    );
  };
  return Wrapper;
};
