import styled from 'styled-components';

const StickToTopWhenScroll = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const TopbarContainer = styled(StickToTopWhenScroll)`
  width: 100%;
  height: 50px;
  background-color: white;
`;

export const TopbarWrapper = styled.div`
  height: 100%; /* which 50px height of parent that is ".topbar-container"*/
  padding: 0px 20px;
  display: flex;
  align-items: center; /*center vertically*/
  justify-content: space-between; /*make some space between content*/
`;

export const Logo = styled.span`
  font-weight: bold;
  font-style: 30px;
  color: darkblue;
  cursor: pointer;
`;

export const TopLeft = styled.div``;

export const TopRight = styled.div`
  display: flex;
  align-items: center;
`;

export const TopbarIconsContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color: #555;
`;

/* right: 0px; */
export const TopIconBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -1px;
  background-color: red;
  color: white;

  width: 15px;
  height: 15px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

export const TopBarAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
