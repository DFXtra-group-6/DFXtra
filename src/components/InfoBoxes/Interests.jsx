import { useState, useEffect } from "react";
import { submitProfileData } from "../../async/profileAPICalls";

const Interests = ({ data }) => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const getInitialState = () => {
        const value = "Sport";
        return value;
    };

    const [type, setType] = useState(getInitialState);
    const [name, setName] = useState();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleType = (e) => {
        setType(e.target.value);
    };

    useEffect(() => {

    }, [data])

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleEditButton = () => {
        console.log(`clicked edit`);
        setIsFormVisible(true);
        console.log(isFormVisible);
    };

    const handleCancelButton = () => {
        setIsFormVisible(false);
        console.log(isFormVisible);
    };

    const submitButton = () => {
        submitProfileData({ data: { interests: { name: name, type: type } }, id: user._id });
    }

    const interests = data.interests;
    //emptyArray = [];
    // const interests = emptyArray;

    const populate = () => {
        if (interests.length <= 0) {
            return (
                <>
                    <div className="text-center border m-4 bg-light">
                        "No interest added"
                    </div>
                </>
            );
        }
        const display = interests.map((interest) => {
            return (
                <>
                    <div className="row m-1">
                        <p>
                            <strong>{interest.type}</strong>
                        </p>
                        <p>{interest.name}</p>
                    </div>
                </>
            );
        });
        return display;
    };

    return (
        <>
            <div className="border border-rounded bg-white mb-3 ">
                <div className="d-flex justify-content-around align-items-center">
                    <h4>Interests</h4>
                    <i className="fa fa-light fa-pencil" onClick={handleEditButton}></i>
                </div>
                {isFormVisible ? (
                    <div className="bg-light container">
                        <form className="form-control" onSubmit={submitButton}>
                            <h4 className="text-center ">Add Interests</h4>
                            <div className="form-group">
                                <label className="m-1 form-label">Category:</label>
                                <select
                                    onChange={handleType}
                                    value={type}
                                    className="p-1">
                                    <option value="Sport">Sport</option>
                                    <option value="Travel">Travel</option>
                                    <option value="Series">Series</option>
                                    <option value="Band">Band</option>
                                    <option value="Hobby">Hobby</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="m-2 form-label">Name: </label>
                                <input
                                    type="text"
                                    className="l"
                                    value={name}
                                    onChange={handleChange}
                                    placeholder="Enter name . . ."
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
                    <div>{populate()} </div>
                )}
            </div>
        </>
    );
};

export default Interests;
