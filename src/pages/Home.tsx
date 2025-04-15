import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <Button
        label="Start Quiz!!!"
        onClick={() => navigate('/quiz')}
        ButtonType="start"
      />
    </div>
  );
};

export default Home;
