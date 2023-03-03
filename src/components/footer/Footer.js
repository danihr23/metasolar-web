import React from "react";
import styled from "styled-components/macro";

import Navigation from "../navigation/Navigation";

export default function Footer() {
  return (
    <Wrapper>
      <GreenWrapper>
        <InnerFrame>
          <Title> From the intangible to the tangible</Title>
          <Text>
            Ut et sodales mauris, in mollis magna. Maecenas dignissim vulputate
            tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Í
          </Text>
        </InnerFrame>
      </GreenWrapper>
      <BlackWrapper>
        <Navigation isCompany={true} height={"70%"} flexDirection={"column"}  color={'#FFFFFF'} footer={true}/>
      </BlackWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  //height: 494px;
  //left: 0px;
  top: 3403.17px;

  background: #fcfeff;
`;

const GreenWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 377px;

  top: 0px;

  /* main bg */

  background: #daf5d0;
  border-radius: 30px;
`;
const InnerFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 20px;

  position: absolute;
  width: 60%;

  left: 250px;
  top: 59px;
`;
const Title = styled.div`
  width: 72%;
  height: 26%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  text-align: center;

  /* title colour */

  color: #283447;
`;
const Text = styled.div`
  width: 100%;
  height: 35%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  /* text colour */

  color: #0f1d32;
`;
const BlackWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 209px;

  top: 285px;

  /* title colour */

  background: #283447;
`;
