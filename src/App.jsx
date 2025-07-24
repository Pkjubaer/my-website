import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <>
      <PrivateRoute><Navbar /></PrivateRoute>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <PrivateRoute><Footer /></PrivateRoute>
    </>
  );
}

export default App;
