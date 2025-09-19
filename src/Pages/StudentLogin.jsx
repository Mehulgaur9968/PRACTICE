import React, { useState } from "react";

function StudentLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: integrate student auth; for now just log values
    // eslint-disable-next-line no-console
    console.log({ role: "student", email, password });
  }

  return (
    <div className="container py-5" style={{ minHeight: "60vh" }}>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="card shadow-sm border-0" style={{ backgroundColor: "#e9ecef" }}>
            <div className="card-body p-4 p-md-5">
              <h5 className="mb-4">Student Login</h5>
              <form onSubmit={handleSubmit}>
                <div className="row g-3 align-items-center">
                  <div className="col-12 col-md-6">
                    <label htmlFor="student-email" className="form-label">Email Id<span className="text-danger">*</span></label>
                    <div className="input-group">
                      <input
                        id="student-email"
                        type="email"
                        className="form-control"
                        placeholder="student@mail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <span className="input-group-text">@</span>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="student-password" className="form-label">Password<span className="text-danger">*</span></label>
                    <div className="input-group">
                      <input
                        id="student-password"
                        type="password"
                        className="form-control"
                        placeholder="Enter Your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <span className="input-group-text"><i className="fa fa-lock" aria-hidden="true"></i></span>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <button type="submit" className="btn btn-primary px-4">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;


