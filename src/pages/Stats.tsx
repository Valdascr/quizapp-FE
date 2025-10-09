// pages/Stats.tsx
import { useEffect, useState } from 'react';
import { fetchStats } from '../services/api';

interface Result {
  id: number;
  score: number;
  total: number;
  completed_at: string;
  category: { id: number; name: string };
}

const Stats = () => {
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    fetchStats()
      .then((res) => setResults(res.data))
      .catch((err) => console.error('Get error:', err));
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Quiz Results</h1>
      {results.length === 0 ? (
        <p>No results yet.</p>
      ) : (
        <ul className="space-y-4">
          {results.map((r) => (
            <li key={r.id} className="bg-white rounded shadow p-4">
              <p className="font-semibold">{r.category.name}</p>
              <p>
                Score: {r.score} / {r.total}
              </p>
              <p className="text-sm text-gray-600">
                Completed: {new Date(r.completed_at).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Stats;
