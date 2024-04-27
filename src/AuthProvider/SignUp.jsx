import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const { createUser, googleLogIn, gitHubLogin } = UseAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const naviGate = location?.state || "/";
  const handleSocial = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate(naviGate);
      }
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);
    createUser(email, password).then((result) => {
      navigate("/");
      console.log(result.user);
      const createTime = result.user.metadata.creationTime;
      const user = { email, password, creationTime: createTime };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: "User has been created successfully!",
              icon: "success",
            });
          }
        });
    });
  };

  //   toggle show password
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="hero h-full">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up!</h1>
          </div>
          <div className="card shrink-0 w-96 shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body pb-0">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <button
                  type="button"
                  className={`absolute top-1/2 right-[16px] -translate-y-1/2 w-[30px] h-[30px] bg-no-repeat bg-center bg-[length:85%] ${
                    showPassword
                      ? 'bg-[url("/hide.svg")]'
                      : 'bg-[url("/show.svg")]'
                  }`}
                  onClick={togglePassword}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <input
                value="Sign Up"
                type="submit"
                className="btn btn-block bg-slate-700 text-white hover:bg-slate-700 hover:text-base"
              />
            </form>
            <div className="text-center space-x-4">
              <div className="divider">Continue With</div>
              <button
                onClick={() => handleSocial(googleLogIn)}
                className="hover:scale-105 text-4xl"
              >
                <FcGoogle />
              </button>
              <button
                onClick={() => handleSocial(gitHubLogin)}
                className="hover:scale-105 text-4xl"
              >
                <FaGithub />
              </button>
            </div>
            <label className="text-center mb-6">
              <span>Already have an account? </span>
              <Link to="/login" className="link link-hover text-blue-500">
                LogIn
              </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
