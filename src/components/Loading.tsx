import React from "react";

const Loading: React.FC = () => {
  // Global loading component

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white bg-opacity-80">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
      <p className="mt-4 text-lg text-gray-700">Yükleniyor...</p>
    </div>
  );
};

export default Loading;
