// import sampleUsers from '../../sampleUsers.json';
// import mockExpData from "../../mockExpData.json";
// import TrainingModel from "../utils/Training.model";
import Training from "./Training";
import "../Training/training.css";

const AllTraining = ({ data }) => {
  // const data = mockExpData;
  const trainings = data.trainingProgress;

  const populateTrainingTable = () => {
    if (trainings?.length > 0) {
      const displayTraining = trainings.map((training) => {
        // const train = new TrainingModel(
        //   dataItem.challengeName,
        //   dataItem.challenge,
        //   dataItem.result,
        //   dataItem.id
        // );
        return (
          <Training
            // key={_id}
            challengeName={training.name}
            challenge={training.challenge}
            result={training.result}
          />
        );
      });

      return displayTraining;
    }
  };

  return (
    // <div className="row mx-2 col-md-8 border p-4 mt-3 training-table">
    <div className="row  col border p-4 mt-3 training-table">
      <h3>Training Progress</h3>
      <p>Expand each module to learn more</p>
      <div className="training my-3">
        <h6 className="head1">LEARNING MODULE</h6>
        <h6 className="head2">CHALLENGE</h6>
        <h6 className="head3">RESULT</h6>
      </div>
      {populateTrainingTable()}
    </div>
  );
};

export default AllTraining;
