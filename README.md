 # 🚀 GitHub User Search App

A React-based application that allows users to search GitHub profiles and explore their repositories with sorting and filtering options.

---

## 📌 Features

### 🔍 User Search

* Search GitHub users using username
* Displays:

  * Username
  * Profile avatar

### 📂 Repository List

* Click on a user to view their repositories
* Displays:

  * Repository name
  * Description
  * ⭐ Stars count
  * 🍴 Forks count
  * 🧑‍💻 Language used

### ⚡ Search Optimization

* Implemented **Debouncing (400ms delay)**
* Reduces unnecessary API calls while typing

### 🔧 Sorting & Filtering

* Sort repositories by:

  * ⭐ Stars
  * 🍴 Forks
* Filter repositories by programming language

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **State Management:** React Hooks (`useState`, `useEffect`, `useMemo`)
* **API:** GitHub REST API
* **Styling:** CSS

---

## 📁 Project Structure

```
src/
 ┣ components/
 ┃ ┣ SearchBar.jsx
 ┃ ┣ UserList.jsx
 ┃ ┣ RepoControls.jsx
 ┃ ┗ RepoList.jsx
 ┣ App.jsx
 ┣ App.css
 ┗ main.jsx
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd evabharat-assignment
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

### 4. Open in browser

```
http://localhost:5173
```

---

## 🌐 API Endpoints Used

* 🔍 Search Users

  ```
  https://api.github.com/search/users?q={query}
  ```

* 📂 Get User Repositories

  ```
  https://api.github.com/users/{username}/repos
  ```

---

## ⚠️ Note on API Rate Limiting

GitHub limits unauthenticated API requests.
If you encounter:

```
API rate limit exceeded
```

* Wait for some time and retry
* Or use authenticated requests via backend (recommended for production)

---

## 💡 Future Improvements

* 🔄 Pagination for repositories
* 🔐 Backend integration with GitHub token
* 🎨 UI enhancement using Tailwind CSS
* 🔎 Search suggestions dropdown
* 📊 Advanced filtering options

---

## 🧠 Key Learnings

* Handling API calls with proper error handling
* Implementing debouncing in React
* Optimizing performance using `useMemo`
* Building reusable and modular components
* Managing multiple states efficiently

---

## 👨‍💻 Author

**Sampath**
Full Stack Developer (MERN)

---

## ⭐ Acknowledgements

* GitHub REST API
* React Documentation

---
