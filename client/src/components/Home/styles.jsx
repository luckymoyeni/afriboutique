import styled from 'styled-components'

export const HomWrapper = styled.div`
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
`;

export const HomeRow = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    z-index: 1;
    margin-left: 5px;
    margin-right: 5px;
`;
export const HomeImage = styled.img`
    width: 100%;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1),rgba(0,0,0,0));
    z-index: -1;
    margin-bottom: -150px;
`;

