import Experience from "./Experience";
import "../Experience/experience.css";
import { useState } from "react";
import EditExperienceForm from "./EditExpForm";

const AllExperience = ({ data }) => {
  // const data = mockExpData;
    const experiences = data.experience;
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [editFormOpen, setEditFormOpen] = useState(false);

   const handleEditClick = (expItem) => {
    setSelectedExperience(expItem);
    setEditFormOpen(true);
  }; 

  const populateExpTable = () => {
    if (experiences?.length > 0) {
      const displayExperience = experiences.map((expItem) => {
        
        return (
          <>
          <Experience
            // key={_id}
            employer={expItem.employer}
            position={expItem.position}
            dates={expItem.dates}
            skills={expItem.skills}
            onEdit={() => handleEditClick(expItem)}
          />
          
          </>
        );
      });

            return displayExperience;
        }
    };

  return (
  
    <div className="row  col order p-4 experience-table">
     <div className="exp-heading">
      <h3>Experience</h3>
      <i class="fa fa-plus-circle" aria-hidden="true" onClick={() => setEditFormOpen(true)}></i>
    </div>


      <p>View the work experience of the engineer</p>
      <div className="exp my-3">
        <h6 className="exp-head1">EMPLOYER</h6>
        <h6 className="exp-head2">POSITION</h6>
        <h6 className="exp-head3">DATES</h6>
      </div>

      {populateExpTable()}

      {editFormOpen && (
      <EditExperienceForm experience={selectedExperience} onClose={() => setEditFormOpen(false)} />
    )}
      
        </div>
    );
};

export default AllExperience;
