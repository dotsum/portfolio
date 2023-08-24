import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { HashRouter } from "react-router-dom";
import Header from "./components/header/Header";

const App = () => (
  <ThemeProvider theme={chosenTheme}>
    <GlobalStyles />
    <HashRouter>
      <Header theme={chosenTheme} />
      <Main theme={chosenTheme} />
    </HashRouter>
  </ThemeProvider>
);

export default App;
