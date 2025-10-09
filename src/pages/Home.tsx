import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCategories } from '../services/api';

interface Category {
  id: number;
  name: string;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => console.error('Category error!!?', err));
  }, []);

  const handleCategorySelect = (categoryId: number) => {
    navigate(`/quiz/${categoryId}`);
  };

  return (
    <>
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
