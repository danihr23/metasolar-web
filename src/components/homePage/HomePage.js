import React, { useRef } from "react";
import styled from "styled-components/macro";
import solarPanelImg from "../assets/solarPanelImg.png";
import { CountdownMonths } from "../countDownTimer/CountdownTimer";
import SolarNFT from "../solarNFT/SolarNFT";
import BuySolarInfo from "../buySolar/BuySolarInfo";
import HomePageAbout from "../about/HomePageAbout";
import GalleryNFT from "../gallery/GalleryNFT";
import HomePageGallery from "../gallery/HomePageGallery";
import BuyNft from "../buyNFT/BuyNft";
import RoadmapComponent from "../roadmap/RoadmapComponent";
import { FAQ } from "../homepageStore/homePageStore";
import FAQComponent from "../FAQ/FAQComponent";
import { scroll } from "../hook/scrollHook";
import Footer from "../footer/Footer";

const HomePage = ({ roadmapRef }) => {
  const myRef = useRef(null);

  const onClickBuy = () => {
    console.log(55, myRef.current);
    scroll(myRef);
  };

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
      <BuyNft myRef={myRef} />
      <CountdownMonths />
      <SolarNFT />
      <BuySolarInfo />
      <HomePageAbout />
      <HomePageGallery onClick={onClickBuy} height="37%" bottom="-184%" width="62%"/>
      <GalleryNFT nftCount={320} top={'1500px'} overflow='auto' />
      <Roadmap>Roadmap</Roadmap>
      <RoadmapComponent roadmapRef={roadmapRef} />
      <WrapperFAQ>
        <FaqTittle>FAQ</FaqTittle>
        <FaqWrapper>
          {FAQ.map((item, index) => {
            return <FAQComponent key={index} index={index} item={item} />;
          })}
        </FaqWrapper>
      </WrapperFAQ>
     <Footer top={'3403px'} onClickBuy={onClickBuy} />
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

const WrapperFAQ = styled.div`
  display: flex;
  position: absolute;
  gap: 30px;
  width: 100%;
    height: 89%;
  flex-direction: column;
  top: 2864.17px;
  background: #f3f8fc;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const FaqTittle = styled.div`

  width: 30%;
  height: 8%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #283447;
`;
const FaqWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;

  position: relative;
  width: 781px;
  height: 418px;
`;
