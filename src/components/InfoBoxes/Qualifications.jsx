import { useState, useEffect } from 'react'
import './certifications.css';

const Qualifications = ({ data }) => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleEditButton = () => { }

    const qualifications = data;
    const populate = () => {

        const display = qualifications.map(qualification => {

            return (
                <>
                    {(qualifications.length <= 0) ? (

                        <div className="text-center border m-4 bg-light">
                            "No qualification added"
                        </div>

                    ) : (< div >
                        <div className='bg-white'>
                            <div className='row  m-1'>
                                <div className='icon col'>
                                    <i class="fa fa-certificate" aria-hidden="true"></i>
                                </div>
                                <div className='description col-8'>
                                    <p>{qualification.level} | {qualification.description}</p>
                                    <p>{qualification.institution}</p>
                                </div>
                            </div>
                        </div>
                    </div >)}
                </>
            )
        }

        )
        return display;
    }
    return (
        <div className="border border-rounded bg-white mb-3">
            <div className="d-flex justify-content-between align-items-center m-1">
                <h4>Qualifications</h4>
                <i className="fa fa-light fa-pencil" onClick={handleEditButton} disabled={true}></i>
            </div>
            {populate()}
        </div>
    )

}



export default Qualifications