import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Background from './components/Background';
import Stats from './pages/Stats/Stats';
import Navbar from './components/Navbar';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { ProtectedRoute } from './components/ProtectedRoute';
import Profile from './pages/Profile/Profile';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Background>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:categoryId" element={<Quiz />} />
          <Route
            path="/stats"
            element={
              <ProtectedRoute>
                <Stats />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Background>
    </Router>
  );
};

export default AppRoutes;