import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";
import { useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const { googleLogIn, gitHubLogin, signIn } = UseAuth();
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

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email);
    signIn(email, password)
      .then((result) => {
        if (result.user) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Logged in successfully",
          });
          navigate(naviGate);
        }
      })
      .catch((error) => {
        // console.log(error);
        if (error.message === "Firebase: Error (auth/invalid-credential).") {
          Swal.fire({
            icon: "error",
            title: "Invalid credential",
            text: "Wrong email or password",
            footer: '<a href="/login">Try again</a>',
          });
        }
        if (
          error.message ===
          "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
        ) {
          Swal.fire({
            icon: "error",
            title: "Too many request",
            text: "Try again letter",
          });
        }
      });
  };

  //  toggle show password
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <div className="hero h-full">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign in!</h1>
          </div>
          <div className="card shrink-0 w-96 shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body pb-0">
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
              <span>Don't have an account? </span>
              <Link to="/signup" className="link link-hover text-blue-500">
                Create an account
              </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
