import React from "react";
import styled from "styled-components/macro";
import logo from "../assets/logo.png";
import mediaIcon from "../assets/mediaIcon.png";
import twitterIcon from "../assets/twitterIcon.png";
import whiteTwitter from "../assets/whiteTwitter.png";
import whiteIcon from "../assets/whiteicon.png";
import logoWhite from "../assets/logoWhite.png";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { scrollToFaq,scrollToRoadmap } from "../hook/scrollHook";
import useTruncatedAddress  from "../hook/useTruncatedAddress";



const Navigation = ({
  flexDirection,
  height,
  isWallet,
  isCompany,
  logoleft,
  color,
  footer,
}) => {

 const {connectWallet} = useTruncatedAddress()
 
 const userAddres = useSelector((state)=> state.userAddres.value)
 

  const onClickHandler = ()=>{
      connectWallet()
  }


 
  return (

    <Wrapper flexDirection={flexDirection} height={height}>
      <Logo logoleft={logoleft} to={"/"} iswhite={footer} />
      <Menu>
        <NavTool to={"/About"} color={color}>About</NavTool>
        <NavTool to={"/Gallery"} color={color}>Gallery</NavTool>
        <NavTool to={"/"} onClick={scrollToRoadmap} color={color}>
          Roadmap
        </NavTool>
        <NavTool to={'/'} onClick={scrollToFaq} color={color}>
          FAQ
        </NavTool>
        <NavTool color={color}>Whitepaper</NavTool>
        {isWallet && <Button  onClick={onClickHandler}> {!userAddres ? "WALLET" : userAddres.substring(0, 8) + '...' } </Button>}
           

        <MediaIcon background={footer ? whiteIcon : mediaIcon}  />
        <MediaIcon background={footer ? whiteTwitter : twitterIcon} to={'https://twitter.com/?lang=en'}/>
      </Menu>
      {isCompany && <div style=  {{color: '#7E91B0'}} >© 2022 Metasolar. All rights reserved</div>}
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
  flex-direction: ${(props) => props.flexDirection && props.flexDirection};
  width: 94%;
  height: ${(props) => (props.height ? props.height : "5%")};
  left: 3%;
  top: 40px;
`;

const Logo = styled(Link)`
  width: 12%;
  height: 27px;
  position: relative;

  left: ${(props) => props.logoleft && props.logoleft};
  z-index: 2;
  background: transparent url(${(props) => (props.iswhite ? logoWhite : logo)})
    top center no-repeat;
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
const NavTool = styled(Link)`
  text-decoration: none;
  width: auto;
  height: 17px;
  color: ${(props) => (props.color ? props.color : " #000000")};
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
const MediaIcon = styled(Link)`
  width: 24px;
  height: 19px;

  background: transparent url(${(props) => props.background}) top center
    no-repeat;
  background-size: contain;
`;
