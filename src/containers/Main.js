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

const Main = ({ theme }) => {
  const routes = useRoutes([
    { path: "/", element: <Home theme={theme} /> },
    { path: "/home", element: <Home theme={theme} /> },
    { path: "/splash", element: <Splash theme={theme} /> },
    { path: "/experience", element: <Experience theme={theme} /> },
    { path: "/education", element: <Education theme={theme} /> },
    { path: "/opensource", element: <Opensource theme={theme} /> },
    { path: "/contact", element: <Contact theme={theme} /> },
    { path: "/projects", element: <Projects theme={theme} /> },
    { path: "*", element: <Error404 theme={theme} /> },
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
