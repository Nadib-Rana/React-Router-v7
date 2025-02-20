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

## 4. React Router ইন্টারভিউ প্রশ্ন
### **বেসিক প্রশ্ন**
1. React Router কি, এবং কেন এটি ব্যবহার করা হয়?
2. `BrowserRouter` এবং `HashRouter` এর মধ্যে পার্থক্য কী?
3. `Link` এবং `NavLink` কম্পোনেন্টের কাজ কী?

### **অ্যাডভান্সড প্রশ্ন**
4. React Router-এ 404 পৃষ্ঠা কীভাবে পরিচালনা করবেন?
5. Nested Routing কী এবং একটি উদাহরণ দিন।
6. URL প্যারামিটার কী এবং কম্পোনেন্টে এটি কীভাবে এক্সট্র্যাক্ট করবেন?
7. Private Routes কীভাবে ইমপ্লিমেন্ট করবেন?
8. React 19-এর নতুন আপডেট কী যা রাউটিং পারফরম্যান্স উন্নত করে?

---



