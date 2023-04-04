import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
const BuyButton = ({
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
  to,
}) => {
  return (
    <Button
      to={to}
      position={btnPosition}
      borderradius={btnBorderRadius}
      background={btnBackground}
      onClick={onClick}
      border={bntBorder}
      top={bntTop}
      left={btnLeft}
      width={btnWidth}
      height={btnHeight}
      zindex={btnZindex}
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
};

export default BuyButton;
const Button = styled(Link)`
  box-sizing: border-box;

  position: ${(props) => props.position};
  z-index: ${(props) => props.zindex && props.zindex};
  top: ${(props) => (props.top ? props.top : "")};
  left: ${(props) => (props.left ? props.left : "")};
  width: ${(props) => (props.width ? props.width : "48%")};
  height: ${(props) => (props.height ? props.height : "90%")};
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderradius};
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
  @media (max-width: 1100px) {
    font-size: 13px;
    line-height: 17px;
    left: -1px;
    width: 100%;
  }
  @media (max-width: 930px) {
    font-size: 11px;
    line-height: 13px;
    width: 100%;
    left: 1%;
  }

  @media (max-width: 720px) {
    font-size: 9px;
    line-height: 8px;
    width: 100%;
    left: 1%;
    right: 8%;
    top: 35.25%;
  }

  @media (max-width: 440px) {
    font-size: 6px;
    line-height: 9px;
    width: 100%;
  }
`;
