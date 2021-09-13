import {
  RedDot,
  YellowDot,
  GreenDot,
  NavBar,
  FlexRow,
  NavItem,
  NavItems,
  Link,
} from '../styles/stylesheet';

export const Navbar = () => {
  return (
    <>
      <NavBar>
        <FlexRow>
          <RedDot />
          <YellowDot />
          <GreenDot />
        </FlexRow>
        <FlexRow>
          <NavItems>
            <NavItem>
              <Link exact activeClassName="active" to="/">
                home
              </Link>
            </NavItem>
            <NavItem>
              <Link exact activeClassName="active" to="/personal">
                $ whoami
              </Link>
            </NavItem>
            <NavItem>
              <Link exact activeClassName="active" to="/tech">
                technical
              </Link>
            </NavItem>
            <NavItem>
              <Link exact activeClassName="active" to="/social">
                social
              </Link>
            </NavItem>
          </NavItems>
        </FlexRow>
      </NavBar>
    </>
  );
};
