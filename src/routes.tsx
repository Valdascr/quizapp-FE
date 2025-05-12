import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Background from "./components/Background";
import Stats from './pages/Stats';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Background>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Background>
    </Router>
  );
};

export default AppRoutes;