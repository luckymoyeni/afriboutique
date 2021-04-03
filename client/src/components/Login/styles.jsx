import styled from 'styled-components'

export const LoginWrapper = styled.div`
    background-color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LoginLogo = styled.img`
    width: 100px;
    object-fit: contain;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: auto;
    margin-left: auto;
`;

export const LoginContainer = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid lightgray;
`;

export const LoginContainerh1 = styled.h1`
    font-weight: 500;
    margin-bottom: 20px;
`;

export const LoginContainerh5 = styled.h5`
    margin-bottom: 5px;

`;

export const LoginContainerInput = styled.div`
    height: 30px;
    margin-bottom: 10px;
    background-color: white;
    width: 98%;
`;

export const LoginContainerP = styled.div`
    margin-top: 15px;
    font-size: 12px;
`;

export const LoginSignInButton = styled.button`
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
`;

export const LoginRegisterButton = styled.button`
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: teal turquoise white;
`;