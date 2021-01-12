import React from "react";
import Footer from "./Footer/Footer";
import Home from "./pages/Home/Home";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { HospitalProvider } from "../context/HospitalContext";
import SelectHospital from "../components/pages/SelectHospital/SelectHospital";
import { Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import InpatientProcedures from "./pages/InpatientProcedures/InpatientProcedure";
import OutpatientProcedures from "./pages/OutpatientProcedures/OutpaitentProcedures"
import ViewChargemaster from "./pages/ViewChargemaster/ViewChargemaster";
import CompareProcedure from "./pages/CompareProcedure/CompareProcedure";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1b5e20",
    },
    secondary: {
      main: "#ff7700",
    },
  },
});
function App() {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <ThemeProvider theme={theme}>
          <HospitalProvider>
            <Route exact path="/" component={Home} />
            <Route
              path="/selectState=:id/hospital=:name"
              component={ViewChargemaster}
            />
            <Route exact path="/selectState=:id" component={SelectHospital} />
            <Route
              exact
              path="/selectState=:id/compare"
              component={CompareProcedure}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/inpatient-procedures" component={InpatientProcedures} />
            <Route exact path="/outpatient-procedures" component={OutpatientProcedures} />
       
          </HospitalProvider>
        </ThemeProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
