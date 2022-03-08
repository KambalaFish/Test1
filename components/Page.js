import styled from "styled-components";

const Container = styled.section`
  //display: flex;
  //flex-direction: column;
  margin: 3.75rem 7% 0 10%;
  padding: 3vh 0 10vh 0;
  min-height: 93.7vh;
  //border: 2px solid red;
`

const MainContainer = styled.div`
  background-color: ${props => props.theme.palette.page.backgroundColor};
  color: ${props => props.theme.palette.page.fontColor};
`

const Header = styled.h1`
  white-space: pre-line;
  font-weight: ${props => props.theme.typography.h1.fontWeight};
  font-size: ${props => props.theme.typography.h1.fontSize};
  line-height: ${props => props.theme.typography.h1.lineHeight};
  margin: 0 0 2.5rem 0;
`

const PageDescription = styled.h2`
  display: inline-block;
  font-weight: ${props => props.theme.typography.h2.fontWeight};
  font-size: ${props => props.theme.typography.h2.fontSize};
  line-height: ${props => props.theme.typography.h2.lineHeight};
  margin: 0 0 1.563rem 0;
`;

export const Page = ({label, description, children}) => {
    return (
        <MainContainer>
            <Container>
                {label && <Header>{label}</Header>}
                {description && <PageDescription>{description}</PageDescription>}
                {children}
            </Container>
        </MainContainer>
    );
}