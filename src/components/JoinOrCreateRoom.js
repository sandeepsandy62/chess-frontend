import React from "react";

function JoinOrCreateRoom() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-200 to-blue-300">
      <h1 className="text-4xl font-bold text-white mb-8">Play Chess With Your Friends</h1>
      <div className="bg-white rounded-lg p-8 shadow-md">
        <form className="space-y-6">
          <h2 className="text-2xl font-bold">Join A Room</h2>
          <input
            type="text"
            className="border-2 border-gray-400 px-4 py-2 w-full rounded"
            placeholder="Room ID"
          />
          <div className="flex justify-between space-x-4">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded">
              Create Room
            </button>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded">
              Join Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JoinOrCreateRoom;
