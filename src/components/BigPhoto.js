import React from "react";
import styled from "styled-components";

export const BigPhoto = src => {
  return <Photo src={src} />;
};

const Photo = styled.img`
  vertical-align: middle;
  width: 200px;
  height: 250px;
  margin: 30px;
`;
