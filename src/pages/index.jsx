import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import usePosts from "../hooks/use-posts";
import PostPreview from "../components/post-preview";
import Hero from "../components/hero";
import Header from "../components/header";

export default () => {
  const posts = usePosts();

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Layout>
        <h2>Blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  );
};
