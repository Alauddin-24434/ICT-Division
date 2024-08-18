import { useState } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { IoMdCloseCircleOutline } from "react-icons/io";

const MessengerModalSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative float-right">
      {/* Messenger Icon */}
      <button
        onClick={toggleModal}
        className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
      >
        <FaTelegramPlane size={24} />
      </button>

      {/* Modal */}
      {isOpen && (                                 
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={toggleModal}
          />
          <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 hover:text-[#6265da] rounded-full text-gray-800 text-xl"
            >
              <IoMdCloseCircleOutline />
            </button>

            <div className="w-full max-w-md bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md p-6 space-y-6">
              {/* Chat header */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-xl font-semibold text-gray-700 dark:text-gray-300">MA</span>
                </div>
                <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">Chat with Md Alauddin</h1>
              </div>

              {/* Chat messages area */}
              <div className="h-96 overflow-y-auto p-4 rounded-xl space-y-4 bg-gray-50 dark:bg-gray-700">
                {/* Received message */}
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">MA</span>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md max-w-xs">
                    <p className="text-sm text-gray-700 dark:text-gray-300">Hey there! How's it going?</p>
                  </div>
                </div>

                {/* Sent message */}
                <div className="flex items-start justify-end space-x-2">
                  <div className="bg-[#6265da] p-3 rounded-lg shadow-md max-w-xs">
                    <p className="text-sm text-white">Hi John! I'm doing well, thanks for asking. How about you?</p>
                  </div>
                </div>
              </div>

              {/* Message input area */}
              <div className="flex items-center space-x-4">
                <div className="flex-grow">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full p-4 rounded-xl bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
                  />
                </div>
                <button className="p-4 rounded-xl bg-[#6265da] text-white focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessengerModalSection;
