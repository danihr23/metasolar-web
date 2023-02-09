import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png';
import mediaIcon from '../assets/mediaIcon.png';
import twitterIcon from '../assets/twitterIcon.png';
import solarPanelImg from '../assets/solarPanelImg.png';


const HomePage=()=> {


  return (
    <HomePageWrapper>
        <Logo/>
    <NavWrapper>
        <Navigation>
            <NavTool>About</NavTool>
            <NavTool>Gallery</NavTool>
            <NavTool>Roadmap</NavTool>
            <NavTool>FAQ</NavTool>
            <NavTool>Whitepaper</NavTool>
            <Button>WALLET</Button>
            <MediaIcon background={mediaIcon}/>
            <MediaIcon background={twitterIcon}/>
        </Navigation>
   
     </NavWrapper>
     <SolarPanelImg/>
     <TextField>
        <Title>Ticket to the sun</Title>
        <Text>1 ticket = 1 chance<br></br>
            Pellentesque a finibus urna, 
            sed tempus esfinibus urna,sed tempus es.</Text>
     </TextField>
     </HomePageWrapper>
  )
}
export default HomePage

const HomePageWrapper = styled.div`
width:100%;
height:100%;
position:relative ;
`
const Logo = styled.div`
width:144px;
height:28px ;
position:absolute ;
left:43px ;
top:46px ;
background-image: url(${logo}) ;
`
const NavWrapper = styled.div`
width:45% ;
height:520px ;
position:absolute ;
right:0px ;
display:flex ;
justify-content:center ;
background-color:#F1F7FD ;
`
const Navigation = styled.div`
    width: 90%;
    height: 11%;
    //border: 1px solid black;
    position: absolute;
    display: flex;
    top: 28px;
    align-items: center;
    justify-content: space-evenly;

`
const NavTool = styled.div`
width: auto;
height: 17px;
color: #000000;
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
flex: none;
order: 0;
flex-grow: 0;

`
const Button = styled.div`
width: 70px;
height: 26px;
box-sizing: border-box;
color: #3A712D;
background: #FCFEFF;
border: 1px solid #3A712D;
border-radius: 4.30769px;
font-size: 10px;
display: flex;
align-items: center;
justify-content: center;

`
const MediaIcon=styled.div`
width:24px ;
height:19px ;
background-image: url(${props => props.background}) ;
`
const SolarPanelImg = styled.div`
        position: absolute;
    width: 32%;
    height: 244px;
    left: 38%;
    top: 332px;

background: url(${solarPanelImg});
border-radius: 17px;

`

const TextField = styled.div`
    position: absolute;
    width: 47%;
    top: 142px;
    left: 21%;
    height: 156px;
//border:1px solid black;
`
const Title = styled.div`

width: 100%;
//height: 73px;
margin-bottom: 9px;
//font-family: ;
font-style: normal;
font-weight: 700;
font-size: 60px;
line-height: 73px;
color: #283447;
flex: none;
order: 0;
flex-grow: 0;
`
const Text =styled.div`

width: 75%;
//height: 87px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;
color: #0F1D32;
flex: none;
order: 1;
flex-grow: 0;
`