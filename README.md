# Set Up with vite :
Now We Create and install necessary files:
 ### 1. Create vite Peoject :
  ```
 npm create vite
```
##### ***(Make sure your Project Name.)
### 2. Change Directory:
```
cd projectName
```
### 3. npm
```
npm install
```
### 4. Run
```
npm run dev
```
### 5. Installation React-Router(Library)
You can start with a React template from Vite and choose "React", otherwise bootstrap your application however you prefer.
```
npx create-vite@latest
```
Next install React Router from npm:
```
npm i react-router
```
### 6. Finally, render a <BrowserRouter> around your application:
```
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

```
##


