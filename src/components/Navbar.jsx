import React, { useState } from "react";

const TopNavbar = () => {
  const [activeNav, setActiveNav] = useState("Home");
  const navItems = ["Home", "About", "Project", "Contact"];

  const [title, setTitle] = useState("Next Portofolio");
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-slate-100 shadow-sm transition-all">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight text-slate-800">
            {title}
            <span className="text-indigo-500">.</span>
          </span>
        </div>

        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = activeNav === item;
            return (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ease-in-out ${
                  isActive
                    ? "text-indigo-600 bg-indigo-50/80 shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                {item}

                {isActive && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default TopNavbar;
