import React from "react";
import styled from "styled-components";
import { Flex } from "rebass";

const FullScreenHero = styled<Flex>(Flex)`
  /* BG: */
  background: url("static/assets/map.png") no-repeat fixed center,
    linear-gradient(
      -46deg,
      #e45454 0%,
      #de4746 4%,
      #e16b6b 50%,
      #e04c4b 89%,
      #e17a7b 100%
    );
  height: 100vh;
  background-size: inherit;
  overflow: hidden;
`;

export default props => {
  return <FullScreenHero column>{props.children}</FullScreenHero>;
};
