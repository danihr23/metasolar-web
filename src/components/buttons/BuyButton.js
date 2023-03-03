import React from "react";
import styled from "styled-components/macro";
export default function BuyButton({
  onClick,
  btnText,
  btnBorderRadius,
  btnBackground,
  bntBorder,
  primeryFontSize,
  primeryLineHeight,
  primeryColor,
  btnPosition,
  bntTop,
  btnLeft,
  btnWidth,
  btnHeight,
  btnZindex,
}) {
  return (
    <Button
      position={btnPosition}
      borderRadius={btnBorderRadius}
      background={btnBackground}
      onClick={onClick}
      border={bntBorder}
      top={bntTop}
      left={btnLeft}
      width={btnWidth}
      height={btnHeight}
      zIndex={btnZindex}
    >
      <Primery
        fontSize={primeryFontSize}
        lineHeight={primeryLineHeight}
        color={primeryColor}
      >
        {btnText}
      </Primery>
    </Button>
  );
}
const Button = styled.div`
  box-sizing: border-box;

  position: ${(props) => props.position};
  z-index:${(props) => props.zIndex && props.zIndex};
  top: ${(props) => props.top ? props.top:''};
  left: ${(props) => props.left ? props.left : ''};
  width: ${(props) => props.width ? props.width : '48%'};;
  height: ${(props) => props.height ? props.height : '90%'};;
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
`;

const Primery = styled.div`
  position: absolute;
  left: 5%;
  right: 5%;
  top: 31.25%;
  bottom: 29.61%;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.color};
  text-align: center;
  text-transform: uppercase;
`;
