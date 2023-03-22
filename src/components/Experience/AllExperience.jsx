import mockExpData from "../../mockExpData.json";
import ExperienceModel from "../utils/Experience.model";
import Experience from "./Experience";
import "../Experience/experience.css";

const AllExperience = () => {
  const data = mockExpData;

  const populateExpTable = () => {
    if (data?.length > 0) {
      const displayExperience = data.map((dataItem) => {
        const exp = new ExperienceModel(
          dataItem.employer,
          dataItem.position,
          dataItem.startDate,
          dataItem.endDate,
          dataItem.id
        );
        return (
          <Experience
            key={exp.id}
            employer={exp.employer}
            position={exp.position}
            startDate={exp.startDate}
            endDate={exp.endDate}
          />
        );
      });

      return displayExperience;
    }
  };

  // <<<<<<< HEAD
  //   return (
  //     <div className="row mr-5 col-md-8 border p-4 mt-3">
  //       <h3>Experience</h3>
  //       <p>View the work experience of the engineer</p>
  //       <table className="table table-responsive">
  //         <thead>
  //           <tr>
  //             <th>Employer</th>
  //             <th></th>
  //             <th>Position</th>
  //             <th>Dates</th>
  //             <th></th>
  //           </tr>
  //         </thead>
  //         <tbody>{populateExpTable()}</tbody>
  //       </table>
  //     </div>
  //   );
  // };
  // =======
  return (
    <div className="row mx-5 col-md-8 border p-4 mt-3 experience-table">
      <h3>Experience</h3>
      <p>View the work experience of the engineer</p>
      <div className="exp my-3">
        <h6 className="exp-head1">EMPLOYER</h6>
        <h6 className="exp-head2">POSITION</h6>
        <h6 className="exp-head3">DATES</h6>
      </div>

      {populateExpTable()}
    </div>
  );
};

export default AllExperience;
