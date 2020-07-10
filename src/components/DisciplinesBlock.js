import React, { Component } from "react";
import { Block, HeaderText, Text } from "../assets/styles";
import { DISCIPLINES } from "../assets/constants";

class DisciplinesBlock extends Component {
  render() {
    return (
      <Block isLight>
        <HeaderText isLight>Изучаемые дисциплины</HeaderText>
        <ul style={{ "list-style-type": "none" }}>
          {DISCIPLINES.map(el => {
            return (
              <li>
                <Text isLight>{el}</Text>
              </li>
            );
          })}
        </ul>
      </Block>
    );
  }
}

export default DisciplinesBlock;
