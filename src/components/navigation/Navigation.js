import React from "react";
import styled from "styled-components/macro";
import logo from "../assets/logo.png";
import mediaIcon from "../assets/mediaIcon.png";
import twitterIcon from "../assets/twitterIcon.png";
const Navigation = () => {
  return (
    <Wrapper>
      <Logo />
      <Menu>
        <NavTool>About</NavTool>
        <NavTool>Gallery</NavTool>
        <NavTool>Roadmap</NavTool>
        <NavTool>FAQ</NavTool>
        <NavTool>Whitepaper</NavTool>
        <Button>WALLET</Button>
        <MediaIcon background={mediaIcon} />
        <MediaIcon background={twitterIcon} />
      </Menu>
    </Wrapper>
  );
};
export default Navigation;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  width: 94%;
  height: 45.85px;
  left: 3%;
  top: 40px;
`;

const Logo = styled.div`
  width: 12%;
  height: 27px;
  position: relative;
  left: 43px;

  background: transparent url(${logo}) top center no-repeat;
  background-size: contain;
`;
const Menu = styled.div`
  width: 48%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 2;
`;
const NavTool = styled.div`
  width: auto;
  height: 17px;
  color: #000000;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
`;
const Button = styled.div`
  width: 70px;
  height: 26px;
  box-sizing: border-box;
  color: #3a712d;
  background: #fcfeff;
  border: 1px solid #3a712d;
  border-radius: 4.30769px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MediaIcon = styled.div`
  width: 24px;
  height: 19px;
  background: transparent url(${(props) => props.background}) top center
    no-repeat;
  background-size: contain;
`;
