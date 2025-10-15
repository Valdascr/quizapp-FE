// pages/Stats.tsx
import { useEffect, useState } from 'react';
import { fetchStats } from '../../services/api';
import { useStats } from './useStats';

interface Result {
  id: number;
  score: number;
  total: number;
  completed_at: string;
  category: { id: number; name: string };
}

const Stats = () => {
  const {
    results,
    filteredResults,
    categories,
    selectedCategoryId,
    setSelectedCategoryId
  } = useStats();

  return (
    
    <div className="min-h-screen flex flex-col items-center px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Quiz Results</h1>
      
        <select
          value={selectedCategoryId ?? ''}
          onChange={(e) =>
            setSelectedCategoryId(e.target.value ? Number(e.target.value) : null)
          }
          className="border p-2 rounded mb-6"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      {results.length === 0 ? (
        <p className="text-center text-gray-600">
          No results yet. Take a quiz to get started!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResults.map((result) => (
            <div
              key={result.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold mb-2">
                  {result.category.name}
                </h2>
                <p className="text-sm text-gray-600 mb-1">
                  Score: <span className="font-bold">{result.score}</span> /{' '}
                  {result.total}
                </p>
                <p className="text-sm text-gray-500">
                  Completed: {new Date(result.completed_at).toLocaleString()}
                </p>
              </div>

              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded h-2">
                  <div
                    className="bg-green-500 h-2 rounded"
                    style={{
                      width: `${(result.score / result.total) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Stats;
