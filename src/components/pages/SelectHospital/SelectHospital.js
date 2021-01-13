import React, { useEffect } from "react";
import "./SelectHospital.css";
import NavBarOrange from "../../layouts/NavBar/NavbarOrange";
import HospitalList from "./SelectHospitalList/HospitalList";
function SelectHospital(match) {
  const stateName = match.match.params.id;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="select-hospital">
      <NavBarOrange />
      <div className="hospital-content">
        <HospitalList stateName={stateName} />
      </div>
    </div>
  );
}

export default SelectHospital;
