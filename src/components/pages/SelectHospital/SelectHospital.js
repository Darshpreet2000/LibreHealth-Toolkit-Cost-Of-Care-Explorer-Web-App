import React, { useEffect } from "react";
import "./SelectHospital.css";
import NavBarOrange from "../../NavBar/NavbarOrange";
import HospitalList from "./SelectHospitalList/HospitalList";
function SelectHospital(match) {
  const stateName = match.match.params.id;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="selectHospital">
      <NavBarOrange />
      <div className="hospitalContent">
        <HospitalList stateName={stateName} />
      </div>
    </div>
  );
}

export default SelectHospital;
