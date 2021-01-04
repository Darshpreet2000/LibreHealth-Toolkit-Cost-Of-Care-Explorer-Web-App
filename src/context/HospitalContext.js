import React, { useState, createContext } from "react";

export const HospitalContext = createContext();

export const HospitalProvider = (props) => {
  const [hospitalNames, setHospitalNames] = useState([]);
  return (
    <HospitalContext.Provider value={[hospitalNames, setHospitalNames]}>
      {props.children}
    </HospitalContext.Provider>
  );
};
