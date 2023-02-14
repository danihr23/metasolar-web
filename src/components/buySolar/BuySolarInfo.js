import React from "react";
import styled from "styled-components/macro";
import { buySolarData } from "../homepageStore/homePageStore";
const BuySolarInfo = () => {
  return (
    <Wrapper>
      <Titile>Why you should buy an NFT</Titile>
      <NFTWrapper>
        {buySolarData.map((item, index) => {
          return (
            <InfoWrapper key={index}>
              <Logo background={item.image} />
              <DataTitle>{item.title}</DataTitle>
              <DataPower>{item.power}</DataPower>
            </InfoWrapper>
          );
        })}
      </NFTWrapper>
    </Wrapper>
  );
};
export default BuySolarInfo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 30px;
  position: absolute;
  width: 78%;
  height: 281px;
  left: 11%;
  top: 848.48px;
`;
const NFTWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;

  width: 100%;
  height: 67%;
`;
const Titile = styled.div`
  width: 52%;
  height: 30%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  text-align: center;

  color: #283447;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 17px;

  width: 30%;
  height: 96%;
`;

const Logo = styled.div`
  width: 62%;
  height: 90px;
  background: transparent url(${(props) => props.background}) top center
    no-repeat;
  background-size: contain;
`;

const DataTitle = styled.div`
  width: 80%;
  height: 24%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;

  /* text colour */

  color: #0f1d32;
`;

const DataPower = styled.div`
  width: 89%;
  height: 22%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-align: center;

  /* title colour */

  color: #283447;
`;
