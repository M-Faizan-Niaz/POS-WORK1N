import React from "react";

const Modal = ({ title, onClose, isOpen, children }) => {
  if (!isOpen) return null; // if model is not open
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1a1a1a] shadow-lg w-full max-w-lg mx-4 rounded-lg p-4">
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#333] ">
          <h2 className="text-gray-500 text-2xl hover:text-gray-300" onClick={onClose}>
            {title}
          </h2>
          <button>
           
          </button>
        </div>
        <div className="p-6">
            {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
