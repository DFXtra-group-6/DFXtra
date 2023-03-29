// import mockExpData from "../../mockExpData.json";
// import ExperienceModel from "../utils/Experience.model";
import Experience from "./Experience";
import "../Experience/experience.css";


const AllExperience = ({ data }) => {
  // const data = mockExpData;
  const experiences = data.experience;

  const populateExpTable = () => {
    if (experiences?.length > 0) {
      const displayExperience = experiences.map((expItem) => {
        // const exp = new ExperienceModel(
        //   expItem.employer,
        //   expItem.position,
        //   expItem.dates,
        //   // dataItem._id
        // );
        return (
          <>
          <Experience
            // key={_id}
            employer={expItem.employer}
            position={expItem.position}
            dates={expItem.dates}
            skills={expItem.skills}
          />
            {/* <Collapsible /> */}
          </>
        );
      });

      return displayExperience;
    }
  };

  return (
    // <div className="row mx-3 col-md-8 border p-4 mt-3 experience-table">
    <div className="row  col order p-4 experience-table">
      <i className="fa fa-light fa-pencil" onClick={handleEditButton}></i>
      
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
