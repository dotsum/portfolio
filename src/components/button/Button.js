import React from "react";
import "./Button.css";

const handleMouseEvents = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

const Button = ({ text, className, href, newTab, theme, style }) => {
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab && "_blank"}
        style={{
          color: theme.body,
          backgroundColor: theme.text,
          border: `solid 1px ${theme.text}`,
          ...style
        }}
        onMouseEnter={(event) => handleMouseEvents(event, theme.text, theme.body)}
        onMouseOut={(event) => handleMouseEvents(event, theme.body, theme.text)}
      >
        {text}
      </a>
    </div>
  );
};

export default Button;
