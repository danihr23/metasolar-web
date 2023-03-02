import React, { useState } from "react";
import styled from "styled-components/macro";
import nft from "../assets/nft.png";
export default function BuyNft({ myRef }) {

  const [totalNft, setTotalNft] = useState(0)

  const onClickIncrease =()=>{
      if (totalNft>= 50){
        return
      }
      else {
        setTotalNft(prev=> prev + 1);
      }

  }
  const onClickDecrease = ()=>{
    if (totalNft<= 0){
      return
    }
    else {
      setTotalNft(prev=> prev - 1);
    }
}

const totalPrice = totalNft * 0.01;


  return (
    <Wrapper ref={myRef}>
      <Title>Get your MetaSolar NFT</Title>
      <Text>Enter how many NFTs you would like tomint here</Text>
      <NftImgWrapper>
        <Image />
        <PriceText>
          Price per MetaSolar 0.01 BNB Public sale available 12.04.2022
        </PriceText>
      </NftImgWrapper>
      <AmountWrapper>
        <AmountConteiner>
          <AmountText>Amount</AmountText>
          <Input placeholder="50 max" disabled value={totalNft >0 ? totalNft : '' } />
        </AmountConteiner>
        <ButtonsConteiner>
          <IncreaseButton onClick={onClickIncrease}>+</IncreaseButton>
          <DecreaaseButton onClick={onClickDecrease}>-</DecreaaseButton>
        </ButtonsConteiner>
      </AmountWrapper>
      <ToralPriceWrapper>
        <Price>Price</Price>
        <PriceIput> {totalPrice.toFixed(2)} BNB</PriceIput>
      </ToralPriceWrapper>
      <BuyBtn>Buy</BuyBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  gap: 17px;
  z-index: 3;
  position: absolute;
  width: 27%;
  height: 67%;
  left: 51%;
  top: 29%;

  background: #ffffff;
  box-shadow: -10.8571px 9.04762px 10.8571px rgba(40, 52, 71, 0.05);
  border-radius: 10.8571px;
`;
const Title = styled.div`
  width: 80%;
  height: 7%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`;
const Text = styled.div`
  width: 90%;
  height: 8%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

const NftImgWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18.0952px;
  gap: 9.05px;

  width: 93%;
  height: 21%;

  background: #ffffff;
  border: 0.904762px solid #969fa5;
  border-radius: 9.04762px;
`;
const Image = styled.div`
  width: 24%;
  height: 65px;
  background: transparent url(${nft}) top center no-repeat;
  background-size: contain;
`;
const PriceText = styled.div`
  width: 73%;
  height: 62%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: right;

  color: #021018;
`;
const AmountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 93%;
  height: 16%;
`;

const DecreaaseButton = styled.div`
  position: relative;
  width: 50px;
  height: 26px;

  background: #fff1f1;
  border: 1px solid #a82c43;
  border-radius: 7.2381px 7.2381px 0px 0px;
  transform: rotate(-180deg);

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 23.5238px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  justify-content: center;
  color: #a82c43;
`;
const IncreaseButton = styled.div`
  position: relative;
  width: 50px;
  height: 26px;

  background: #f4fff1;
  /* secondary button */

  border: 1px solid #3a712d;
  border-radius: 7.2381px 7.2381px 0px 0px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 23.5238px;
  line-height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  /* secondary button */

  color: #3a712d;
`;
const ButtonsConteiner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  justify-content: center;
`;
const AmountConteiner = styled.div`
  position: relative;
  width: 81%;
  height: 100%;
`;
const AmountText = styled.div`
  position: absolute;
  left: 0%;
  right: 80.22%;
  bottom: 81.81%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #acb5bd;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 25px;
`;

const Input = styled.input`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 76%;
  top: 13%;
  background: #ffffff;
  border: 0.904762px solid #969fa5;
  border-radius: 7.2381px;
  padding: 10px;
  ::placeholder {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    /* identical to box height */

    color: #969fa5;
  }
`;

const ToralPriceWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 93%;
  height: 16%;
`;
const Price = styled.div`
  position: absolute;
  left: 0%;
  right: 88%;
  top: 0%;
  bottom: 81.81%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #acb5bd;
`;

const PriceIput = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 87%;
  top: 23%;
  background: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 0.904762px solid #969fa5;
  border-radius: 7.2381px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  padding: 12px;
  /* identical to box height */

  color: #021018;
`;
const BuyBtn = styled.div`
  width: 48%;
  height: 10%;
  position: relative;
  top: 4%;
  background: #ff9920;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7.2381px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: #ffffff;
`;
