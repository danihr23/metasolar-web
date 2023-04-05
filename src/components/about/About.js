import React from "react";
import styled from "styled-components/macro";
import panelsImg from "../assets/panelsImg.png";
import Footer from "../footer/Footer";
import { persons } from "../homepageStore/homePageStore";
import { scrollByPosition } from "../hook/scrollHook";
const About = () => {
  const onClick = () => {
    scrollByPosition(200);
  };
  return (
    <Wrapper>
      <ContentWrapper>
        <GreenWrapper />
        <Image />
        <Title>About MetaSolar </Title>
        <Text>Pellentesque a finibus urna, sed tempus es</Text>
        <InfoWrapper>
          Ut et sodales mauris, in mollis magna. Maecenas dignissim vulputate
          tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aliquam non nisi nec massa maximus facilisis. Integer vestibulum,
          metus at blandit Ut et sodales mauris, in mollis magna. Maecenas
          dignissim vulputate tincidunt. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aliquam non nisi nec massa maximus facilisis. Integer
          vestibulum, metus at blandit bibendum, tortor mauris cursus arcu, ac
          ultrices urna metus vitae ipsum. Ut et sodales mauris, in mollis
          magna. Maecenas dignissim vulputate tincidunt. Lorem ipsum dolor unt.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non
          nisi nec massa maximus facilisis. Integer vestibulum, metus at blandit
          bibendum, tortor mauris cursus arcu, ac ultrices urna metus vitae
          ipsum.Í
        </InfoWrapper>
        <TeamTitle>Team</TeamTitle>
        <TeamWrapper>
          {persons.map((item, index) => {
            return (
              <PersonInfoWrapper key={index}>
                <PersonImg background={item.image} />
                <PersonalInfoWrapper>
                  <Name>{item.name}</Name>
                  <Line />
                  <Position>{item.position}</Position>
                </PersonalInfoWrapper>
              </PersonInfoWrapper>
            );
          })}
        </TeamWrapper>
      </ContentWrapper>
      <Footer position="relative" onClickBuy={onClick} roadmapPosions={1500} />
    </Wrapper>
  );
};
export default About;
const Wrapper = styled.div`
  width: 100%;
  gap: 30px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: stretch;
  align-items: center;
`;
const ContentWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const GreenWrapper = styled.div`
  position: relative;
  width: 833px;
  height: 722px;
  left: -40px;
  top: -199px;

  /* main bg */

  background: #daf5d0;
  @media (max-width: 1100px) {
    width: 65%;
    height: 578px;
  }
  @media (max-width: 930px) {
    width: 65%;
    height: 578px;
  }

  @media (max-width: 720px) {
    width: 65%;
    height: 578px;
  }

  @media (max-width: 440px) {
    width: 65%;
    height: 578px;
  }
`;

const Image = styled.div`
  position: absolute;
  width: 467px;
  height: 387px;
  left: 142px;
  top: 171px;
  border-radius: 10px;
  background: transparent url(${panelsImg}) top center no-repeat;
  background-size: contain;
  @media (max-width: 1100px) {
    height: 259px;
    left: -25px;
    top: 173px;
  }

  @media (max-width: 720px) {
    height: 259px;
    left: -25px;
    top: 173px;
  }

  @media (max-width: 440px) {
    height: 259px;
    left: -25px;
    top: 173px;
  }
`;

const Title = styled.div`
  position: absolute;
  width: 465px;
  height: 48px;
  left: 650px;
  top: 188px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;

  /* title colour */

  color: #283447;
  @media (max-width: 1100px) {
    font-size: 26px;
    line-height: 19px;
    width: 100%;
    height: 35px;
    left: 387px;
    top: 188px;
  }
  @media (max-width: 930px) {
    font-size: 26px;
    line-height: 19px;
    width: 100%;
    height: 35px;
    left: 387px;
    top: 188px;
  }

  @media (max-width: 720px) {
    font-size: 26px;
    line-height: 19px;
    width: 100%;
    height: 35px;
    left: 387px;
    top: 188px;
  }

  @media (max-width: 440px) {
    font-size: 26px;
    line-height: 19px;
    width: 100%;
    height: 35px;
    left: 387px;
    top: 188px;
  }
`;

const Text = styled.div`
  position: absolute;
  width: 273px;
  height: 58px;
  left: 650px;
  top: 255px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  /* text colour */

  color: #0f1d32;
  @media (max-width: 1100px) {
    font-size: 15px;
    line-height: 3px;
    width: 100%;
    height: 58px;
    left: 389px;
    top: 255px;
  }
  @media (max-width: 930px) {
    font-size: 15px;
    line-height: 3px;
    width: 100%;
    height: 58px;
    left: 389px;
    top: 255px;
  }

  @media (max-width: 720px) {
    font-size: 15px;
    line-height: 3px;
    width: 100%;
    height: 58px;
    left: 389px;
    top: 255px;
  }

  @media (max-width: 440px) {
    font-size: 15px;
    line-height: 3px;
    width: 100%;
    height: 58px;
    left: 389px;
    top: 255px;
  }
`;

const InfoWrapper = styled.div`
  position: relative;
  width: 680px;
  height: 396px;
  left: 450px;
  top: -306px;
  padding: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3f8fc;
  border-radius: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  /* or 150% */

  /* text colour */

  color: #0f1d32;
  @media (max-width: 1100px) {
    font-size: 14px;
    line-height: 18px;
    width: 54%;
    height: 302px;
    left: 250px;
    top: 342px;
  }
  @media (max-width: 930px) {
    font-size: 14px;
    line-height: 18px;
    width: 54%;
    height: 302px;
    left: 250px;
    top: -241px;
  }

  @media (max-width: 720px) {
    font-size: 14px;
    line-height: 18px;
    width: 54%;
    height: 302px;
    left: 250px;
    top: 342px;
  }

  @media (max-width: 440px) {
    font-size: 14px;
    line-height: 18px;
    width: 54%;
    height: 302px;
    left: 250px;
    top: 342px;
  }
`;

const TeamTitle = styled.div`
  position: absolute;
  width: 465px;
  height: 39px;
  left: 355px;
  top: 898px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  text-align: center;

  /* title colour */

  color: #283447;
  @media (max-width: 1100px) {
    font-size: 31px;
    line-height: 17px;
    width: 100%;
    height: 60px;
    left: 90px;
    top: 756px;
  }
  @media (max-width: 930px) {
    font-size: 31px;
    line-height: 17px;
    width: 100%;
    height: 60px;
    left: 7px;
    top: 756px;
  }

  @media (max-width: 720px) {
    font-size: 31px;
    line-height: 17px;
    width: 100%;
    height: 60px;
    left: 7px;
    top: 756px;
  }

  @media (max-width: 440px) {
    font-size: 31px;
    line-height: 17px;
    width: 100%;
    height: 60px;
    left: 90px;
    top: 756px;
  }
`;

const TeamWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-items: center;
  padding: 0px;
  gap: 16px;
  position: relative;
  width: 100%;
  height: 100%;
  top: -137px;
  justify-content: center;

  @media (max-width: 1100px) {
    flex-wrap: wrap;

    gap: 18px;
    width: 100%;
    height: 100%;
    top: -130px;
  }
  @media (max-width: 930px) {
    flex-wrap: wrap;

    gap: 18px;
    width: 100%;
    height: 100%;
    top: -130px;
  }

  @media (max-width: 720px) {
    flex-wrap: wrap;

    gap: 18px;
    width: 100%;
    height: 100%;
    top: -130px;
  }

  @media (max-width: 440px) {
    flex-wrap: wrap;

    gap: 18px;
    width: 100%;
    height: 100%;
    top: -130px;
  }
`;
const PersonInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 200px;
  height: 293px;
`;

const PersonImg = styled.div`
  width: 200px;
  height: 200px;
  background: transparent url(${(props) => props.background}) top center
    no-repeat;
  background-size: contain;
`;
const PersonalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px;
  gap: 10px;

  position: relative;
  height: 83px;
`;

const Name = styled.div`
  height: 24px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  /* text colour */

  color: #0f1d32;
`;
const Line = styled.div`
  width: 54px;
  height: 0px;
  border: 1px solid #7ec465;
`;

const Position = styled.div`
  width: 143px;
  height: 19px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  /* text colour */

  color: #0f1d32;
`;
