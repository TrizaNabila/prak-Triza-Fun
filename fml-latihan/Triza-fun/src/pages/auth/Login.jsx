import axios from "axios";
import { useState } from "react";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({ email: "", password: "" });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((response) => {
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }
        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "An error occurred");
        } else {
          setError(err.message || "An unknown error occurred");
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
        Selamat Datang Kembali 👋
      </h2>
      <p className="text-center text-sm text-gray-400 mb-6">
        Masuk ke panel admin furniture Anda
      </p>

      {error && (
        <div className="bg-red-50 border border-red-200 mb-5 p-4 text-sm font-light text-gray-600 rounded-xl flex items-center">
          <BsFillExclamationDiamondFill className="text-red-500 me-2 text-lg flex-shrink-0" />
          {error}
        </div>
      )}

      {loading && (
        <div className="bg-gray-50 border border-gray-200 mb-5 p-4 text-sm rounded-xl flex items-center">
          <ImSpinner2 className="me-2 animate-spin text-hijau" />
          Mohon Tunggu...
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username / Email
          </label>
          <input
            type="text"
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-300 transition"
            placeholder="emilys"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-300 transition"
            placeholder="emilyspass"
            name="password"
            onChange={handleChange}
          />
          <p className="text-xs text-gray-400 mt-1">
            Demo: username <b>emilys</b> / password <b>emilyspass</b>
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2.5 px-4 rounded-xl transition duration-300 shadow"
        >
          Login
        </button>
      </form>

      <div className="mt-4 text-center text-sm text-gray-500">
        Belum punya akun?{" "}
        <Link to="/register" className="text-hijau font-semibold hover:underline">
          Daftar
        </Link>
      </div>
    </div>
  );
}
