import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Background from "./components/Background";

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Background>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz" element={<Quiz />} />
            </Routes>
            </Background>
        </Router>
    );
};

export default AppRoutes;