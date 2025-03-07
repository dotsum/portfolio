import React from "react";
import Footer from "../../components/footer/Footer";
import OpensourceCharts from "../../containers/opensourceCharts/OpensourceCharts";
import Organizations from "../../containers/organizations/Organizations";
import PullRequests from "../../containers/pullRequests/PullRequests";
import Issues from "../../containers/issues/Issues";
import TopButton from "../../components/topButton/TopButton";
import "./Opensource.css";

const Opensource = ({ theme, onToggle }) => (
  <div className="opensource-main">
    <Organizations theme={theme} />
    <OpensourceCharts theme={theme} />
    <PullRequests theme={theme} />
    <Issues theme={theme} />
    <Footer theme={theme} onToggle={onToggle} />
    <TopButton theme={theme} />
  </div>
);

export default Opensource;
