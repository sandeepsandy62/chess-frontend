import React from "react";
import homeSvg from "../assets/Home.svg";
import { useState } from "react";
import axios from "axios";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const postUserUrl = "http://localhost:5000/register";
const loginUserUrl = "http://localhost:5000/login";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstName , setFirstName] = useState("");
  const [lastName , setLastName] = useState("");
  const [trigger , setTrigger] = useState(false);
  const [passwordWrong , setPasswordWrong] = useState("");
  const [emailWrong , setEmailWrong] = useState("");

  async function handleLogin(event) {
    event.preventDefault();
  
    try {
      const response = await axios.post(loginUserUrl, {
        email: email,
        password: password
      });
  
      if (response.status === 200) {
        console.log(response.data);
      } else {
        console.log("Wrong Credentials");
      }
    } catch (error) {
      if (error.response) {
        const statusCode = error.response.status;
        if (statusCode === 404) {
          setEmailWrong("Email not found");
        } else if (statusCode === 400) {
          setPasswordWrong("Incorrect password");
        }
      } else {
        console.log("Error occurred:", error);
      }
    }
  }
  
  

  async function handleRegister(event) {
    event.preventDefault();

    // Email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
      return; // Stop the login process if email format is invalid
    }

    // Clear email error if the format is correct
    setEmailError("");

    try {
      const response = await axios.post(postUserUrl, {
        firstname:firstName,
        lastname:lastName,
        email: email,
        password: password
      });
      if (response.status === 200) {
        console.log("User added successfully!");
        setTrigger(false);
        // Data saved successfully
      } else {
        console.log("Failed to save user data.");
        // Handle the failure case
      }
    } catch (error) {
      console.log("An error occurred:", error);
      // Handle the error appropriately
    }
  }

  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-contain bg-no-repeat bg-start"
        style={{
          backgroundImage: `url(${homeSvg})`,
          zIndex: -1,
        }}
      ></div>
  
      {/* Content */}
      <div className="flex flex-col items-center justify-between md:items-end relative">
        {!trigger ? (
          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            emailError={emailError}
            handleLogin={handleLogin}
            trigger={trigger}
            setTrigger={setTrigger}
            passwordWrong={passwordWrong}
            setPasswordWrong={setPasswordWrong}
            emailWrong = {emailWrong}
            setEmailWrong = {setEmailWrong}
          />
        ) : (
          <RegisterForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            emailError={emailError}
            handleRegister={handleRegister}
            trigger={trigger}
            setTrigger={setTrigger}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
          />
        )}
      </div>
    </div>
  );
  
}

export default Home;
