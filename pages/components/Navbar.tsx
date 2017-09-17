import React from "react";
import styled from "styled-components";
import { responsiveStyle } from "styled-system";
import { Toolbar, NavLink, Box, Image } from "rebass";

// Adjust Navbar height responsively via responsive Style over props
const Navbar = styled<Toolbar>(Toolbar)`
  ${responsiveStyle("min-height", "minHeight")};
`;

// Style NavItems
const NavItem = styled<NavLink>(NavLink)`
  text-transform: uppercase;
  font-weight: 100;
  border-bottom: solid 0.5px;
  // Responsively hide item
  ${responsiveStyle("display", "hide", "none")};
`;

// Style Logo
const Logo = styled<Image>(Image)`
  display: inline-flex;
  align-items: center;
  align-self: stretch;
  min-height: inherit;
`;

export default props => {
  return (
    <Box mx={[2, 4]} my={[3, 4]}>
      <Navbar minHeight={["24px", "32px"]}>
        <NavItem f={[1, 2]} py={[1, 2]}>
          Star on Github
        </NavItem>
        <NavItem
          hide={[true, false]}
          f={[1, 2]}
          py={[1, 2]}
          ml={["inherited", "auto"]}
        >
          Write Expressive Commits
        </NavItem>
        <Logo pl={[0, 3]} ml={["auto", "unset"]} src="static/logo.svg" />
      </Navbar>
    </Box>
  );
};
