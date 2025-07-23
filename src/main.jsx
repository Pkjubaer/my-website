import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Services from "./pages/home/Services.jsx";
import Blogs from "./pages/home/Blogs.jsx";
import Princing from "./pages/home/PricingSection.jsx";
import Registration from "./components/Registration.jsx";
import Login from "./components/Login.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import 'sweetalert2/dist/sweetalert2.js'
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Dashboard from "./pages/home/Dashboard.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/pricing" element={<Princing />} />
          <Route path="/contact" element={<div>This is contact page!</div>} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        {/* Authentication */}
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        {/* Dashboard */}
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>,
);
