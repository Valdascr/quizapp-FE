import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Quiz from './pages/Quiz/Quiz';
import Background from "./components/Background";
import Stats from './pages/Stats/Stats';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import { ProtectedRoute } from './components/ProtectedRoute';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Background>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
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
        </Routes>
      </Background>
    </Router>
  );
};

export default AppRoutes;