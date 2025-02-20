# React Router 7 in React 19

## 1. React Router কি?

**React Router** একটি জনপ্রিয় লাইব্রেরি যা **single-page applications (SPA)**-এর জন্য নেভিগেশন পরিচালনা করতে ব্যবহৃত হয়। এটি ব্যবহারকারীদের বিভিন্ন ভিউ বা পৃষ্ঠাগুলির মধ্যে স্থানান্তর করতে সাহায্য করে, কোনো সম্পূর্ণ পেজ রিলোড ছাড়াই।

### **প্রধান বৈশিষ্ট্য**:

- **Declarative Routing** – JSX এর মাধ্যমে রুট নির্ধারণ করা যায়।
- **Dynamic Routing** – অ্যাপ স্টেট অনুযায়ী রুট আপডেট করা যায়।
- **Nested Routes** – মাল্টি-লেভেল রাউটিং সাপোর্ট করে।
- **URL Parameters** – URL এর মাধ্যমে ডেটা পাঠানো যায়।
- **Lazy Loading** – প্রয়োজন অনুযায়ী কম্পোনেন্ট লোড হয়।
- **React 19-এর নতুন ফিচার** – উন্নত পারফরম্যান্স এবং স্টেট ম্যানেজমেন্ট।

---

## 2. React Router 7 ইনস্টল করা

React Router-এর সর্বশেষ সংস্করণ ইনস্টল করতে নিচের কমান্ডটি চালান:

```sh
npm install react-router-dom@latest
```

### **মৌলিক সেটআপ:**

আপনার অ্যাপে `BrowserRouter` যোগ করুন:

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

## 3. React Router টেস্ট করা

রাউট সেটআপের পরে, ডেভেলপমেন্ট সার্ভার চালু করুন:

```sh
npm start
```

### **নেভিগেশন যাচাই করুন**:

- **`http://localhost:3000/`** খুলুন → `Home` কম্পোনেন্ট দেখা উচিত।
- **`http://localhost:3000/about`** খুলুন → `About` কম্পোনেন্ট দেখা উচিত।

নেভিগেশন লিঙ্ক তৈরি করতে `Link` কম্পোনেন্ট ব্যবহার করুন:

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">হোম</Link>
      <Link to="/about">আমাদের সম্পর্কে</Link>
    </nav>
  );
}
```

---

## 4. React Router ইন্টারভিউ প্রশ্ন ও উত্তর

### **বেসিক প্রশ্ন**

1. **React Router কি, এবং কেন এটি ব্যবহার করা হয়?**  
   **উত্তর:** React Router হল একটি লাইব্রেরি যা SPA-এর জন্য ক্লায়েন্ট-সাইড রাউটিং প্রদান করে। এটি পৃষ্ঠাগুলোর মধ্যে সুইচ করতে দেয়, কোনো পূর্ণ পেজ রিলোড ছাড়াই।

2. **`BrowserRouter` এবং `HashRouter` এর মধ্যে পার্থক্য কী?**  
   **উত্তর:** `BrowserRouter` URL ব্যবহার করে রাউট পরিচালনা করে এবং সার্ভারে রিকোয়েস্ট পাঠায়, যেখানে `HashRouter` URL-এর hash (#) অংশ ব্যবহার করে রাউট পরিচালনা করে।

3. **`Link` এবং `NavLink` কম্পোনেন্টের কাজ কী?**  
   **উত্তর:** `Link` একটি HTML `<a>` ট্যাগের মতো কাজ করে, তবে এটি পেজ রিলোড করে না। `NavLink` `Link`-এর একটি উন্নত সংস্করণ যা অ্যাক্টিভ রাউটের জন্য স্টাইলিং যোগ করতে পারে।

### **অ্যাডভান্সড প্রশ্ন**

4. **React Router-এ 404 পৃষ্ঠা কীভাবে পরিচালনা করবেন?**  
   **উত্তর:** অজানা রাউটের জন্য একটি `Route` তৈরি করুন:
   ```jsx
   <Routes>
     <Route path="*" element={<NotFound />} />
   </Routes>
   ```

5. **Nested Routing কী এবং একটি উদাহরণ দিন।**  
   **উত্তর:** যখন একটি রুটের মধ্যে অন্য রুট থাকে, তখন তাকে Nested Routing বলে।
   ```jsx
   <Routes>
     <Route path="dashboard" element={<Dashboard />}>
       <Route path="settings" element={<Settings />} />
     </Route>
   </Routes>
   ```

6. **URL প্যারামিটার কী এবং কম্পোনেন্টে এটি কীভাবে এক্সট্র্যাক্ট করবেন?**  
   **উত্তর:** URL প্যারামিটার ব্যবহার করে ডাইনামিক রাউট তৈরি করা যায়।
   ```jsx
   <Route path="/user/:id" element={<User />} />
   ```
   এক্সট্র্যাক্ট করতে:
   ```jsx
   import { useParams } from "react-router-dom";
   function User() {
     let { id } = useParams();
     return <h1>User ID: {id}</h1>;
   }
   ```

7. **Private Routes কীভাবে ইমপ্লিমেন্ট করবেন?**  
   **উত্তর:** লগইন করা না থাকলে ইউজারকে অন্য পেজে রিডাইরেক্ট করুন।
   ```jsx
   function PrivateRoute({ children }) {
     const isAuthenticated = // আপনার অথেনটিকেশন লজিক
     return isAuthenticated ? children : <Navigate to="/login" />;
   }
   ```
   
8. **React 19-এর নতুন আপডেট কী যা রাউটিং পারফরম্যান্স উন্নত করে?**  
   **উত্তর:** React 19-এ `useOptimistic`, `React Compiler` এবং `Server Components` ইন্ট্রোডিউস করা হয়েছে, যা রাউটিং পারফরম্যান্স ও স্টেট ম্যানেজমেন্ট উন্নত করে।

---
