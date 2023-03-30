import React from "react";
import placeHolder from './images/certificate.svg';
import './certifications.css';

const Certifications = ({ data }) => {

    const certifications = data.certifications;

function Certifications() {
  const [formVisible, setFormVisible] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/certifications`)
      .then((response) => {
        setCertifications(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleAddCertification = (event) => {
    event.preventDefault();
    /* axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}/certifications`, {
        name,
        description,
      })
      .then((response) => {
        setCertifications([...certifications, response.data]);
        setFormVisible(false);
        setName("");
        setDescription("");
      })
      .catch((error) => {
        console.error(error);
      }); */
  };
  
  const populate = () => {
        if (certifications.length <= 0) {
            return (
                <>
                    <div className="text-center border m-4 bg-light">
                        "No certifications added"
                    </div>
                </>
            );
        }
        const display = certifications.map((certification, index) => {
            return (
                <div key={index} className="bg-white">
                    <div className="row border bg-light">
                        <div className="icon col">
                            <img
                                src={placeHolder}
                                alt="icon"
                                className="icon"
                            />
                        </div>
                        <div className="description col">
                            <p>{certification}</p>
                        </div>
                    </div>
                </div>)
        })
        return display;
    }

  return (
    <div>
      <h1>Certifications</h1>
      <div className="certifications-container">
        {populate()}
        <button className="add-certification-button">
          + Add Certification
        </button>
      </div>
      {formVisible && (
        <div className="overlay">
          <form className="form" onSubmit={handleAddCertification}>
            <h2>Add Certification</h2>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <label>
              Description:
              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </label>
            <div className="form-buttons">
              <button type="submit">Add</button>
              <button type="button" onClick={() => setFormVisible(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Certifications;
