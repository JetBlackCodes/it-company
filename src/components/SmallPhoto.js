import React from "react";
import styled from "styled-components";

export const SmallPhoto = src => {
  return <Photo src={src} />;
};

const Photo = styled.img`
  vertical-align: middle;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 20px;
`;
