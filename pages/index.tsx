import React from "react";
import gitmojiTheme from "./components/gitmojiTheme";
import {
  Provider,
  Heading,
  Flex,
  Box,
  Text,
} from "rebass";

import styled from "styled-components";

const Header = styled<Heading>(Heading) `
  text-align: center;
`;

export default () => (
  <Provider theme={gitmojiTheme}>
    <Flex align="center">
      <Box w={1}>
        <Header
          py={4}
          fontSize={[5, 6]} >
          Welcome to the Gitmoji Triangle 🔺
        </Header>
      </Box>
    </Flex>
  </Provider>
);