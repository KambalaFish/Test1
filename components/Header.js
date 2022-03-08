import {useRouter} from "next/router";
import {useMemo, useState} from "react";
import {NavLink} from "./NavLink";
import styled from "styled-components";
import Image from "next/image";

const menu = [
    {name: 'Main', href: '/'},
    {name: 'Our services', href: '/services'},
    {name: 'Privacy policy', href: '/privacyPolicy'},
    {name: 'Contacts', href: '/contacts'},
]

const Container = styled.header`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.theme.palette.header.container.backgroundColor};
  //filter: drop-shadow(0px 0px 40px rgba(238, 238, 235, 0.5));
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.75rem;
  margin: 0 7% 0 10%;
`;

const Menu = styled.div`
  display: flex;
`

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
`
const HeaderName = styled.h1`
  margin: 0 0 0 1.25rem;
  color:  ${props => props.theme.palette.primary.main};
  font-size: ${props => props.theme.typography.h1.fontSize};
  line-height: ${props => props.theme.typography.h1.lineHeight};
`

export const Header = () => {
    const router = useRouter();
    const [isOpen, setOpen] = useState(false);
    const items = useMemo(
        () => {
            return menu.map(item => {
                // console.log(item.href);
                // console.log(router.route);
                return <NavLink key={item.name} {...item} active={router.route.endsWith(item.href)}
                                onClick={() => setOpen(!isOpen)}/>;
            });
        },
        [isOpen, router]
    );


    return (
        <>
            <Container>
                <Line>
                    <HeaderLogo>
                        <Image
                            // src={'/sportcar.png'}
                            src={'/health.png'}
                            alt={'icon'}
                            width={"75%"}
                            height={"40%"}
                            // width={'80px'}
                            // height={'100%'}
                        />
                        <HeaderName>DoctorBook!</HeaderName>
                    </HeaderLogo>
                    <Menu>
                        {items}
                    </Menu>
                </Line>
            </Container>
            {/*<Gap/>*/}
        </>
    );

}