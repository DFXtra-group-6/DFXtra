import React from "react";
import tick from "./images/tick.svg";
import cross from "./images/cross.svg";
import "./dueDiligence.css";
import creditImg from "../../assets/credit.png";
import disclosureImg from "../../assets/disclosure.png";
import educationImg from "../../assets/education.png";
import identityImg from "../../assets/identity.png";
import rightToWorkImg from "../../assets/rightToWork.png";

const DueDiligence = ({ data }) => {
    const { disclosure, identity, credit, rightToWork, education } =
        data.dueDiligenceChecks;

    function image(value) {
        return value ? tick : cross;
    }

    return (
        <div className="border border-rounded bg-white mb-3">
            <h4>Due Diligence Checks</h4>
            <div className="row due-row">
                <img src={disclosureImg} alt="" className="col col-img"></img>
                <p className="col">Disclosure</p>
                <img src={image(disclosure)} alt="" className="icon col" />
            </div>

            <div className="row due-row">
                <img src={identityImg} alt="" className="col col-img"></img>
                <p className="col">Identity</p>
                <img src={image(identity)} alt="" className="icon col" />
            </div>

            <div className="row due-row">
                <img src={creditImg} alt="" className="col col-img"></img>
                <p className="col">Credit</p>
                <img src={image(credit)} alt="" className="icon col" />
            </div>
            <div className="row due-row">
                <img src={rightToWorkImg} alt="" className="col col-img"></img>
                <p className="col">Right to Work</p>
                <img src={image(rightToWork)} alt="" className="icon col" />
            </div>
            <div className="row due-row">
                <img src={educationImg} alt="" className="col col-img"></img>
                <p className="col">Education</p>
                <img src={image(education)} alt="" className="icon col" />
            </div>
        </div>
    );
};

export default DueDiligence;
