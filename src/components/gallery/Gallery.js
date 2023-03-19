import React from 'react'
import HomePageGallery from './HomePageGallery'
import styled from "styled-components/macro";
import GalleryNFT from "./GalleryNFT";
import Footer from '../footer/Footer';
import { scrollByPosition } from '../hook/scrollHook';
export default function Gallery() {

  const onClick =()=>{
    scrollByPosition(200)
  }
  return (
    <Wrapper>
      <HomePageGallery  height="71%" bottom="-32%" width="64%"/>
    <GalleryNFT nftCount={50000}  top="414px"  />
    <Footer top={'3800px'} onClickBuy={onClick}/>
    </Wrapper>
  )
}

const Wrapper =styled.div`
width:100%;

position: relative;

`