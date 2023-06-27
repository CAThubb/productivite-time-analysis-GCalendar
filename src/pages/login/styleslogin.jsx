import styled from "styled-components"

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F1E8E8;
  
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 80px;
  padding: 2rem;
  border: 1px solid #DADCE0;
  border-radius: 10px;
  margin: 0.5rem;
  background-color: white;
`;

export const FormContainer = styled.span`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 0.8rem;
  font-family: 'Roboto Mono', monospace;
`;

export const Logo = styled.img`
  width: 35px;
  height: 35px;
`;  

export const Globe = styled.img`
  width: 220px;
  height: 220px;
`;

export const LButton = styled.button`
  width: 100%;
  height: 40%;
  cursor: pointer;
  font-family: 'Roboto Mono', monospace;
  background-color: white;
  border: 2px solid #05D2FF;
  display: inline-block;
  border-radius: 5px;
  transition-duration: 0.4s;

  :hover {
    background-color: #05D2FF;
    color: white;
  }
`;