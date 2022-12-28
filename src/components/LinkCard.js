import React from "react";

export default function LinkCard({ link, refreshLinks }) {
  const archiveLink = async () => {
    link.archived = true;
    await fetch("/api/update-link", {
      method: "POST",
      body: JSON.stringify(link),
    });
    refreshLinks();
  };

  const deleteLink = async () => {
    const _id = link._id;
    await fetch("/api/delete-link", {
      method: "POST",
      body: JSON.stringify({ _id }),
    });
    refreshLinks();
  };
  return (
    <div className="card">
      <div className="card-header">
        <a href={link.url}>{link.name}</a>
      </div>
      <div className="card-body">{link.description}</div>

      <div className="card-footer">
        <button className="btn btn-warning mx-2" onClick={archiveLink}>
          Archive
        </button>
        <button className="btn btn-danger" onClick={deleteLink}>
          Delete
        </button>
      </div>
    </div>
  );
}
