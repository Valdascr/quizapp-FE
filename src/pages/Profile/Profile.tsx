import { useProfile } from './useProfile';

const Profile = () => {

  const {
    user,
    stats
  } = useProfile();

  if (!user || !stats) return <p>Loading...</p>;

  return(
    <div className="flex justify-center items-start pt-20 w-full min-h-screen px-4">
  <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-10 w-full max-w-6xl flex flex-col md:flex-row gap-10 border border-white/40 transition-transform hover:-translate-y-0.5 hover:shadow-2xl">
    
    <div className="flex flex-col items-center justify-center w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0 md:pr-8">
      <div className="w-36 h-36 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center text-5xl font-bold text-gray-700 shadow-inner mb-4">
        {user.name.charAt(0).toUpperCase()}
      </div>
      <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
      <p className="text-gray-500">{user.email}</p>
      <p className="text-sm text-gray-400 mt-2">
        Member Since:{" "}
        {new Date(user.created_at).toLocaleDateString("lt-LT", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
    <div className="flex-1 flex flex-col justify-center">
      <h2 className="text-2xl font-semibold mb-8 text-center md:text-left text-gray-800">
        Your Stats
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-xl p-6 shadow text-center hover:shadow-md transition">
          <p className="text-gray-500 text-sm">Quizzes</p>
          <p className="text-2xl font-semibold text-gray-800">{stats.totalQuizzes}</p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-xl p-6 shadow text-center hover:shadow-md transition">
          <p className="text-gray-500 text-sm">Avg. Score</p>
          <p className="text-2xl font-semibold text-indigo-600">
            {stats.averageScore.toFixed(1)}%
          </p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-xl p-6 shadow text-center hover:shadow-md transition">
          <p className="text-gray-500 text-sm">Correct</p>
          <p className="text-2xl font-semibold text-green-600">{stats.totalCorrect}</p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-xl p-6 shadow text-center hover:shadow-md transition">
          <p className="text-gray-500 text-sm">Incorrect</p>
          <p className="text-2xl font-semibold text-red-600">{stats.totalWrong}</p>
        </div>
      </div>

      <div className="text-gray-600 mt-10 text-center md:text-left">
        <p className="text-sm">
          <span className="font-medium text-gray-700">Last Game:</span>{" "}
          {stats.lastPlayed
            ? new Date(stats.lastPlayed).toLocaleString("lt-LT", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              })
            : "—"}
        </p>
      </div>
    </div>
  </div>
</div>

  );
  
};

export default Profile;