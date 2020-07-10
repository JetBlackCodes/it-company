import React, { Component } from "react";
import { Block, HeaderText, Text, Container, Item } from "../assets/styles";
import { TECHNOLOGIES } from "../assets/constants";
import { SmallPhoto } from "./SmallPhoto";

class TechnologiesBlock extends Component {
  render() {
    return (
      <Block>
        <HeaderText>Осваиваемые технологии</HeaderText>
        <Container
          flex-direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Item>
            <Text>Frontend</Text>
            {TECHNOLOGIES.map(el => {
              if (el.type === "front") {
                return <SmallPhoto src={el.src} />;
              }
            })}
          </Item>
          <Item>
            <Text>Backend and Databases</Text>
            {TECHNOLOGIES.map(el => {
              if (el.type === "back") {
                return <SmallPhoto src={el.src} />;
              }
            })}
          </Item>
          <Item>
            <Text>Tools</Text>
            {TECHNOLOGIES.map(el => {
              if (el.type === "tool") {
                return <SmallPhoto src={el.src} />;
              }
            })}
          </Item>
        </Container>
      </Block>
    );
  }
}

export default TechnologiesBlock;
