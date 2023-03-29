import "../Training/training.css";
// import PropTypes from "prop-types";
// import TrainingModel from "../utils/Training.model";

const Training = (userTraining) => {
  const { challengeName, challenge, result } = userTraining;

  return (
    <div className="training-box col-md-12 p-2">
      <div className="challengeName">
        <td>
          {challengeName}
          <br></br>
          <span className="learn-more">Learn More</span>
        </td>
      </div>
      <div className=" challenge mt-2">
        <td>{challenge}</td>
      </div>
      <div className="result">
        <td>
          <div className="result-style px-4 mt-2">{result}</div>
        </td>
      </div>
    </div>
  );
};

// Training.propTypes = {
//   userTraining: PropTypes.instanceOf(TrainingModel),
// };

export default Training;
