import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./Authentication";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  //   console.log(useContext());

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
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
              //   text: "Login Now",
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
      <div className="hero h-full border bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center border lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up!</h1>
          </div>
          <div className="card shrink-0 w-96 w border p-0 shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
