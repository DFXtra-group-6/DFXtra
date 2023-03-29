import { useState } from "react";
const Interests = ({ data }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleEditButton = () => {
    console.log(`clicked edit`);
    setIsFormVisible(true);
    console.log(isFormVisible);
  };

  const handleCancelButton = () => {
    setIsFormVisible(false);
    console.log(isFormVisible);
  };

  // console.dir(data.interests);

  // const interests = data.interests;
  const emptyArray = [];
  const interests = emptyArray;

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
            <form className="form-control">
              <h4 className="text-center ">Add Interests</h4>
              <div className="form-group">
                <label className="m-1 form-label">Category:</label>
                <select className="p-1">
                  <option value="sport">Sport</option>
                  <option value="travel">Travel</option>
                  <option value="series">Series</option>
                  <option value="band">Band</option>
                  <option value="hobby">Hobby</option>
                </select>
              </div>
              <div className="form-group">
                <label className="m-2 form-label">Name: </label>
                <input
                  type="text"
                  className="l"
                  placeholder="Enter name . . ."
                />
              </div>
              <div className="d-flex justify-content-evenly bg-light">
                <div>
                  <i
                    class="fa-sharp fa-solid fa-circle-xmark fa-2xl"
                    onClick={handleCancelButton}
                  ></i>
                </div>

                <div>
                  <i class="fa-solid fa-circle-plus fa-2xl"></i>
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
