import React from "react";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { HospitalProvider } from "../context/HospitalContext";
import SelectHospital from "../components/SelectHospital/SelectHospital";
import { Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Glossary from "./pages/Glossary/Glossary";
import CompareHospitals from "./pages/CompareHospitals/CompareHospitals";
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
            <Route path="/selectState=:id" component={SelectHospital} />
            <Route exact path="/about" component={About} />
            <Route exact path="/glossary" component={Glossary} />
            <Route
              exact
              path="/compare-hospitals"
              component={CompareHospitals}
            />
          </HospitalProvider>
        </ThemeProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
