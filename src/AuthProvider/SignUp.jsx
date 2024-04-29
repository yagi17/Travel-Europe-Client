import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

// SignUp component definition
const SignUp = () => {
  // Hooking into authentication service and navigation hooks
  const { createUser, googleLogIn, gitHubLogin } = UseAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const naviGate = location?.state || "/";

  // Handler for social media sign-up/login
  const handleSocial = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        const email = result.user.email;
        const creationTime = result.user.metadata.creationTime;
        const user = { email, creationTime };

        // Post the user data to backend
        fetch("https://travel-europe-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.insertedId) {
              // Notify user of success
              Swal.fire({
                title: "User has been created successfully!",
                icon: "success",
              });
            }
          });

        // Redirect user after successful login
        navigate(naviGate);
      }
    });
  };

  // State for form error messages
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Validate password strength
  const validatePassword = (password) => {
    // Check for uppercase letter
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    // Check for lowercase letter
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter";
    }
    // Check for length
    if (password.length < 6) {
      return "Password must be at least 6 characters long";
    }
    return "";
  };

  // Update error message based on password input
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const passwordError = validatePassword(password);
    setPasswordError(passwordError);
  };

  // Handle sign-up form submission
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const password = form.password.value;

    const passwordError = validatePassword(password);
    if (passwordError) {
      setPasswordError(passwordError);
      return;
    }
    
    setEmailError();

    // Create user using authentication service
    createUser(email, password)
      .then((result) => {
        navigate("/");
        // console.log(result.user);
        const createTime = result.user.metadata.creationTime;
        const user = { email, password, creationTime: createTime };

        // Post the user data to backend
        fetch("https://travel-europe-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "User has been created successfully!",
                icon: "success",
              });
            }
          });
      })
      .catch((error) => {
        // console.log(error.message);
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          setEmailError("Email already in use");
        }
      });
  };

  // Toggle password visibility
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
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
                {emailError && (
                  <p className="text-red-500 text-xs mt-1 pl-2">{emailError}</p>
                )}
              </div>
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
                {emailError && (
                  <p className="text-red-500 text-xs mt-1 pl-2">{emailError}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="url"
                  name="image"
                  placeholder="Image URL"
                  className="input input-bordered"
                  required
                />
                {emailError && (
                  <p className="text-red-500 text-xs mt-1 pl-2">{emailError}</p>
                )}
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
                  onChange={handlePasswordChange} // Add this line
                />
                {passwordError && (
                  <p className="text-red-500 text-xs pt-1 ml-2">
                    {passwordError}
                  </p>
                )}
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
