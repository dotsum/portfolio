import React from "react";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import Error404 from "../pages/errors/error404/Error";
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
import PageTransition from "./animation/pageTransition/PageTransition";

const Main = ({ theme }) => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <PageTransition>
          <Home theme={theme} />
        </PageTransition>
      ),
    },
    {
      path: "/home",
      element: (
        <PageTransition>
          <Home theme={theme} />
        </PageTransition>
      ),
    },
    {
      path: "/splash",
      element: (
        <PageTransition>
          <Splash theme={theme} />
        </PageTransition>
      ),
    },
    {
      path: "/experience",
      element: (
        <PageTransition>
          <Experience theme={theme} />
        </PageTransition>
      ),
    },
    {
      path: "/education",
      element: (
        <PageTransition>
          <Education theme={theme} />
        </PageTransition>
      ),
    },
    {
      path: "/opensource",
      element: (
        <PageTransition>
          <Opensource theme={theme} />
        </PageTransition>
      ),
    },
    {
      path: "/contact",
      element: (
        <PageTransition>
          <Contact theme={theme} />
        </PageTransition>
      ),
    },
    {
      path: "/projects",
      element: (
        <PageTransition>
          <Projects theme={theme} />
        </PageTransition>
      ),
    },
    {
      path: "*",
      element: (
        <PageTransition>
          <Error404 theme={theme} />
        </PageTransition>
      ),
    },
  ]);

  const location = useLocation();

  if (!routes) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {React.cloneElement(routes, { key: location.pathname })}
    </AnimatePresence>
  );
};

export default Main;
