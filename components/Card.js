import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 5% 0;
  border-radius: 3rem;
  min-height: 97vh;
  //box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2),
  //0px 12px 17px 2px rgba(0, 0, 0, 0.14),
  //0px 5px 22px 4px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 7px 8px -4px ${props => props.theme.palette.card.boxShadow1},
  0px 12px 17px 2px ${props => props.theme.palette.card.boxShadow2},
  0px 5px 22px 4px ${props => props.theme.palette.card.boxShadow3};
`

export const Card = styled.a`
  //flex-grow: 1;
  //flex-basis: 31%;
  //flex-basis: 25%;
  display: flex;
  flex-direction: column;
  flex-basis: 22%;
  //justify-content: flex-start;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  //height: 300px;
  //height: 233.45px;
  height: 45vh;
  border: 1px solid black;
  border-radius: 5%;
  padding: 1%;
  //margin: 0 2% 2% 0;
  margin: 0 7% 5% 10%;
  //margin: 0 3% 3% 0;

  //box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2),
  //0px 12px 17px 2px rgba(0, 0, 0, 0.14),
  //0px 5px 22px 4px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 7px 8px -4px ${props => props.theme.palette.card.boxShadow1},
  0px 12px 17px 2px ${props => props.theme.palette.card.boxShadow2},
  0px 5px 22px 4px ${props => props.theme.palette.card.boxShadow3};

  :nth-child(3n-1) {
    margin: 0 7% 5% 0;
  }

  :nth-child(3n) {
    margin: 0 0 5% 0;
  }

  :nth-last-child(-n+3) {
    margin-bottom: 0;
  }

  :hover {
    cursor: pointer;
    //background-color: beige;
    //background-color: ${props => props.theme.card.card.onHover.backgroundColor};
    transform: scale(1.05);
    transition: scale 500ms;

    //box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    //0px 24px 38px 3px rgba(0, 0, 0, 0.14),
    //0px 9px 46px 8px rgba(0, 0, 0, 0.12);
    box-shadow: 0 11px 15px -7px ${props => props.theme.palette.card.boxShadow1},
    0px 24px 38px 3px ${props => props.theme.palette.card.boxShadow2},
    0px 9px 46px 8px ${props => props.theme.palette.card.boxShadow3};
  }

  :hover span {
    text-shadow: none;
    font-weight: bold;
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  //height: 75%;
  height: 80%;
  position: relative;
  //border-radius: 15px;
  img {
    border-radius: 5% !important;
    //width: 640px !important;
    //height: 360px !important;
    //width: 100% !important;
    //height: 100% !important;
  }
`

export const CardDescription = styled.span`
  //font-weight: bold;
  font-weight: normal;
  //font-size: 14px;
  //line-height: 18px;
  font-size: ${props => props.theme.typography.h3.fontSize};
  line-height: ${props => props.theme.typography.h3.lineHeight};
  margin: 0.875rem 0 0 0;
  //text-shadow: 2px 3px 3px gray;
  //text-shadow: 1px -1px 2.5px gray;
  text-align: center;
  word-spacing: ${props => props.theme.spacing(0.5)};
  letter-spacing: ${props => props.theme.spacing(0.08)};
  text-transform: uppercase;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const Price = styled.span`
  font-weight: bold;
  //font-size: 14px;
  //line-height: 18px;
  font-size: ${props => props.theme.typography.subtitle2.fontSize};
  line-height: ${props => props.theme.typography.subtitle2.lineHeight};
  text-align: center;
  background-color: ${props => props.theme.palette.card.price.backgroundColor};
  border-radius: 10px;
  //width: fit-content;
  //width: content-box 125%;
  padding: 1px 10px;
  margin: 8px 0 0 0;
  width: max-content;
  
  :after{
    content: "$";
  }
`