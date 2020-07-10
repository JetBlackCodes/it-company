import React, { Component } from "react";
import { Block, HeaderText, Text, SmallHeaderText } from "../assets/styles";

class Contacts extends Component {
  render() {
    return (
      <Block>
        <HeaderText>Контакты</HeaderText>
        <SmallHeaderText> Расположение кафедры:</SmallHeaderText>
        <Text>
          г. Калуга, ул. Королёва, д. 39, корпус № 6, 3-й этаж, ауд. 303
        </Text>
        <SmallHeaderText>Контактная информация:</SmallHeaderText>
        <Text>Почтовый адрес 248000, г. Калуга, ул. Баженова, 2</Text>
        <Text>Телефон (4842) 74-05-95</Text>
        <Text>E-mail: eic5-kb@mail.ru</Text>
      </Block>
    );
  }
}

export default Contacts;
