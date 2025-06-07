import React from 'react';
import { useParams } from 'react-router';

const Chat = () => {

  const { targetUserId } = useParams();


  return (
    <div className="flex flex-col h-screen w-full bg-cover bg-center relative" style={{ backgroundImage: "url('https://source.unsplash.com/featured/?abstract')" }}>

      {/* Messages */}
      <div className="relative flex-1 overflow-y-auto px-4 py-6 space-y-3 z-10">
        <div className="text-pink-700 bg-white bg-opacity-50 backdrop-blur-md px-4 py-2 rounded max-w-xs">Hello there!</div>
        <div className="text-right">
          <div className="inline-block text-white bg-pink-500 bg-opacity-80 px-4 py-2 rounded max-w-xs">
            Hey! How are you?
          </div>
        </div>
        {/* Add more mock messages here */}
      </div>

      {/* Message Input */}
      <div className="absolute bottom-15 left-0 right-0 flex items-center p-4 bg-black bg-opacity-50 backdrop-blur-md">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 rounded-l bg-white bg-opacity-80 focus:outline-none"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
