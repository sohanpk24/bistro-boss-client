import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const {createUser, updateUserProfile} = useContext(AuthContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
     const logged= result.user;
     console.log(logged);
     updateUserProfile(data.name, data.photoURL)
     .then(()=>{
        console.log('user profile update');
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User created Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/')
     })
     .catch( error => console.log(error))
    })
  };
  console.log(watch("example"));

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-2/5">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-yellow-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  name="photoURL"
                  placeholder="PhotoURL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-yellow-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-yellow-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === "required" && (
                  <span className="text-yellow-600">password is required </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-yellow-600">
                    password is must be 6 characters{" "}
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-yellow-600">
                    password is must be less then 20 characters{" "}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-yellow-600">
                    password is must have one uppercase, one lower case, one
                    number and spacial character{" "}
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <div className="flex items-center justify-center text-center pb-4">
            <span>Already have an account?  <Link className="text-yellow-500 font-semibold" to='/login'> Please Login </Link></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
