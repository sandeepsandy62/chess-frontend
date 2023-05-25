import { FaGoogle, FaFacebook } from "react-icons/fa";

export default function LoginForm({ email, setEmail, password, setPassword, emailError, handleLogin ,trigger , setTrigger , passwordWrong , setPasswordWrong , emailWrong , setEmailWrong}) {
    function handleTrigger(){
        setTrigger(true);
    }
    
    return (
      <div className="bg-white bg-opacity-0 rounded px-8 py-6 w-full max-w-md md:w-96 md:max-w-none" style={{ marginTop: "3%", marginRight: "20%" }}>
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8">
          Play Chess Online
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-bold text-black">Email</label>
            <input
              type="email"
              className="w-full border-0 border-gray-300 rounded px-3 py-2 bg-transparent"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {emailError && <p className="text-white bg-black">{emailError}</p>}
            {emailWrong && (<p className="text-white bg-black">{emailWrong}</p>)}
          </div>
  
          <div>
            <label className="block mb-1 font-bold text-black">Password</label>
            <input
              type="password"
              className="w-full border-0 border-gray-300 rounded px-3 py-2 bg-transparent"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            {passwordWrong && <p className="text-white bg-black">{passwordWrong}</p>}
          </div>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center md:text-right">
          <button style={{ color: "blue" }}>
            Don't remember your password?
          </button>
          <h1 style={{ textAlign: "center", textDecorationThickness: "100%" }}>
            OR
          </h1>
        </div>
  
        {/* Single Sign-On */}
        <div className="mt-8 justify-center space-y-3">
          <button style={{ color: "black" }} onClick={handleTrigger}>Don't have an account?</button>
          <button className="flex w-80 items-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-5 rounded">
            <FaGoogle className="mr-2" />
            <span>Google</span>
          </button>
          <button className="flex w-80 items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-5 rounded">
            <FaFacebook className="mr-2" />
            <span>Facebook</span>
          </button>
        </div>
      </div>
    );
  }