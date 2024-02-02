import React, { Component } from "react";
import { Route, Routes, Link, HashRouter } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./views/home";
import About from "./views/about";
import Projects from "./views/projects";
import Contact from "./views/contact";
import Footer from "./footer";
import Button from "./components/Button";

//the toggleThemeHandler method dispaches the Redux action ´TOGGLE_THEME´ to update the theme in redux store. It also toggles the CSS classes for themes.
class Main extends Component {
  constructor(props) {
    super(props);
    this.toggleThemeHandler = this.toggleThemeHandler.bind(this);
  }
  toggleThemeHandler = () => {
    const { darkMode } = this.props;
    this.props.dispatch({ type: "TOGGLE_THEME" });
    document.body.classList.toggle("dark-theme", !darkMode);
    document.body.classList.toggle("light-theme", darkMode);
  };

  render() {
    const { darkMode } = this.props;
    return (
      <div className={darkMode ? "dark-theme" : "light-theme"}>
        <HashRouter>
          <Button
            onClick={this.toggleThemeHandler}
            theme={
              "header " + (darkMode ? "dark-theme-btn" : "light-theme-btn")
            }
          >
            thedunca.
          </Button>

          <div>
            <ul className={"nav " + (darkMode ? "dark-theme" : "light-theme")}>
              <li>
                <Link to="/">H O M E</Link>
              </li>
              <li>
                <Link to="/about">A B O U T</Link>
              </li>
              <li>
                <Link to="/projects">P R O J E C T S</Link>
              </li>
              <li>
                <Link to="/contact">C O N T A C T</Link>
              </li>
            </ul>
            <div className="content">
              <></>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </HashRouter>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  darkMode: state.theme.darkMode,
});

export default connect(mapStateToProps)(Main);
