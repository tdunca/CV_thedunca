import React from "react";
import { connect } from "react-redux";

const Footer = ({ darkMode }) => {
  return (
    <div className={"footer " + (darkMode ? "dark-theme" : "light-theme")}>
      <a href="https://www.svt.se/">dunca.theresa@gmail.com</a>
      <a href="https://www.linkedin.com/in/theresa-dunca-4337a02a0/">
        Linkedin
      </a>
      <a href="https://github.com/tdunca">Github</a>
    </div>
  );
};
const mapStateToProps = (state) => ({
  darkMode: state.theme.darkMode,
});

export default connect(mapStateToProps)(Footer);
