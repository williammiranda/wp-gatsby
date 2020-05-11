/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import MainMenu from "./MainMenu";
import styled, { createGlobalStyle } from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
  }
`;
const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

/*const Layout = ({ children }) => (
  
  <div>
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  </div>
);*/

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpFavicon {
            edges {
              node {
                url {
                  source_url
                }
              }
            }
          }
        }
      `}
      render={(props) => (
        <div>
          <Helmet>
            <link
              rel="icon"
              src={props.allWordpressWpFavicon.edges[0].node.url.source_url}
            />
          </Helmet>
          <GlobalStyles />
          <MainMenu />
          <LayoutWrapper>{children}</LayoutWrapper>
        </div>
      )}
    />
  );
};

export default Layout;
