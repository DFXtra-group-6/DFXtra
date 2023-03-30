import React from "react";
import tick from "./images/tick.svg";
import cross from "./images/cross.svg";
<<<<<<< HEAD
import "./dueDiligence.css";
import creditImg from "../../assets/credit.png";
import disclosureImg from "../../assets/disclosure.png";
import educationImg from "../../assets/education.png";
import identityImg from "../../assets/identity.png";
import rightToWorkImg from "../../assets/rightToWork.png";
=======
import "./certifications.css";
>>>>>>> 3f4295d93e6c515fd893d9c3cd5f17d2f7272017

const DueDiligence = ({ data }) => {
  const { disclosure, identity, credit, rightToWork, education } =
    data.dueDiligenceChecks;

  function image(value) {
    return value ? tick : cross;
  }

  return (
    <div className="border border-rounded bg-white mb-3">
<<<<<<< HEAD
      <h4>Due Diligence Checks</h4>
      {/* Just provides true/false at the moment */}
      <div className="row due-row">
        <img src={disclosureImg} className="col col-img"></img>
        <p className="col">Disclosure</p>
        <img src={image(disclosure)} className="icon col" />
      </div>

      <div className="row due-row">
        <img src={identityImg} className="col col-img"></img>
        <p className="col">Identity</p>
        <img src={image(identity)} className="icon col" />
      </div>

      <div className="row due-row">
        <img src={creditImg} className="col col-img"></img>
        <p className="col">Credit</p>
        <img src={image(credit)} className="icon col" />
      </div>
      <div className="row due-row">
        <img src={rightToWorkImg} className="col col-img"></img>
        <p className="col">Right to Work</p>
        <img src={image(rightToWork)} className="icon col" />
      </div>
      <div className="row due-row">
        <img src={educationImg} className="col col-img"></img>
        <p className="col">Education</p>
        <img src={image(education)} className="icon col" />
=======
      <h4>Due Diligence</h4>
      {/* Just provides true/false at the moment */}
      <div className="row m-1">
        <img src={image(disclosure)} className="icon col" />
        <p className="col">Disclosure</p>
      </div>
      <div className="row m-1">
        <img src={image(identity)} className="icon col" />
        <p className="col">Identity</p>
      </div>
      <div className="row m-1">
        <img src={image(credit)} className="icon col" />
        <p className="col">Credit</p>
      </div>
      <div className="row m-1">
        <img src={image(rightToWork)} className="icon col" />
        <p className="col">Right to Work</p>
      </div>
      <div className="row m-1">
        <img src={image(education)} className="icon col" />
        <p className="col">Education</p>
>>>>>>> 3f4295d93e6c515fd893d9c3cd5f17d2f7272017
      </div>
    </div>
  );
};

export default DueDiligence;
