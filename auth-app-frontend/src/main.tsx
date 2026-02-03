import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login.tsx";
import About from "./pages/About.tsx";
import Signup from "./pages/Signup.tsx";
import Services from "./pages/Services.tsx";
import RouterLayout from "./pages/RootLayout.tsx";
import { User } from "lucide-react";
import Userlayout from "./pages/users/Userlayout.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RouterLayout />}>

        <Route index path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services" element={<Services />} />
        <Route path="/dashboard" element={<Userlayout />}/>

      </Route>
    </Routes>
  </BrowserRouter>,
);
