
import React from "react";

const RepoControls = ({
  sortBy,
  setSortBy,
  language,
  setLanguage,
  languages,
}) => {
  return (
    <div className="repo-controls">
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Sort By</option>
        <option value="stars">Stars</option>
        <option value="forks">Forks</option>
      </select>

      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="">All Languages</option>
        {languages.map((lang, index) => (
          <option key={index} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RepoControls;