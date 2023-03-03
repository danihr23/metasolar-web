import React from "react";
import styled from "styled-components/macro";
import BuyButton from "../buttons/BuyButton";

const HomePageGallery = ({ onClick }) => {
  return (
    <Wrapper>
      <Title>Gallery</Title>
      <Text>
        Below is just a part of the MetaSolar NFT. Click on a panel to buy it.
        Integer vestibulum, metus at blandit bibendum, tortor mauris cursus
        arcu, ac ultrices urna metus vitae ipsum.
      </Text>
      <ButtonWrapper>
        
        <BuyButton
          onClick={onClick}
          btnPosition={'relative'}
          btnBorderRadius={"7.2381px"}
          btnBackground={" #FF9920"}
          btnText={"Buy"}
          primeryFontSize={"14px"}
          primeryLineHeight={"16px"}
          primeryColor={"#FFFFFF"}
        />

        <BuyButton
           btnPosition={'relative'}
         btnBorderRadius={"6.54875px"}
          btnBackground={" #FFFFFF"}
          btnText={"Check your nfts"}
          bntBorder={"0.904762px solid #3A712D"}
          primeryFontSize={"13px"}
          primeryLineHeight={"15px"}
          primeryColor={"#3A712D"}
        />

       
      </ButtonWrapper>
    </Wrapper>
  );
};
export default HomePageGallery;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 30px;

  position: absolute;
  width: 62%;
  left: 20%;
  height: 37%;
  bottom: -184%;
`;

const Title = styled.div`
  width: 60%;
  height: 16%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  text-align: center;

  color: #283447;
`;
const Text = styled.div`
  width: 100%;
  height: 18%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  /* text colour */

  color: #0f1d32;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  width: 44%;
  height: 20%;
`;

