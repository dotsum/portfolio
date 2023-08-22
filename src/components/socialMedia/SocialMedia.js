import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

const SocialMedia = ({ centred }) => (
  <div
    className="social-media-div"
    style={centred ? { justifyContent: "center" } : {}}
  >
    {socialMediaLinks.map((media, index) => (
      <a
        key={`media_${index}`}
        href={media.link}
        className="icon-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="media-icon"
          src={`${process.env.PUBLIC_URL}/icons/${media.icon}`}
          alt={media.name}
        />
      </a>
    ))}
  </div>
);

export default SocialMedia;
