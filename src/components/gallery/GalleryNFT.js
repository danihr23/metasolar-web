import React from 'react'
import styled from 'styled-components/macro';




const nft = Array.from({length: 315}, (_, i) => i + 1);
const  GalleryNFT=()=> {
   

    const createNFTimg = () => {
      const resultsRender = [];
     
      const x= nft.length>= 80 ? 80 : nft.length;

     for (var i = 0; i < nft.length; i += x) {
      const diff = i === 0 ? x : nft.length - i >80 ? 80 :nft.length - i;
        resultsRender.push(
          <BoxWrapper key={Math.random()}>
            {
            nft.slice(i, i + (diff/5))
              // eslint-disable-next-line no-loop-func
              .map((img,index) => (
                <NftBox  key={Math.random()}>
                {
                  nft.slice(i, i + 5)
                    .map((img,index) => ( <Vector key={Math.random()}  index={index} background={index%2 ===0 ?'#5E9B9B' : index%3 ===0 ? '#70B1A2' : '#8AD1AC'} /> ))
                }
                </NftBox>
              ))
          }
         
          </BoxWrapper>
        );
      }

      return resultsRender;
    }

   
    return (
        <Wrapper>
<BoxWrapper >
{createNFTimg()}
</BoxWrapper>      
                          
        </Wrapper>
  )
};

export default GalleryNFT;
const Wrapper = styled.div`
display: grid;
grid-template-columns: auto auto auto auto;
justify-content: center;
align-items: flex-start;
position: relative;
width: 100%;
height: 303px;
top: 1500px;
`

const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding-left: 0; 
  justify-items: center;
align-items: flex-start;
padding: 4px;
/* width: 304px;
height: 303px; */


`


const NftBox = styled.div`
display: grid;
grid-template-columns: auto auto auto auto auto;
gap:2px ;
margin: 2px;
/* width: 65px;
height: 65px; */

`
const Vector = styled.div`
position: relative;
gap:3px ;
width:12px;
height:65px ;
background: ${props => props.background};
border-top-left-radius:${props=>props.index ===0 && '7'}px;
border-bottom-left-radius:${props=>props.index ===0 && '7'}px;
border-top-right-radius:${props=>props.index ===4 && '8'}px;
border-bottom-right-radius:${props=>props.index ===4 && '8'}px;

`