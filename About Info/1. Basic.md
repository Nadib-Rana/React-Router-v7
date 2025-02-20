# React Router 7 in React 18

## 1. What is React Router?
**React Router** is a popular library for handling navigation in **single-page applications (SPA)** built with React. It allows users to navigate between different views or pages without a full page reload.

### **Key Features**:
- **Declarative Routing** – Routes are defined using JSX.
- **Dynamic Routing** – Routes can be updated based on state.
- **Nested Routes** – Supports hierarchical routing.
- **URL Parameters** – Enables passing dynamic values via URLs.
- **Lazy Loading** – Loads components only when needed.

---

## 2. Installing React Router 7 in React 18
To install the latest version of **React Router**, run:

```sh
npm install react-router-dom@latest
```

### **Basic Setup:**
Wrap your app with `BrowserRouter` in `index.js` or `App.js`:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

## 3. Testing React Router
After setting up the routes, start the development server:

```sh
npm start
```

### **Verify Navigation**:
- Open **`http://localhost:3000/`** → should display the `Home` component.
- Open **`http://localhost:3000/about`** → should display the `About` component.

To create navigation links, use the `Link` component:

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
```

---

## 4. Common React Router Interview Questions
### **Basic Questions**
1. What is React Router, and why do we use it?
2. Explain the difference between `BrowserRouter` and `HashRouter`.
3. What is the purpose of the `Link` and `NavLink` components?

### **Advanced Questions**
4. How do you handle 404 pages in React Router?
5. Explain nested routing with an example.
6. What are URL parameters, and how do you extract them in a component?
7. How can you implement route protection (Private Routes) in React Router?
8. What is the difference between `useNavigate` and `useHistory` hooks?

---


