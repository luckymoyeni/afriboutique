import styled from 'styled-components'

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;
  background-color: white;
  z-index: 1;
`;
export const ProductImg = styled.img`
  max-height: 200px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 15px;
`;

export const ProductButton = styled.button`
  background-color: #f0c14b;
  border: 1px;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  width: 60%;
  height: 30%;
  border-radius: 10px;
`;

export const ProductInfo = styled.div`
  height: 100px;
  margin-bottom: 15px;
`;

export const ProdctPrice = styled.div`
  margin-top: 5px;
`;
export const ProductRating = styled.div`
  display: flex;
`;
