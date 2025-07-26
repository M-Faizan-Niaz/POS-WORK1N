import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../https/index";
import { useSnackbar } from "notistack"; // ✅ if you're using notistack for toasts

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { enqueueSnackbar } = useSnackbar(); // ✅ required for toasts

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate(formData);
  };

  const loginMutation = useMutation({
    mutationFn: login, // login returns a promise
    onSuccess: (res) => {
      const { data } = res;
      console.log("Login Success:", data);
      enqueueSnackbar("Login successful!", { variant: "success" });
      // Redirect or store token if needed
    },
    onError: (error) => {
      const errorMessage = error?.response?.data?.message || "Login failed";
      enqueueSnackbar(errorMessage, { variant: "error" });
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
            Employee Email
          </label>
          <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Employee email"
              className="bg-transparent flex-1 text-white focus:outline-none"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
            Employee Password
          </label>
          <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="bg-transparent flex-1 text-white focus:outline-none"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg mt-6 py-3 text-lg bg-yellow-400 text-gray-900 font-bold"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
