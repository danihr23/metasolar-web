import React, { useEffect, useState } from "react";
import moment from "moment";
import styled from 'styled-components/macro';

const targetTime = moment("2023-05-01");

export const CountdownMonths = () => {
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
        <Title>Countdown to the giveaway</Title>
        <Text>All the Lorem Ipsum generators on the Internet.</Text>
      <TimerWrapper>
        <span>{timeBetween.months()}m </span>
        <span>{timeBetween.days()}d </span>
        <span>{timeBetween.hours()}h </span>
        <span>{timeBetween.minutes()}min </span>
        <span>{timeBetween.seconds()}s </span>
      </TimerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
box-sizing: border-box;
align-items: center;
padding: 10px 20px;
position: absolute;
width: 36%;
height: 163px;
left: 4%;
 top: 506px;
background: #DAF5D0;
border: 1px solid #A6CC97;
border-radius: 20px;

`
const Title = styled.div`
width: auto;
height: 28%;
margin-top: 18px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;
text-align: center;
color: #283447;
flex: none;
order: 0;
flex-grow: 0;

`
const Text = styled.div`
width: auto;
height: 19px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #283447;
flex: none;
order: 1;
flex-grow: 0;
`
const TimerWrapper = styled.div`
width: auto;
height: 20%;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: space-around;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 35px;
line-height: 48px;
text-align: center;
letter-spacing: 0.1em;
color: #283447;


`