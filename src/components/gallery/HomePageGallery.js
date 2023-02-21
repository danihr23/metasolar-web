import React from "react";
import styled from "styled-components/macro";

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
        <Button
          borderRadius={"7.2381px"}
          background={" #FF9920"}
          onClick={onClick}
        >
          <Primery fontSize={"14px"} lineHeight="16px" color="#FFFFFF">
            Buy
          </Primery>
        </Button>

        <Button
          borderRadius={"6.54875px"}
          background={" #FFFFFF"}
          border={"0.904762px solid #3A712D"}
        >
          <Primery fontSize="12.6667px;" lineHeight="15px" color="#3A712D">
            Check your nfts
          </Primery>
        </Button>
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

const Button = styled.div`
  box-sizing: border-box;

  position: relative;
  width: 48%;
  height: 90%;
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
`;

const Primery = styled.div`
  position: absolute;
  left: 5%;
  right: 5%;
  top: 31.25%;
  bottom: 29.61%;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.color};
  text-align: center;
  text-transform: uppercase;
`;
