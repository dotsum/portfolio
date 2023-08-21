import React, { useEffect, useState } from "react";
import "./Splash.css";
import { useNavigate } from "react-router-dom";
import LoaderLogo from "../../components/Loader/LoaderLogo.js";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: props.theme.splashBg }}>
        <LoaderLogo id="logo" theme={props.theme} />
      </div>
    </div>
  );
}

function Splash(props) {
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

  return redirect ? null : <AnimatedSplash theme={props.theme} />;
}

export default Splash;
