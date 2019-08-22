import React from "react";
import styled from "@emotion/styled";
import { Link, graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;
  overflow: hidden;
  /* margin-top: 0; */

  + * {
    margin-top: 0;
  }
`;

const TextBox = styled("div")`
  background-image: linear-gradient(to top, #ffffffdd 2rem, #ffffff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  /* max-width: 42rem; */
  padding: 2.625rem 1.3125rem;
  margin: auto;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`;
const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "ko_bar.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>Coming soon</h1>
        {/* <p>some text</p> */}
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
