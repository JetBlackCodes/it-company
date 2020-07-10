import React from "react";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";

export const EditButton = (handleClick) => {
  return (
    <FabButton onClick={handleClick}>
      <Icon>edit_icon</Icon>
    </FabButton>
  );
};

const FabButton = styled(Fab)`
  position: absolute !important;
  right: 30px;
  top: 45px;
  background-color: ${props =>
    props.isLight ? " #fff" : "#1f2024"} !important;
`;
