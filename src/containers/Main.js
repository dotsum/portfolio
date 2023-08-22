import React from "react";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";

export default function Main(props) {
  const element = useRoutes([
    {
      path: "/",
      element: <Home theme={props.theme} />
    },
    {
      path: "/home",
      element: <Home theme={props.theme} />
    },
    {
      path: "/splash",
      element: <Splash theme={props.theme} />
    },
    {
      path: "/experience",
      element: <Experience theme={props.theme} />
    },
    {
      path: "/education",
      element: <Education theme={props.theme} />
    },
    {
      path: "/opensource",
      element: <Opensource theme={props.theme} />
    },
    {
      path: "/contact",
      element: <Contact theme={props.theme} />
    },
    {
      path: "/projects",
      element: <Projects theme={props.theme} />
    },
    {
      path: "*",
      element: <Error404 theme={props.theme} />
    },
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}

