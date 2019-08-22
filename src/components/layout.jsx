import React from "react";
import { Global, css } from "@emotion/core";

import Helmet from "react-helmet";
import useSiteMetadata from "../hooks/use-sitemetadata";

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            color: #555;
            font-size: 14px;
            line-height: 1.4;
            font-family: Roboto, Helvetica, Arial;

            @media (min-width: calc(550px + 10vw)) {
              font-size: 18px;
            }
            /* remove margin for Gatsby main div */
            > div,
            section {
              margin-top: 0;
            }
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;

            + * {
              margin-top: 0.5 rem;
            }
          }

          strong {
            color: #222;
          }
          li {
            margin-top: 0.25 rem;
          }
        `}
      />

      <Helmet>
        <html lang="en" />
        <title> {title} </title>
        <meta name="description" content={description} />
      </Helmet>

      <main
        css={css`
          margin-left: auto;
          margin-right: auto;
          max-width: 42rem;
          padding: 2.625rem 1.3125rem;

          .gatsby-resp-image-wrapper {
            margin: 0 !important;
            width: 100% !important;
            max-width: 800px !important;
          }
        `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
