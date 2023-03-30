// import mockExpData from "../../mockExpData.json";
// import ExperienceModel from "../utils/Experience.model";
import Experience from "./Experience";
import "../Experience/experience.css";
import { useState } from "react";
<<<<<<< HEAD
// import EditExperienceForm from "./EditExpForm";

const AllExperience = ({ data }) => {
  // const data = mockExpData;
  const experiences = data.experience;
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [editFormOpen, setEditFormOpen] = useState(false);

  // {
  //   editFormOpen && (
  //     <EditExperienceForm experience={selectedExperience} onClose={() => setEditFormOpen(false)} />
  //   )
  // }
=======
import EditExperienceForm from "./EditExpForm";

const AllExperience = ({ data }) => {
    // const data = mockExpData;
    const experiences = data.experience;
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [editFormOpen, setEditFormOpen] = useState(false);

    {
        editFormOpen && (
            <EditExperienceForm experience={selectedExperience} onClose={() => setEditFormOpen(false)} />
        )
    }

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
                            onEdit={() => setSelectedExperience(expItem)}
                        />

                    </>
                );
            });
>>>>>>> 4cfe15c0f4262dca552e36c9ff0ec109514a3235

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
              onEdit={() => setSelectedExperience(expItem)}
            />

<<<<<<< HEAD
          </>
        );
      });
=======
    return (

        <div className="row  col order p-4 experience-table">
>>>>>>> 4cfe15c0f4262dca552e36c9ff0ec109514a3235

      return displayExperience;
    }
  };

  return (

    <div className="row  col order p-4 experience-table">

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
