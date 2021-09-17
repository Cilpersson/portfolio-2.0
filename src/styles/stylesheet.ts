import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface IProps {
  size?: string;
  margin?: string;
  boxShadow?: string;
}

export const Background = styled.section`
  background: #000;
  height: 100vh;
  width: 100vw;
  padding: 32px;
`;

export const Screen = styled.div`
  background: white;
  border-radius: 12px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  background: #d6d1cd;
  padding: 16px;
`;

const Dot = styled.div`
  height: ${(props: IProps) => props.size || '24px'};
  width: ${(props: IProps) => props.size || '24px'};
  margin: ${(props: IProps) => props.margin || '0 8px'};
  border-radius: 50%;
  box-shadow: ${(props: IProps) => props.boxShadow || '2px 2px'};
`;

export const RedDot = styled(Dot)`
  background-color: #f55353;
  color: #aa3939;
`;

export const GreenDot = styled(Dot)`
  background-color: #6bf553;
  color: #3c8d2e;
`;

export const YellowDot = styled(Dot)`
  background-color: #f5df53;
  color: #a49537;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;
export const NavItem = styled.li`
  list-style: none;
  margin: 0 16px;
`;
export const NavItems = styled.ul`
  display: flex;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #797979;
  transition: all 0.5s;
  font-size: 18px;
  font-weight: 400;

  &.active,
  &:hover {
    color: #434343;
    text-decoration: underline;
  }
`;

const Page = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

/* SOCIAL */
export const SocialPage = styled(Page)`
  justify-content: center;
  background: #cda4ec;
  background: -webkit-linear-gradient(to right, #a4c0f8, #cda4ec);
  background: linear-gradient(to right, #a4c0f8, #cda4ec);
`;

export const SocialMediaButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  &:hover > *:not(:hover) {
    opacity: 0.3;
  }
  &:hover > *:hover {
    transform: scale(1.05);
  }
`;

export const A = styled.a`
  text-decoration: none;
  color: #fff;
  width: fit-content;
  transition: all 0.5s;
  margin: 0 8px;
`;

/* TECHNICAL */
export const TechnicalPage = styled(Page)`
  justify-content: center;
  align-items: center;
  background-color: #2f4353;
  background-image: linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%);
`;

export const Terminal = styled.div`
  background: black;
  height: 50%;
  width: 75%;
  max-width: 700px;
`;
