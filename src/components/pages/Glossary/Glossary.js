import React from "react";
import NavBarOrange from "../../layouts/NavBar/NavbarOrange";
import "./Glossary.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
function Glossary() {
  return (
    <div>
      <NavBarOrange />
      <div className="glossary-container">
        <div className="glossary-heading">
          <h3>About Inpatient Charge Data</h3>
        </div>
        <div className="glossary-content">
          <p>
            {" "}
            The Inpatient Utilization and Payment Public Use File (Inpatient
            PUF) provides information on inpatient discharges for Medicare
            fee-for-service beneficiaries. The Inpatient PUF includes
            information on utilization, payment (total payment and Medicare
            payment), and hospital-specific charges for the more than 3,000 U.S.
            hospitals that receive Medicare Inpatient Prospective Payment System
            (IPPS) payments. The PUF is organized by hospital and Medicare
            Severity Diagnosis Related Group (MS-DRG) and covers Fiscal Year
            (FY) 2018. MS-DRGs included in the PUF represent more than 7 million
            discharges or 76 percent of total Medicare IPPS discharges.
          </p>
          <p>
            Hospitals determine what they will charge for items and services
            provided to patients and these charges are the amount the hospital
            bills for an item or service. The Total Payment amount includes the
            MS-DRG amount, bill total per diem, beneficiary primary payer claim
            payment amount, beneficiary Part A coinsurance amount, beneficiary
            deductible amount, beneficiary blood deducible amount and DRG
            outlier amount.
          </p>
          <a href="https://www.cms.gov/research-statistics-data-systems/medicare-provider-utilization-and-payment-data/medicare-provider-utilization-and-payment-data-inpatient/inpatient-charge-data-fy-2018">
            <Button variant="outlined" color="secondary" id="glossary-button">
              View Inpatient Data Source
            </Button>
          </a>
          <Link to="/inpatient-procedures">
            <Button variant="contained" color="secondary" id="glossary-button">
              Compare Inpatient Charges
            </Button>
          </Link>
        </div>
        <div className="glossary-heading">
          <h3>About Outpatient Charge Data</h3>
        </div>
        <div className="glossary-content">
          <p>
            {" "}
            The Outpatient Hospital Utilization and Payment Public Use File
            (Outpatient Hospital PUF) presents information on comprehensive APC
            (C-APC) services provided to Medicare fee-for-service beneficiaries.
            The Outpatient Hospital PUF presents information on the number of
            beneficiaries, number of APC services, hospitals' average total
            estimated submitted charges, the average Medicare allowed charges
            (which includes Medicare regular provider payments and beneficiary
            cost-sharing payments), the average Medicare regular provider
            payments, the number of APC services with outlier payments, and the
            average Medicare outlier provider payments among those services for
            60 C-APC Groups paid under the Medicare Outpatient Prospective
            Payment System (OPPS) for calendar year (CY) 2018. The estimated
            average charges and the average Medicare payments are provided at
            the individual hospital level. The actual charges at an individual
            hospital for an individual service within these APC groups may
            differ.
          </p>
          <a href="https://www.cms.gov/research-statistics-data-systems/medicare-provider-utilization-and-payment-data/medicare-provider-utilization-and-payment-data-outpatient/outpatient-charge-data-cy-2018">
            <Button variant="outlined" color="secondary" id="glossary-button">
              View Outpatient Data Source
            </Button>
          </a>
          <Link to="/outpatient-procedures">
            <Button variant="contained" color="secondary" id="glossary-button">
              Compare Outpatient Charges
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Glossary;
