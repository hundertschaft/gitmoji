import React from "react";
import styled from "styled-components";
import { Flex } from "rebass";

const FullScreenHero = styled<Flex>(Flex) `
  /* BG: */
  background: url("static/assets/map.png") no-repeat fixed center, linear-gradient(-46deg, #E45454 0%, #DE4746 4%, #E16B6B 50%, #E04C4B 89%, #E17A7B 100%);
  height: 100vh;
  background-size: inherit;
  overflow: hidden;
`;

export default (props) => {
  return (
    <FullScreenHero column>
      {props.children}
    </FullScreenHero>
  );
};