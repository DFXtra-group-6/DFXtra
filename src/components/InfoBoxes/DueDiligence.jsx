import React from "react";
import tick from './images/tick.svg';
import cross from './images/cross.svg';
import './certifications.css';

const DueDiligence = ({ data }) => {

    const { disclosure, identity, credit, rightToWork, education } = data.dueDiligenceChecks;

    function image(value) { return value ? tick : cross }

    return (
        <div className="border border-rounded bg-white mb-3">
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
            </div>
        </div>
    );
};

export default DueDiligence;
