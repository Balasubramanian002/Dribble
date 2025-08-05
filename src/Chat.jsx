import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import musk from "/home/hp/Documents/React/pro1/src/Musk1.jpeg";

const Chat = () => {
  return (
    <div className="">
    <div className="flex flex-col lg:flex-row min-h-screen font-sans">

      {/* Sidebar */}
      <div className="flex lg:flex-col w-full lg:w-16 bg-gray-100 p-4 items-center space-y-6 justify-between">
        <div className="w-6 h-6 bg-purple-400 rounded"></div>
        <div className="w-6 h-6 bg-purple-400 rounded"></div>
        <div className="w-6 h-6 bg-purple-400 rounded"></div>
        <div className="w-6 h-6 bg-purple-400 rounded"></div>
        <div className="w-6 h-6 bg-purple-400 rounded"></div>
        <div className="w-6 h-6 bg-purple-400 rounded"></div>
      </div>

      {/* Left Panel */}
      <div className="w-full lg:w-1/4 bg-white p-4 border-r border-gray-200">
        <div className="flex flex-col items-center">
          <img
            src={musk}
            className="w-16 h-16 rounded-full"
            alt="Profile"
          />
          <h2 className="mt-2 font-semibold">Elon Musk</h2>
          <div className="flex space-x-4 text-gray-500 mt-2">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">
            Friends Online <span className="text-xs">(23)</span>
          </h3>
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`https://randomuser.me/api/portraits/women/1${i}.jpg`}
                className="w-8 h-8 rounded-full border-2 border-green-400"
                alt="Online Friend"
              />
            ))}
          </div>
        </div>

        <div className="mt-6">
          <input
            type="text"
            placeholder="Search chat"
            className="w-full px-2 py-1 text-sm border rounded"
          />
          <div className="mt-4 space-y-2">
            {[
              { name: "John Shinoda", time: "08:30" },
              { name: "Dina Harrison", time: "12:31" },
              { name: "Mandy Guoles", time: "16:43" },
              { name: "Sam Pettersen", time: "18:29" },
            ].map((chat, i) => (
              <div key={i} className="flex items-center space-x-2">
                <img
                  src={`https://randomuser.me/api/portraits/men/1${i}.jpg`}
                  className="w-8 h-8 rounded-full"
                  alt="Chat Avatar"
                />
                <div className="text-sm flex-1">
                  <div className="font-semibold">{chat.name}</div>
                  <div className="text-xs text-gray-500">Hey man, how R U???</div>
                </div>
                <span className="text-xs text-gray-400">{chat.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Chat Section */}
      <div className="flex-1 bg-gray-50 p-4 flex flex-col overflow-auto">
        <div className="border-b border-gray-300 pb-2">
          <h2 className="text-lg font-semibold">Chat with Dina Harrison</h2>
        </div>
        <div className="flex-1 space-y-4 mt-4 overflow-y-auto">
          <div className="self-start bg-white px-4 py-2 rounded shadow w-fit">
            Hey Travis, would U like to drink some coffe with me?)
          </div>
          <div className="self-end bg-blue-100 px-4 py-2 rounded shadow w-fit">
            Shure! At 11:00 am ?
          </div>
          <div className="self-start bg-white px-4 py-2 rounded shadow w-fit">
            Emm, no. Maybe at 10? Cuz I have to finish my home work. My professor is jackass...
          </div>
          <div className="self-end bg-blue-100 px-4 py-2 rounded shadow w-fit">
            Wow, I heard that he is nerd, but never that he is a jackass. Anyway at 10 is ok. Would be my motivation get up earlier 😁
          </div>
          <div className="self-start bg-white px-4 py-2 rounded shadow w-fit">
            Yay:) I have tons stories about that man...OK, have a nice evening, see ya!
          </div>
          <div className="self-end bg-blue-100 px-4 py-2 rounded shadow w-fit">
            See ya 😎
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <input
            type="text"
            className="flex-1 border px-4 py-2 rounded"
            placeholder="Type your message"
          />
          <button className="bg-blue-500 text-white p-2 rounded-full">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/4 bg-white p-4 border-l border-gray-200 mt-4 lg:mt-0">
        <div className="flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            className="w-16 h-16 rounded-full"
            alt="Dina"
          />
          <h2 className="mt-2 font-semibold">Dina Harrison</h2>
          <div className="flex space-x-4 text-gray-500 mt-2">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Shared Files</h3>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex justify-between items-center text-sm text-gray-600 border-b py-2">
              <div>
                <div>PhotoDanver.jpg</div>
                <div className="text-xs text-gray-400">10.03.2021 at 11:32</div>
              </div>
              <div className="text-xs text-gray-400">175 Kb</div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Shared Links</h3>
          <div className="text-sm text-blue-500">Dribbble.com <span className="text-xs text-gray-400 ml-2">10:32pm</span></div>
          <div className="text-sm text-blue-500">Awwwards.com <span className="text-xs text-gray-400 ml-2">10:12pm</span></div>
        </div>
      </div>
    </div>
    
</div>
  );
};

export default Chat;
