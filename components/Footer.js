import styled from "styled-components";
import Link from "next/link";
import {Visa, VisaWiki, Mastercard} from "./logos";

const Container = styled.footer`
  background: ${props => props.theme.palette.footer.container.backgroundColor};
  color: ${props => props.theme.palette.footer.container.fontColor};
  height: 40vh;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0 7% 2.5% 7%;
  //border: 2px solid blue;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const InfoLabel = styled.h1`
  text-transform: uppercase;
  font-size: ${props => props.theme.typography.h2.fontSize};
  line-height: ${props => props.theme.typography.h2.lineHeight};
  margin: 0 0 1.125rem 0;
  color: ${props => props.theme.palette.footer.infoLabel};
`

const Column = styled.div`
  display: flex;
  //height: 50%;
  height: 20vh;
  //flex-grow: 1;
  flex-basis: 33%;
  //border: 2px solid #ff0000;
  margin: 0 0.625rem 0 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  :last-child {
    margin: 0;
  }
`;

const Column1 = styled.div`
  display: flex;
  //height: 50%;
  height: 6vh;
  //flex-grow: 1;
  flex-basis: 33%;
  //border: 2px solid #ff0000;
  margin: 0 10px 0 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  :last-child {
    margin: 0;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  //height: 50%;
  height: fit-content;
  margin: 0;
  //border: 2px solid yellow;
`

const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  //height: 50%;
  height: fit-content;
  margin: 0;
  //border: 2px solid yellow;
`

const Text = styled.a`
  font-size: ${props => props.theme.typography.h3.fontSize};
  line-height: ${props => props.theme.typography.h3.lineHeight};
  color: ${props => props.theme.palette.text.primary};
  font-weight: bold;
`

const LinkItem = styled(Text)`
  :hover {
    color: ${props => props.theme.palette.footer.linkItem};
  }
`

const ColumnLogo = styled.div`
  display: flex;
  height: 8vh;
  flex-grow: 1;
  //border: 2px solid #ff0000;
  margin: 0 5px 0 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  :last-child {
    margin: 0;
    flex-grow: 2;
    //border: 2px solid green;
    justify-content: center;
  }
`;

export const Footer = () => (
    <Container>
        <Row>
            <Column>
                <InfoLabel>Information</InfoLabel>
                <Link passHref href={'/contacts'}><LinkItem>Contacts</LinkItem></Link>
                <Link passHref href={'/termsOfUse'}><LinkItem>Terms of use</LinkItem></Link>
                <Link passHref href={'/privacyPolicy'}><LinkItem>Privacy policy</LinkItem></Link>
            </Column>
            <Column>
                <InfoLabel>Address</InfoLabel>
                <Text>Ulitsa Nemityh Gusei 33, Zazhopinsk</Text>
            </Column>
            <Column>
                <InfoLabel>Working hours</InfoLabel>
                <Text>Mon - Fri from 9:00 till 18:00</Text>
            </Column>
        </Row>
        <Row1>
            <Column1>
                <Row>
                    <ColumnLogo>
                        <VisaWiki/>
                    </ColumnLogo>
                    <ColumnLogo>
                        <Mastercard/>
                    </ColumnLogo>
                </Row>
            </Column1>
        </Row1>
    </Container>
)

// export const Footer = () => (
//     <Container>
//         <Column>
//             <InfoLabel>информация</InfoLabel>
//             <Link passHref href={'/'}><LinkItem>Контакты</LinkItem></Link>
//             <Link passHref href={'/'}><LinkItem>Пользовательское соглашение</LinkItem></Link>
//             <Link passHref href={'/a'}><LinkItem>Политика конфиденциальности</LinkItem></Link>
//         </Column>
//         <Column>
//             <InfoLabel>адрес</InfoLabel>
//             Белгородская область. Село Таврово. Проспект Героев, 20.
//         </Column>
//         <Column>
//             <InfoLabel>Режим работы</InfoLabel>
//             Пн - Пт с 9:00 до 18:00
//         </Column>
//         <Column>
//             <Row>
//                 <ColumnLogo>
//                     <VisaWiki/>
//                 </ColumnLogo>
//                 <ColumnLogo>
//                     <Mastercard/>
//                 </ColumnLogo>
//             </Row>
//         </Column>
//     </Container>
// )