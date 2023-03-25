import React from "react";
import styled from "styled-components/macro";
import { roadmapData } from "../homepageStore/homePageStore";
const RoadmapComponent = () => {
  return (
    <Wrapper>
      <BoxesWrapper top="2329px" left="40%">
        {roadmapData.map((item, index) => {
          return index === 0 || index === 2 ? (
            <Box key={index}>
              <ContentWrapper alignItems="flex-end">
                <Title>
                  0{index + 1} {item.title}
                </Title>
                <Line />
                <Text>{item.data}</Text>
              </ContentWrapper>
            </Box>
          ) : null;
        })}
      </BoxesWrapper>
      <BoxesWrapper top="1987px" left="160%">
        {roadmapData.map((item, index) => {
          return index === 1 || index === 3 ? (
            <Box key={index}>
              <ContentWrapper alignItems="flex-start">
                <Title>
                  0{index + 1} {item.title}
                </Title>
                <Line />
                <Text>{item.data}</Text>
              </ContentWrapper>
            </Box>
          ) : null;
        })}
      </BoxesWrapper>
    </Wrapper>
  );
};
export default RoadmapComponent;
const Wrapper = styled.div`
  width: 30%;
  position: absolute;
  top: -1%;
`;
const BoxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;

  position: relative;

  left: ${(props) => props.left};
  top: ${(props) => props.top};
`;

const Title = styled.span`
  width: 47%;
  height: 33%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
`;
const Text = styled.div`
  width: 75%;
  height: 51px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: right;

  /* text colour */

  color: #0f1d32;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 10px;

  width: 100%;
  height: 148px;

  background: #daf5d0;
  border-radius: 16px 16px 0px;
`;

const Line = styled.div`
  width: 15%;
  height: 0px;

  border: 1px solid #7ec465;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
  padding: 0px;
  gap: 10px;

  width: 100%;
  //height: 100px;
`;
