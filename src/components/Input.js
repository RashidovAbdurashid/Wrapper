import { useState } from "react";

function Input() {
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      relationship,
      phone,
    };

    console.log(userData);
    alert(JSON.stringify(userData));

    setName("");
    setRelationship("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit} className="input-container">
      <div className="input__left">
        <h1 className="nav">New contact form</h1>

        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />

        <input
          type="text"
          name="relationship"
          value={relationship}
          onChange={(e) => setRelationship(e.target.value)}
          placeholder="Relationship"
        />

        <input
          type="number"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />

        <button type="submit">Add Contact</button>
      </div>
    </form>
  );
}

export default Input;
