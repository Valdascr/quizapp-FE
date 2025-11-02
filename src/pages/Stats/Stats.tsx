// pages/Stats.tsx
import { useEffect, useState } from 'react';
import { useStats } from './useStats';

const Stats = () => {
  const {
    results,
    filteredResults,
    categories,
    selectedCategoryId,
    setSelectedCategoryId,
  } = useStats();

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-16">
      <h1 className="text-3xl font-bold mb-10 text-gray-800 text-center">
        Your Quiz Results
      </h1>
      <select
        value={selectedCategoryId ?? ''}
        onChange={(e) =>
          setSelectedCategoryId(e.target.value ? Number(e.target.value) : null)
        }
        className="border border-gray-300 bg-white/80 backdrop-blur-sm shadow-sm rounded-xl px-4 py-3 mb-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      {results.length === 0 ? (
        <p className="text-center text-gray-600 bg-white/70 rounded-xl shadow-md px-6 py-4">
          No results yet. Take a quiz to get started!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {filteredResults.map((result) => (
            <div
              key={result.id}
              className="bg-white/90 backdrop-blur-sm border border-white/40 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition transform"
            >
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">
                  {result.category.name}
                </h2>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Score:</span>{' '}
                  <span className="font-bold text-indigo-600">
                    {result.score}
                  </span>{' '}
                  / {result.total}
                </p>
                <p className="text-sm text-gray-500">
                  Completed:{' '}
                  <span className="font-medium">
                    {new Date(result.completed_at).toLocaleString()}
                  </span>
                </p>
              </div>

              <div className="mt-4">
                <div className="w-full bg-gray-200/70 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-3 rounded-full ${
                      (result.score / result.total) * 100 >= 80
                        ? 'bg-green-400'
                        : (result.score / result.total) * 100 >= 50
                        ? 'bg-yellow-400'
                        : 'bg-red-400'
                    }`}
                    style={{
                      width: `${(result.score / result.total) * 100}%`,
                      transition: 'width 0.5s ease-in-out',
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
