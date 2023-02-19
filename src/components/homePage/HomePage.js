import React from "react";
import styled from "styled-components/macro";
import solarPanelImg from "../assets/solarPanelImg.png";
import { CountdownMonths } from "../countDownTimer/CountdownTimer";
import SolarNFT from "../solarNFT/SolarNFT";
import BuySolarInfo from "../buySolar/BuySolarInfo";
import HomePageAbout from "../about/HomePageAbout";
import GalleryNFT from "../gallery/GalleryNFT";
import HomePageGallery from "../gallery/HomePageGallery";
import BuyNft from "../buyNFT/BuyNft";
const HomePage = () => {
  return (
    <HomePageWrapper>
      <NavWrapper />
      <SolarPanelImg />
      <TextField>
        <Title>Ticket to the sun</Title>
        <Text>
          1 ticket = 1 chance<br></br>
          Pellentesque a finibus urna, sed tempus esfinibus urna,sed tempus es.
        </Text>
      </TextField>
      <BuyNft/>
      <CountdownMonths />
      <SolarNFT />
      <BuySolarInfo />
      <HomePageAbout />
      <HomePageGallery />
      <GalleryNFT />
      <Roadmap>Roadmap</Roadmap>
    </HomePageWrapper>
  );
};
export default HomePage;

const HomePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const NavWrapper = styled.div`
  width: 53%;
  height: 708px;
  position: absolute;
  right: 0px;
  display: flex;
  justify-content: center;
  background-color: #f1f7fd;
`;

const SolarPanelImg = styled.div`
  position: absolute;
  width: 39%;
  height: 336px;
  left: 36%;
  top: 426px;

  background: transparent url(${solarPanelImg}) top center no-repeat;
  background-size: contain;
  border-radius: 17px;
`;

const TextField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  position: absolute;
  width: 40%;
  height: 180px;
  left: 11%;
  top: 200.65px;
`;
const Title = styled.div`
  width: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 73px;
  color: #283447;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const Text = styled.div`
  width: 97%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #0f1d32;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
const Roadmap = styled.div`
  position: absolute;
  width: 37%;
  height: 7%;
  left: 32%;
  top: 2249px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #283447;
`;
