import styled from 'styled-components'

export const HeaderMain = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const HeaderLogo = styled.img`
  width: 100px;
  object-fit: contain;

  margin: 0 20px;
  margin-bottom: 18px;
`;

export const HeaderSearch = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
  width: 100%;
  color: white;
`;

export const HeaderSearchInput = styled.div`
  height: 12px;
  padding: 10px;
  border: none;
  width: 100 %;
`;

export const HeaderSearchIcon = styled.div`
  padding: 5px;
  height: 22px;
  background-color: #cd9042;
`;

export const HeaderOptionLineOne = styled.div`
  font-size: 10px;
`;

export const HeaderOptionLineTwo = styled.div`
  font-size: 13px;
  font-weight: 800;
`;

export const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
`;

export const HeaderNav = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const HeaderOptionBasket = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

export const HeaderBasketCount = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;
