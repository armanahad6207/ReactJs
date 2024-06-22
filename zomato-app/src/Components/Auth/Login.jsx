import PropTypes from "prop-types";
import { useState } from "react";

const LOGIN_URL = "http://localhost:4000/api/auth/login";

function LoginPopUp({ closePopUp }) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(LOGIN_URL, {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const contentType = response.headers.get("content-type");

      if (response.ok) {
        const data =
          contentType && contentType.includes("application/json")
            ? await response.json()
            : await response.text();

        console.log("Login successful", data);
        closePopUp();
      } else {
        const errorMessage =
          contentType && contentType.includes("application/json")
            ? await response.json()
            : await response.text();

        throw new Error(JSON.stringify(errorMessage));
      }
    } catch (error) {
      console.error("There was a problem with the login:", error);
      const errorObj = JSON.parse(error.message);
      setError(errorObj.token || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-2xl mb-4 text-[#192F60] font-bold">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={closePopUp}
              className="mr-4 text-black"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

LoginPopUp.propTypes = {
  closePopUp: PropTypes.func.isRequired,
};

export default LoginPopUp;
