import React, { Component } from "react";
import {
  Block,
  HeaderText,
  Text,
  PhotoContainer,
  Container
} from "../assets/styles";
import { LECTORS } from "../assets/constants";
import { BigPhoto } from "./BigPhoto";

class LectorsBlock extends Component {
  render() {
    return (
      <Block isLight style={{ height: "auto" }}>
        <HeaderText isLight>Преподавательский состав</HeaderText>
        <Container>
          {LECTORS.map(el => {
            return (
              <PhotoContainer>
                <BigPhoto src="/images/lector.jpg" />
                <Text isLight>{el.text}</Text>
              </PhotoContainer>
            );
          })}
        </Container>
      </Block>
    );
  }
}

export default LectorsBlock;
