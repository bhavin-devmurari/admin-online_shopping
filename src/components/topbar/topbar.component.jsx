import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import {
  TopbarContainer,
  TopbarWrapper,
  TopLeft,
  Logo,
  TopRight,
  TopbarIconsContainer,
  TopIconBadge,
  TopBarAvatar,
} from './topbar.styles';
// import './topbar.styles.css';

const Topbar = () => {
  return (
    <TopbarContainer>
      <TopbarWrapper>
        <TopLeft>
          <Logo>Admin</Logo>
        </TopLeft>
        <TopRight>
          <TopbarIconsContainer>
            <NotificationsNone />
            <TopIconBadge>2</TopIconBadge>
          </TopbarIconsContainer>
          <TopbarIconsContainer>
            <Language />
            <TopIconBadge>2</TopIconBadge>
          </TopbarIconsContainer>
          <TopbarIconsContainer>
            <Settings />
          </TopbarIconsContainer>
          <TopBarAvatar
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="avatar"
          />
        </TopRight>
      </TopbarWrapper>
    </TopbarContainer>
  );
};

export default Topbar;
