import React from "react";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

const Home = ({ theme }) => (
  <div>
    <Greeting theme={theme} />
    <Skills theme={theme} />
    <Footer theme={theme} />
    <TopButton theme={theme} />
  </div>
);

export default Home;
