import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Header from "./components/Header";
import TechnologiesBlock from "./components/TechnologiesBlock";
import DisciplinesBlock from "./components/DisciplinesBlock";
import LectorsBlock from "./components/LectorsBlock";
import Contacts from "./components/Contacts";
import '../public/favicon.ico'

class App extends Component{
    render(){
        return(
            <>
                <p>Hello</p>
                <Header />
                <DisciplinesBlock />
                <TechnologiesBlock />
                <LectorsBlock />
                <Contacts />
            </>
        );
    }
}

export default hot(module)(App);
