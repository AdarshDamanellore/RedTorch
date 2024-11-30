import axios from "axios";
import React, { useState } from "react";
import { AiOutlineMobile } from "react-icons/ai";
import { GiChampagneCork } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { routeNames } from "../../constants";

const OTPVerification = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [errors, setErrors] = useState({ mobile: "", otp: "" });
  const [resendCountdown, setResendCountdown] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  // const handleMobileSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateMobileNumber()) {
  //     alert("OTP sent to " + mobileNumber);
  //     setStep(2);
  //     startResendCountdown();
  //   }
  // };

  const handleMobileSubmit = async (e) => {
    e.preventDefault();

    if (validateMobileNumber()) {
      try {
        const response = await axios.post(
          "https://electronic-ecommerce.onrender.com/api/generateOTP",
          {
            phoneNumber: mobileNumber,
          }
        );

        if (response.status === 200 && response.data.status === "SUCCESS") {
          const otp = response.data.data.otp;
          localStorage.setItem("otp", otp);

          alert(`${response.data.message} to ${mobileNumber}`);
          setStep(2);
          startResendCountdown();
        } else {
          alert("Failed to send OTP. Please try again.");
        }
      } catch (error) {
        console.error("Error sending OTP:", error);
        alert("An error occurred while sending OTP.");
      }
    }
  };

  const validateMobileNumber = () => {
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobileNumber)) {
      setErrors({
        ...errors,
        mobile: "Please enter a valid 10-digit mobile number.",
      });
      return false;
    }
    setErrors({ ...errors, mobile: "" });
    return true;
  };

  const handleOtpChange = (index, value) => {
    if (isNaN(value) || value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerify = async () => {
    if (otp.every((digit) => digit !== "")) {
      // setLoading(true);
      try {
        const otpCode = otp.join("");
        const response = await axios.post(
          "https://electronic-ecommerce.onrender.com/api/verifyOtpOtp",
          {
            phoneNumber: mobileNumber,
            otp: otpCode,
          }
        );
        if (response.status === 200 && response.data.status === "SUCCESS") {
          const customerId = response.data.data.customerId;
          localStorage.setItem("customerId", customerId);
          alert(response.data.message);
          navigate(routeNames.signup);
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            otp: "OTP verification failed. Please try again.",
          }));
        }
      } catch (error) {
        setErrors({
          ...errors,
          otp: "OTP verification failed. Please try again.",
        });
        console.error("Error verifying OTP:", error);
      }
    } else {
      setErrors({ ...errors, otp: "Please enter the complete OTP" });
    }
  };

  const startResendCountdown = () => {
    setIsResendDisabled(true);
    setResendCountdown(30);
    const countdown = setInterval(() => {
      setResendCountdown((prev) => {
        if (prev === 1) {
          clearInterval(countdown);
          setIsResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleResendOtp = () => {
    if (!isResendDisabled) {
      alert("OTP resent to " + mobileNumber);
      setOtp(Array(6).fill(""));
      startResendCountdown();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 backdrop-blur-sm">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        {step === 1 && (
          <div className="text-center flex flex-col space-y-8">
            <h2 className="text-xl text-gray-400 font-semibold">
              Create Account
            </h2>
            <AiOutlineMobile className="mx-auto text-4xl text-red-500" />
            <div>
              <p className="text-lg text-gray-700">
                Enter your mobile number to create an account.
              </p>
              <p className="text-gray-500">
                We will send you a one-time password (OTP)
              </p>
            </div>
            <div className="flex flex-col gap-6 justify-center items-center">
              <input
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Enter mobile number"
                className="sm:w-full lg:w-56 p-2 border text-gray-500 border-gray-300 rounded mt-4"
              />
              {errors.mobile && (
                <p className="text-red-500 text-base">{errors.mobile}</p>
              )}
              <button
                onClick={handleMobileSubmit}
                className="sm:w-full lg:w-36 py-2 bg-blue-500 text-white rounded-lg hover:bg-red-600"
              >
                Send
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="text-center flex flex-col justify-center items-center space-y-8">
            <h2 className="text-xl text-gray-400 font-semibold">
              Verify Account
            </h2>
            <GiChampagneCork className="mx-auto text-4xl text-yellow-500 mb-4" />
            <p className="text-gray-500">
              We have sent the OTP to {mobileNumber}
            </p>
            <div className="flex justify-center space-x-2 mb-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  id={`otp-${index}`}
                  className="w-12 p-2 text-center text-gray-500 border border-gray-300 rounded-lg"
                  maxLength="1"
                />
              ))}
            </div>
            {errors.otp && (
              <p className="text-red-500 text-base">{errors.otp}</p>
            )}
            <p className="text-base text-gray-500">
              If you didn't receive a code!{" "}
              <span
                className={`${
                  isResendDisabled
                    ? "text-gray-400"
                    : "text-red-500 cursor-pointer"
                }`}
                onClick={handleResendOtp}
              >
                Resend {isResendDisabled && `in ${resendCountdown}s`}
              </span>
            </p>
            <button
              onClick={handleVerify}
              className="sm:w-full lg:w-36 py-2 bg-blue-500 text-white rounded-lg hover:bg-red-600"
            >
              Verify
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OTPVerification;
