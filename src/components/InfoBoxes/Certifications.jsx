import React from "react";
import placeHolder from './images/certificate.svg';
import './certifications.css';

const Certifications = ({ data }) => {
    const certifications = data.certifications;

    const populate = () => {
        if (certifications.length <= 0) {
            return (
                <>
                    <div className="text-center border m-4 bg-light">
                        "No certifications added"
                    </div>
                </>
            );
        }
        const display = certifications.map((certification, index) => {
            return (
                <div key={index} className="bg-white">
                    <div className="row border bg-light">
                        <div className="icon col">
                            <img
                                src={placeHolder}
                                alt="icon"
                                className="icon"
                            />
                        </div>
                        <div className="description col">
                            <p>{certification}</p>
                        </div>
                    </div>
                </div>)
        })
        return display;
    }

    return (
        <div className="certi-grouped mt-3 border-rounded container bg-white">
            <h4>Certifications</h4>
            {populate()}
        </div>
    );
};

export default Certifications;
