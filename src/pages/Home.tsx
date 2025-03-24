import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Start Quiz!!!</h1>
      <Button label="Start" onClick={() => navigate("/quiz")} padding="20px 140px" />
    </div>
  );
};

export default Home;
