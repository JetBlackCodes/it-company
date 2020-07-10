import styled from "styled-components";

export const Block = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  margin: 0;
  background-color: ${props => (props.isLight ? " #fff" : "#1f2024")};
  text-align: center;
  position: relative !important;
`;
// background-color: ${props => (props.isLight ? " #FCF0E8" : "#C4A38F")};
export const HeaderText = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 40px;
  margin: 0;
  padding-top: 4%;
  padding-bottom: 1%;
  color: ${props => (props.isLight ? "#000" : "#fff")};
`;

export const SmallHeaderText = styled(HeaderText)`
  font-size: 16px;
`;

export const Text = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  margin-top: 8px;
  margin-bottom: 8px;
  color: ${props => (props.isLight ? "#000" : "#fff")};
`;

export const Container = styled.div`
  margin: 0;
  padding: 15px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  margin: 5px;
  width: 350px;
`;

export const PhotoContainer = styled.div`
  margin: 10px;
  margin-bottom: 30px;
  padding: 5px;
  justify-content: center;
  width: 250px;
  height: 400px;
`;
