import React from "react";
import PropTypes from "prop-types";
import "../styles/banner.scss";

function Banner({ image, altText, text }) {
  return (
    <div className="banner">
      <img src={image} alt={altText} className="banner-image" />
      <div className="banner-overlay"></div>
      {text && <h1 className="banner-text">{text}</h1>}
    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default Banner;