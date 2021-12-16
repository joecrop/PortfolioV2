import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PublicationsAccordion from "../../containers/publicationsAccordion/PublicationsAccordion.js";
import "./Publications.css";
import { publications } from "../../portfolio.js";
import { Fade } from "react-reveal";
import PublicationsImg from "./PublicationsImg";

function Publications(props) {
  const theme = props.theme;
  console.log(props.setTheme);
  return (
    <div className="experience-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-experience">
        <Fade bottom duration={2000} distance="40px">
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
              <PublicationsImg theme={theme} />
            </div>
            <div className="experience-heading-text-div">
              <h1
                className="experience-heading-text"
                style={{ color: theme.text }}
              >
                {publications.title}
              </h1>
              <h3
                className="experience-heading-sub-text"
                style={{ color: theme.text }}
              >
                {publications["subtitle"]}
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {publications["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <PublicationsAccordion
        sections={publications["sections"]}
        theme={theme}
      />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Publications;
