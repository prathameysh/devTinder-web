import React from 'react'

const Login = () => {
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Email ID:</span>
              </div>
              {/* 
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              // ❌ emailId and setEmailId are not defined
              */}
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                // value={emailId}
                // onChange={(e) => setEmailId(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              {/* 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // ❌ password and setPassword are not defined
              */}
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="card-actions justify-center m-2">
            {/* onClick={handleLogin} */}
            {/* ❌ handleLogin function is not defined */}
            <button className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
