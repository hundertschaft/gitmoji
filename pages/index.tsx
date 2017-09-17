import React from "react";
import gitmojiTheme from "./components/gitmojiTheme";
import {
  BackgroundImage,
  Box,
  ButtonOutline,
  Flex,
  Heading,
  Image,
  Link,
  Provider,
  Text,
  Toolbar,
  NavLink,
} from "rebass";

import styled from "styled-components";
import FullScreenHero from "./components/FullScreenHero";
import Navbar from "./components/Navbar";

const Header = styled<Heading>(Heading)`text-align: center;`;

const PlainLink = styled<Link>(Link)`
  text-align: center;
  text-decoration: none;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  display: inline-block;

  &:hover ${PlainLink} {
    color: white;
    background-color: #de4746;
    border: solid 1px white;
  }
`;

export default () => (
  <Provider theme={gitmojiTheme}>
    <FullScreenHero align="center" justify="center">
      <Navbar />
      <Header mt={60} mb={50} fontSize={[3, 4]} color="white">
        Gitmoji Triangle. Work in Progress.
      </Header>
      <Box w={1} style={{ textAlign: "center" }}>
        <PlainLink
          m={20}
          href="static/download/gitmoji-triangle-a4.pdf"
          children="Gitmoji Triangle PDF (DIN A4)"
          color="white"
        />
        <PlainLink
          m={20}
          href="static/download/gitmoji-triangle-us-letter.pdf"
          children="Gitmoji Triangle PDF (US Letter)"
          color="white"
        />
      </Box>

      <Image
        w={1}
        mt={20}
        src="static/preview/gitmoji-composition-with-radiation@3x.png"
      />
    </FullScreenHero>
  </Provider>
);
