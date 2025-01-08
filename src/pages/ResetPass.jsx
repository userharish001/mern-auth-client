import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPass = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1); // Step 1: Email Form, Step 2: OTP Form, Step 3: New Password Form
  const inputRef = useRef([]);

  // Function to handle email submission
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://mern-auth-server-xifg.onrender.com/api/auth/verifyotp", { email });
      if (response.data.success) {
        alert(response.data.msg);
        setStep(2);
      }
    } catch (error) {
      alert(error.response?.data?.msg || "Something went wrong.");
    }
  };

  // Function to handle OTP submission
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://mern-auth-server-xifg.onrender.com/api/auth/verifyemail", { email, otp });
      if (response.data.success) {
        alert(response.data.msg);
        setStep(3);
      }
    } catch (error) {
      alert(error.response?.data?.msg || "Invalid OTP.");
    }
  };

  // Function to handle new password submission
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://mern-auth-server-xifg.onrender.com/api/auth/resetpassword", { email, otp, newPassword });
      if (response.data.success) {
        alert(response.data.msg);
        navigate("/login");
      }
    } catch (error) {
      alert(error.response?.data?.msg || "Failed to reset password.");
    }
  };

  // Function to handle OTP input
  const handleInput = (e, index) => {
    const value = e.target.value;
    if (!/\d/.test(value)) return;
    const otpArray = otp.split("");
    otpArray[index] = value;
    setOtp(otpArray.join(""));

    if (value && index < 5) {
      inputRef.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text").slice(0, 6);
    setOtp(pasteData);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {step === 1 && (
        <form onSubmit={handleEmailSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Reset Password</h2>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg"
          />
          <button type="submit" className="w-full bg-indigo-500 text-white p-3 rounded-lg">
            Send OTP
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleOtpSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Enter OTP</h2>
          <div className="flex justify-between" onPaste={handlePaste}>
            {Array(6).fill(0).map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-12 h-12 bg-gray-700 text-white text-center text-xl rounded-lg"
                ref={(el) => (inputRef.current[index] = el)}
                onInput={(e) => handleInput(e, index)}
              />
            ))}
          </div>
          <button type="submit" className="w-full bg-indigo-500 text-white p-3 mt-4 rounded-lg">
            Verify OTP
          </button>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handlePasswordSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Set New Password</h2>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg"
          />
          <button type="submit" className="w-full bg-indigo-500 text-white p-3 rounded-lg">
            Reset Password
          </button>
        </form>
      )}
    </div>
  );
};

export default ResetPass;
