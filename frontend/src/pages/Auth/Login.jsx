import { useState } from "react";
import AuthLayout from "../../components/layout/AuthLayout";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Password is required.");
      return;
    }

    setError("");
    // Perform login logic here
  };

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please log in to continue.
        </p>

        <form onSubmit={handleLogin}>
          <Input
            value={email}
            s
            onChange={({ target }) => setEmail(target.value)}
            placeholder="Williamson@gmail.com"
            label="Email Address"
            type="text"
          />

          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            type="password"
            placeholder="Min 8 Characters"
          />

          {error && <p className="text-red-500">{error}</p>}

          <button type="submit" className="cursor-pointer btn-primary">
            Login
          </button>

          <p className="text-[13px] text-slate-800 mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary font-medium underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
