import "../Training/training.css";
import { useState } from "react";
// import PropTypes from "prop-types";
// import TrainingModel from "../utils/Training.model";

const Training = (userTraining) => {
  const { challengeName, challenge, result } = userTraining;
  const [open, setOPen] = useState(false);
    
    const toggle = () => {
        setOPen(!open);
    };

  return (
    <>
    <div className="training-box col-md-12 p-2">
      <div className="challengeName">
        <td>
          {challengeName}
          <br></br>
          <div>
                <button onClick={toggle} className="expand-btn">Learn More</button>   
          </div> 

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

      <div className="skills-box">
              {open && (
                  
                      <div className="toggle">
                          <div>There were no plane crashes!</div>
                      </div>  
                  
              )}
      </div>
   </>
  );
};

// Training.propTypes = {
//   userTraining: PropTypes.instanceOf(TrainingModel),
// };

export default Training;
