import React, { useState, createContext } from "react";

export const HospitalContext = createContext();

export const HospitalProvider = (props) => {
  const [stateName, setstateName] = useState("");
  return (
    <HospitalContext.Provider value={[stateName, setstateName]}>
      {props.children}
    </HospitalContext.Provider>
  );
};
