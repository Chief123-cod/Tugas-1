import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProfilCard from "./components/ProfilCard";
import dataMahasiwa from "./components/dataMahasiwa";
import "./index.css";

const App = () => {
  const [activeNav, setActiveNav] = useState("Home");

  const getMainBackground = () => {
    if (activeNav === "Home") return "bg-slate-100";
    if (activeNav === "About") return "bg-emerald-100/50";
    if (activeNav === "Project") return "bg-indigo-100/50";
    if (activeNav === "Contact") return "bg-rose-100/50";
    return "bg-slate-100";
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ease-in-out ${getMainBackground()}`}
    >
      <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />

      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-slate-900 text-center mb-10 tracking-tight">
          Daftar Mahasiswa
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataMahasiwa.map((mahasiwa) => (
            <ProfilCard
              key={mahasiwa.id}
              nama={mahasiwa.nama}
              jurusan={mahasiwa.jurusan}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
