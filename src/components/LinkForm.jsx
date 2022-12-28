import React, { useState } from "react";

export default function LinkForm({ refreshLinks }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [desc, setDesc] = useState("");

  const resetForm = () => {
    setName("");
    setUrl("");
    setDesc("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = { name, url, description: desc };

    try {
      await fetch("/api/create-link", {
        method: "POST",
        body: JSON.stringify(body),
      });
      refreshLinks();
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <div className="card-header">Add Link</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Url</label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <label htmlFor="">Description</label>
            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-success">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
