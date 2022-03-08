import Link from "next/link";
import styled, {css} from "styled-components";

const Item = styled.a`
  position: relative;
  padding: 1.37rem 0;
  // padding: ${props => props.theme.spacing(3)} 0;
  font-weight: bold;
  font-size: ${props => props.theme.typography.body2.fontSize};
  text-align: right;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  //color: #2DA8D8FF;
  color: ${props => props.theme.palette.primary.main};
  margin: 0 0.813rem 0 0;
  &:hover {
    color: ${props => props.theme.palette.header.navLink.hover};
  }
  &:hover:after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 0.125rem;
    bottom: 0.063rem;
    left: 0;
    border-radius: 0.063rem 0.063rem 0 0;
    background-color: ${props => props.theme.palette.header.navLink.hover};
  }
  @media (min-width: 870px) {
    ${({active}) => active && css`
      color: ${props => props.theme.palette.header.navLink.currentPage};
      &:after {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 0.125rem;
        bottom: 0.063rem;
        left: 0;
        border-radius: 0.063rem 0.063rem 0 0;
        background-color: ${props => props.theme.palette.header.navLink.currentPage};
      }
      &:hover:after {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 0.125rem;
        bottom: 0.063rem;
        left: 0;
        border-radius: 0.063rem 0.063rem 0 0;
        background-color: ${props => props.theme.palette.header.navLink.hover};
      }
    `
    }
  }
`;

export const NavLink = ({name, active, onClick, ...props}) => (
    <Link {...props} passHref>
        <Item onClick={onClick} active={active}>{name}</Item>
    </Link>
)