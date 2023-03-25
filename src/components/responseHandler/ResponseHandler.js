import React from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setResponseHandler } from "../reducers/userWalletAddresReducer";
export default function ResponseHandler() {
  const response = useSelector((state) => state.userAddres.resHandler);
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(setResponseHandler(""));
  };

  return (
    <Wrapper>
      <Response>{response}</Response>
      <Button onClick={onClickHandler}>OK</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 40%;
  height: 150px;
  position: absolute;
  top: 400px;
  left: 30%;
  z-index: 4;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-around;
  align-items: center;
  background: #98949d;
  border-radius: 11px;
`;

const Response = styled.div`
  width: 100%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
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
