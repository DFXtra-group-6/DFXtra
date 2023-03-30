import { useState, useEffect } from 'react'
import { submitProfileData } from "../../async/profileAPICalls";
import './certifications.css';

const Qualifications = ({ data }) => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const [institution, setInstitution] = useState();
    const [level, setLevel] = useState();
    const [description, setDescription] = useState();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleEditButton = () => {
        setIsFormVisible(true);
    }

    const submitButton = () => {
        submitProfileData({ data: { qualifications: { institution: institution, level: level, description: description } }, id: user._id });
    }

    const handleChange = (e) => {
        setInstitution(e.target.value);
        setLevel(e.target.value);
        setDescription(e.target.value);
    };

    const handleCancelButton = () => {
        setIsFormVisible(false);
        console.log(isFormVisible);
    };

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
                <i className="fa fa-light fa-pencil" onClick={handleEditButton}></i>
            </div>
            {isFormVisible ? (
                <div className="bg-light container">
                    <form className="form-control" onSubmit={submitButton}>
                        <h4 className="text-center ">Add Qualification</h4>
                        <div className="form-group">
                            <label className="m-1 form-label">Institution:</label>
                            <input
                                type="text"
                                className="l"
                                value={institution}
                                onChange={handleChange}
                                placeholder="Enter Institution . . ."
                            />
                        </div>
                        <div className="form-group">
                            <label className="m-2 form-label">Level: </label>
                            <input
                                type="text"
                                className="l"
                                value={level}
                                onChange={handleChange}
                                placeholder="Enter Level . . ."
                            />
                        </div>
                        <div className="form-group">
                            <label className="m-2 form-label">Description: </label>
                            <input
                                type="text"
                                className="l"
                                value={description}
                                onChange={handleChange}
                                placeholder="Enter Description . . ."
                            />
                        </div>
                        <div className="d-flex justify-content-evenly bg-light">
                            <div>
                                <i
                                    className="fa-sharp fa-solid fa-circle-xmark fa-2xl"
                                    onClick={handleCancelButton}
                                ></i>
                            </div>

                            <div>
                                <i
                                    className="fa-solid fa-circle-plus fa-2xl"
                                    onClick={submitButton}
                                ></i>
                            </div>
                        </div>
                    </form>
                </div>
            ) : (
                <div>
                    {populate()}
                </div>
            )}

        </div>
    )

}



export default Qualifications