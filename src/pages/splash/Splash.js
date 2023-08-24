import React, { useEffect, useState } from "react";
import "./Splash.css";
import { useNavigate } from "react-router-dom";
import LoaderLogo from "../../components/Loader/LoaderLogo.js";

const AnimatedSplash = ({ theme }) => (
  <div className="logo_wrapper">
    <div className="screen" style={{ backgroundColor: theme.splashBg }}>
      <LoaderLogo id="logo" theme={theme} />
    </div>
  </div>
);

const Splash = ({ theme }) => {
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      setRedirect(true);
    }, 5500);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  useEffect(() => {
    if (redirect) {
      navigate("/home");
    }
  }, [redirect, navigate]);

  return redirect ? null : <AnimatedSplash theme={theme} />;
};

export default Splash;
