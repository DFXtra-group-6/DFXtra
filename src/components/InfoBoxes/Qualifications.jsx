import React from 'react'
import placeholder from "../../assets/qualification-icon.png";
import './certifications.css';

const Qualifications = ({ data }) => {

    const qualifications = data;
    const populate = () => {

        const display = qualifications.map(qualification => {

            return (
                <div>
                    <div className='bg-white'>
                        <div className="row  border bg-light">
                            <div className='icon col'>
                                <img src={placeholder} className='icon' alt='place-holder' />
                            </div>
                            <div className='description col-8'>
                                <p>{qualification.level} | {qualification.description}</p>
                                <p>{qualification.institution}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return display;
    }

    return (
        <div className="certi-grouped mt-3 border-rounded container bg-white">
            <h4>Qualifications</h4>
            {populate()}
        </div>
    )

}

export default Qualifications