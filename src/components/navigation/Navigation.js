import React,{useState} from "react";
import styled from "styled-components/macro";
import logo from "../assets/logo.png";
import mediaIcon from "../assets/mediaIcon.png";
import twitterIcon from "../assets/twitterIcon.png";
import whiteTwitter from "../assets/whiteTwitter.png";
import whiteIcon from "../assets/whiteicon.png";
import logoWhite from "../assets/logoWhite.png";
import {  useDispatch,useSelector } from 'react-redux'
import { setUserAddres } from '../reducers/userWalletAddresReducer'
import { Link } from "react-router-dom";
import { scrollToFaq,scrollToRoadmap } from "../hook/scrollHook";

import Web3 from "web3";


const Navigation = ({
  flexDirection,
  height,
  isWallet,
  isCompany,
  logoleft,
  color,
  footer,
}) => {

  const dispatch= useDispatch();
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
  const [walletLabel, setWalletLabel] = useState("");
  //const count = useSelector((state)=> state.userAddres.value)
  async function connectWallet() {
    
    try {
      if (typeof window.ethereum !== 'undefined') {
        // Prompt user to connect wallet
        await window.ethereum.enable();
        // Get user account address
        const accounts = await web3.eth.getAccounts();
       
        // Set the wallet button label to the user's account address
        //setWalletLabel(accounts[0]);
        dispatch(setUserAddres(accounts[0]))
        const truncatedAddress = accounts[0].substring(0, 8) + "..." 
        setWalletLabel(truncatedAddress);
      } else {
        window.location.href = 'https://metamask.io/download.html';
      }
    } catch (error) {
      console.error(error);
    }
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
        {isWallet && <Button  onClick={connectWallet}> {walletLabel==='' ? "WALLET" : walletLabel } </Button>}
           

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
