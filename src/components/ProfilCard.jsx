import React from "react";

const ProfilCard = ({ nama, jurusan }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1">
      <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl font-bold mb-4">
        {nama.charAt(0)}
      </div>

      <h3 className="text-lg font-bold text-slate-800 mb-2">{nama}</h3>

      <span className="text-xs font-medium bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full border border-indigo-100">
        {jurusan}
      </span>
    </div>
  );
};

export default ProfilCard;
