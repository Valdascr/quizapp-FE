import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: 1, name: 'History' },
  { id: 2, name: 'Science' },
  { id: 3, name: 'Math' },
  { id: 4, name: 'Geography' },
  { id: 5, name: 'Programming' },
  { id: 6, name: 'Art' },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleCategorySelect = (id: number) => {
    navigate('/quiz/${id}');
  };

  return (
    <>
      <div className="">
        <Button
          label="Start Quiz!!!"
          onClick={() => navigate('/quiz')}
          ButtonType="start"
        />
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          Choose a Quiz Category
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className="p-6 bg-blue-100 hover:bg-blue-200 rounded shadow text-lg font-semibold transition"
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
