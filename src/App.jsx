 import React, { useEffect, useMemo, useState } from "react";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import RepoControls from "./components/RepoControls";
import RepoList from "./components/RepoList";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);

  const [selectedUser, setSelectedUser] = useState("");

  const [loadingUsers, setLoadingUsers] = useState(false);
  const [loadingRepos, setLoadingRepos] = useState(false);

  const [error, setError] = useState("");

  const [sortBy, setSortBy] = useState("");
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query.trim());
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (!debouncedQuery) {
      setUsers([]);
      return;
    }

    searchUsers(debouncedQuery);
  }, [debouncedQuery]);

  const searchUsers = async (searchText) => {
    try {
      setLoadingUsers(true);
      setError("");
      setUsers([]);
      setRepos([]);
      setSelectedUser("");

      const res = await fetch(
        `https://api.github.com/search/users?q=${searchText}`
      );
      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Failed to fetch users");
        return;
      }

      setUsers(data.items || []);
    } catch (err) {
      setError("Something went wrong while fetching users");
    } finally {
      setLoadingUsers(false);
    }
  };

  const fetchRepos = async (username) => {
    try {
      setLoadingRepos(true);
      setError("");
      setRepos([]);
      setSelectedUser(username);

      const res = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Failed to fetch repositories");
        return;
      }

      setRepos(data);
    } catch (err) {
      setError("Something went wrong while fetching repositories");
    } finally {
      setLoadingRepos(false);
    }
  };

  const languages = useMemo(() => {
    const allLanguages = repos
      .map((repo) => repo.language)
      .filter((lang) => lang !== null);

    return [...new Set(allLanguages)];
  }, [repos]);

  const processedRepos = useMemo(() => {
    let updatedRepos = [...repos];

    if (language) {
      updatedRepos = updatedRepos.filter((repo) => repo.language === language);
    }

    if (sortBy === "stars") {
      updatedRepos.sort(
        (a, b) => b.stargazers_count - a.stargazers_count
      );
    } else if (sortBy === "forks") {
      updatedRepos.sort((a, b) => b.forks_count - a.forks_count);
    }

    return updatedRepos;
  }, [repos, sortBy, language]);

  return (
    <div className="container">
      <h1 className="title">GitHub User Search</h1>

      <SearchBar query={query} setQuery={setQuery} />

      {error && <p className="error">{error}</p>}

      {loadingUsers && <p className="loading">Searching users...</p>}

      {!loadingUsers && users.length > 0 && (
        <UserList users={users} onSelectUser={fetchRepos} />
      )}

      {selectedUser && (
        <>
          <h2 className="sub-title">Repositories of {selectedUser}</h2>

          <RepoControls
            sortBy={sortBy}
            setSortBy={setSortBy}
            language={language}
            setLanguage={setLanguage}
            languages={languages}
          />

          {loadingRepos && <p className="loading">Loading repositories...</p>}

          {!loadingRepos && <RepoList repos={processedRepos} />}
        </>
      )}
    </div>
  );
};

export default App;