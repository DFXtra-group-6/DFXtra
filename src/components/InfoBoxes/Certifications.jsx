import React from "react";
import placeholder from '../../assets/placeholder.png';

const Certifications = ({ certifications }) => {

    // const data = certifications.map((certification) => {
    //     return (
    //         <>
    //             <div className="icon col-2">
    //                 <img src={placeholder} className="icon" />
    //             </div>
    //             <div className="description col-10">
    //                 <p>{certification}</p>
    //             </div>
    //         </>
    //     );
    // })

    return (
        <div className="col-4 offset-8">
            {/* <h4>{data()}</h4> */}
            <div className="row">
                <div className="icon col">
                    <img src={placeholder} className="icon" />
                </div>
                <div className="description col">
                    <p>Python</p>
                </div>
            </div>
            <div className="row">

                <div className="icon col">
                    <img src={placeholder} className="icon" />
                </div>
                <div className="description col">
                    <p>javascript</p>
                </div>
            </div>
        </div>
    );
};

export default Certifications;
