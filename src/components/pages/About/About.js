import React from "react";
import NavBarOrange from "../../NavBar/NavbarOrange";
import "./About.css";
import Button from "@material-ui/core/Button";
import AppIcon from "../../../img/app_icon.png";
import FdroidIcon from "../../../img/fdroid.png";
function About() {
  return (
    <div>
      <NavBarOrange />
      <div className="about-section">
        <div className="our-mission">
          <h3>About Us</h3>
          <p>
            LibreHealth is collaborative community for free & open source
            software projects in Health IT, and is a member project of Software
            Freedom Conservancy.
          </p>
          <p>
            LibreHealth is driven by real needs of patients and last-mile
            clinicians who want to improve health and health service delivery
          </p>
          <h3>Our Misson</h3>
          <p>
            The Goal of this LibreHealth Cost Of Care Explorer Project is to
            provide patient friendly costs of care, to help patients get better
            cost estimates for medical procedures of US Hospitals. User can view
            the chargemaster, search for a particular procedure in multiple
            hospitals chargemasters & can sort data by Category or sort by price
            in ascending or descending order. This Web App fetches hospitals
            chargemaster from GitLab Repository.
          </p>

          <h3>Cost Of Care Mobile App</h3>
          <p>Our Mobile App is available on Fdroid</p>

          <div>
            <h3>LibreHealth Cost Of Care Explorer</h3>
            <a href="https://f-droid.org/en/packages/io.librehealth.toolkit.cost_of_care/">
              <img src={AppIcon} alt="logo" />
            </a>
            <h4>Compare Costs Of Medical Procedures Of US Hospitals.</h4>
            <p>
              <a href="https://f-droid.org/en/packages/io.librehealth.toolkit.cost_of_care/">
                <img src={FdroidIcon} alt="App Link" />
              </a>
            </p>
          </div>
        </div>
        <div className="contact-us">
          <h3>PROJECT SOURCE CODE</h3>
          <a href="https://gitlab.com/librehealth/toolkit/cost-of-care">
            <Button variant="outlined" color="secondary">
              Visit Project
            </Button>
          </a>
          <h3>Communication</h3>
          <p>
            The LibreHealth Cost Of Care Explorer chat channel is on Librehealth
            Forums
          </p>
          <a href="https://forums.librehealth.io/">
            <Button variant="outlined" color="secondary">
              Visit LibreHealth Forums
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
