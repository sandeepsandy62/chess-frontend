export default function RegisterForm({ email, setEmail, password, setPassword, emailError, handleRegister , trigger , setTrigger,firstName , setFirstName , lastName , setLastName}) {
    return (
      <div className="bg-white bg-opacity-0 rounded px-8 py-6 w-full max-w-md md:w-96 md:max-w-none" style={{ marginTop: "3%", marginRight: "20%" }}>
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8">
          Play Chess Online
        </h2>
        <form className="space-y-4">
        <div>
            <label className="block mb-1 font-bold">First Name</label>
            <input
              type="text"
              className="w-full border-0 border-gray-300 rounded px-3 py-2 bg-transparent"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
          </div>
          <div>
            <label className="block mb-1 font-bold">Last Name</label>
            <input
              type="text"
              className="w-full border-0 border-gray-300 rounded px-3 py-2 bg-transparent"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </div>
          <div>
            <label className="block mb-1 font-bold">Email</label>
            <input
              type="email"
              className="w-full border-0 border-gray-300 rounded px-3 py-2 bg-transparent"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {emailError && <p className="text-red-500">{emailError}</p>}
          </div>
  
          <div>
            <label className="block mb-1 font-bold">Password</label>
            <input
              type="password"
              className="w-full border-0 border-gray-300 rounded px-3 py-2 bg-transparent"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleRegister}
          >
            Register
          </button>
        </form>
      </div>
    );
  }