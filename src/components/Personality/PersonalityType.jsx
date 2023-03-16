import React, { useState } from "react";

function PersonalityType() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [personalityTypes, setPersonalityTypes] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPersonalityType = { title, text };
    setPersonalityTypes([...personalityTypes, newPersonalityType]);
    setTitle("");
    setText("");
    setShowForm(false);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        maxHeight: "250px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/072/031/original/personality.png?1678974363"
          alt="Personality"
          style={{ marginRight: "10px", maxHeight: "50px" }}
        />
        <h2 style={{ margin: 0 }}>Personality Type</h2>
      </div>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            maxLength={50}
            required
          />
          <br />
          <label htmlFor="text">Text:</label>
          <textarea
            id="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            maxLength={600}
            required
          />
          <br />
          <button type="submit">Add</button>
        </form>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "10px",
            width: "300px",
          }}
        >
          <div>
            {personalityTypes.map((personalityType, index) => (
              <div key={index}>
                <h3>{personalityType.title}</h3>
                <p>{personalityType.text}</p>
              </div>
            ))}
            <button onClick={() => setShowForm(true)}>
              Add Personality Type
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonalityType;
