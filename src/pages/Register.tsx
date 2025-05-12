import React from "react";

const Register = () => {
    return(
        <div className="flex items-center justify-center min-h-screen">
        <form className="bg-white px-12 py-10 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl mb-4 font-bold text-center">Login</h2>
        <input
              type="username"
              placeholder="Username"
              className="w-full p-2 border mb-3 rounded"
            //   value={email}
            //   onChange={e => setEmail(e.target.value)}
        />
        <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border mb-3 rounded"
            //   value={email}
            //   onChange={e => setEmail(e.target.value)}
        />
        <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border mb-4 rounded"
        //   value={password}
        //   onChange={e => setPassword(e.target.value)}
        />
        <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2 border mb-4 rounded"
        //   value={password}
        //   onChange={e => setPassword(e.target.value)}
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Register</button>
        </form>
        </div>
    );
}

export default Register;