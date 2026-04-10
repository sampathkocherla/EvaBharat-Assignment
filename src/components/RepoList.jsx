
import React from "react";

const RepoList = ({ repos }) => {
  if (repos.length === 0) {
    return <p className="no-data">No repositories found</p>;
  }

  return (
    <div className="repo-list">
      {repos.map((repo) => (
        <div key={repo.id} className="repo-card">
          <h3>{repo.name}</h3>
          <p>{repo.description || "No description available"}</p>
          <p>
            <strong>Language:</strong> {repo.language || "Not specified"}
          </p>
          <p>
            <strong>Stars:</strong> {repo.stargazers_count}
          </p>
          <p>
            <strong>Forks:</strong> {repo.forks_count}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RepoList;