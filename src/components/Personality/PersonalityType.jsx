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
    <div className="container">
      <h1 style={{ fontSize: "30px", display: "inline", paddingRight: "10px" }}>
        Personality
      </h1>
      <i
        onClick={() => setFormVisible(true)}
        className="fa fa-light fa-plus"
      ></i>
      <div
        style={{
          backgroundColor: "#F0F3F7",
          marginBottom: "5px",
          marginTop: "5px",
          border: "1px solid #DEE2E6",
        }}
        className="row g-3"
      >
        {personality === null ? (
          ""
        ) : (
          <div>
            <p className="Personality-top">
              <h3 className="Personality-description">
                {personality.personality}
              </h3>{" "}
            </p>
            <div>
              <img
                className="Personality-img"
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/074/280/original/undraw_Things_to_say_re_jpcg.png?1680204189"
                alt="Personality"
                style={{
                  width: "60px",
                  borderRadius: "50%",
                  display: "inline",
                }}
              />

              <p style={{ display: "inline", margin: "3px" }}>
                {personality.description.substring(0, 200)}
              </p>

              <button
                onClick={handleEdit}
                className="btn btn-light"
                type="button"
                style={{ display: "block", margin: "0 auto" }}
              >
                Edit
              </button>
            </div>
          </div>
        )}

        {formVisible && (
          <div>
            <form
              onSubmit={handleSubmit}
              style={{
                width: "250px",
                height: "220px",
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
                    className="form-control"
                    aria-describedby="inputGroup-sizing-sm"
                    type="text"
                    value={personalityInput}
                    onChange={(event) =>
                      setPersonalityInput(event.target.value)
                    }
                  />
                </label>
              </div>

              <div>
                <label>
                  Description:
                  <textarea
                    className="form-control"
                    value={descriptionInput}
                    onChange={(event) =>
                      setDescriptionInput(event.target.value)
                    }
                  />
                </label>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button className="btn btn-info" type="submit">
                  {personality === null ? "Add" : "Update Personality Type"}
                </button>
                <button
                  className="btn btn-light"
                  type="button"
                  onClick={() => setFormVisible(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
