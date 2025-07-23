import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import Swal from 'sweetalert2';

const Registration = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {signupWithEmail, googleLogin} = useAuth();

  const navigate  = useNavigate()

  const onSubmit = async(data) => {
    try {
      await signupWithEmail(data.email, data.password);
      Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Register me!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Registration Successfull!",
          text: "Provide your email and password to login.",
          icon: "success"
        });
      }
    });
    navigate("/login");
    } catch (error) {
      console.error("Registration failed!", error.message)
    }
  }

  const handleGoogleLogin = async() =>{
    try {
      await googleLogin();
      navigate("/home");
    } catch (error) {
      console.error("Failed to login",error.message);
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Please Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              {...register("email", { required: "Email is required", pattern:{value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "Invalid email address"} })}
              type="email"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-gray-500`}
              placeholder="Enter Your Mail"
            />
            {errors.email && <p className="text-sm text-red-500 my-2">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              {...register("password", { required: "Password is required", minLength:{value: 6, message: "Password must be at least six characters"} })}
              type="password"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-gray-500`}
              placeholder="Enter Your Password"
            />
            {errors.password && <p className="text-sm text-red-500 my-2">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Sign Up
          </button>
          <div className="text-center space-y-4">
            <p className="text-gray-600">Or sign-up with</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={handleGoogleLogin} className="flex w-full items-center px-4 py-2 space-x-2 text-white bg-red-500 rounded hover:bg-red-600">
                <FaGoogle />
                <span>Google</span>
              </button>
              <button className="flex w-full items-center px-4 py-2 space-x-2 text-white bg-gray-500 rounded hover:bg-gray-600">
                <FaGithub />
                <span>GitHub</span>
              </button>
              <button className="flex w-full items-center px-4 py-2 space-x-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                <FaFacebook />
                <span>Facebook</span>
              </button>
            </div>
            <p className="text-gray-600">
              Have an account? Please{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
