import React from "react";

import { Link } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";

const About = () => (
  <>
    <Header></Header>
    <Layout>
      <h1>This site is a work in progress</h1>
      <p>Come back soon!</p>
      <Link to="/"> back to home </Link>
    </Layout>
  </>
);
export default About;
