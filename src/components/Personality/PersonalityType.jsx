import React, { useState } from "react";
import "./PersonalityType.css";

export default function PersonalityType() {
  const [personality, setPersonality] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [personalityInput, setPersonalityInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (descriptionInput.length > 200) {
      alert("Description is too long!");
      return;
    }

    setPersonality({
      personality: personalityInput,
      description: descriptionInput,
    });
    setFormVisible(false);
    setPersonalityInput("");
    setDescriptionInput("");
  };

  const handleEdit = () => {
    setFormVisible(true);
    setPersonalityInput(personality.personality);
    setDescriptionInput(personality.description);
  };

  return (
    <div
      className="container"
      style={{
        maxWidth: "400px",
        maxHeight: "200px",
        border: "1px solid #ccc",

        borderRadius: "10px",
        backgroundColor: "white",
        overflow: "hidden",
        float: "right",
      }}
    >
      <button
        style={{
          width: "400px",
          height: "220px",
          border: "none",
          borderRadius: "10px",
          outline: "none",
          backgroundColor: "white",
        }}
        onClick={() => setFormVisible(true)}
      >
        {personality === null ? (
          "Personality Type"
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <p className="Personality-top">
              <div className="row">
                <div className="col-12">
                  <h2 className="Personality-title">Personality type</h2>{" "}
                </div>
                <div className="col-12">
                  {" "}
                  <div className="Personality-user">
                    {" "}
                    John's personality type{" "}
                  </div>
                  <h3 className="Personality-description">
                    {personality.personality}
                  </h3>{" "}
                </div>
              </div>
            </p>
            <div className="row" id="Result">
              <div className="col-2">
                <img
                  className="Personality-img"
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/072/031/original/personality.png?1678974363"
                  alt="Personality"
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "cover",
                    float: "left",
                    marginRight: "5px",
                  }}
                />
              </div>
              <div
                className="col-10"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "120px",
                }}
              >
                <p style={{ textAlign: "center", height: "60px" }}>
                  {personality.description.substring(0, 200)}
                </p>
                <button
                  onClick={handleEdit}
                  className="Edit-button"
                  type="button"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        )}
      </button>

      {formVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              width: "400px",
              height: "250px",
              border: "1px solid grey",
              borderRadius: "10px",
              padding: "10px",
              backgroundColor: "white",
            }}
          >
            <div>
              <label>
                Personality:
                <input
                  type="text"
                  value={personalityInput}
                  onChange={(event) => setPersonalityInput(event.target.value)}
                />
              </label>
            </div>

            <div>
              <label>
                Description:
                <textarea
                  value={descriptionInput}
                  onChange={(event) => setDescriptionInput(event.target.value)}
                />
              </label>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button type="submit">
                {personality === null
                  ? "Add Personality Type"
                  : "Update Personality Type"}
              </button>
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
