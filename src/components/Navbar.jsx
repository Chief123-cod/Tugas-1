import React from "react";

const Navbar = ({ activeNav, setActiveNav }) => {
  const navItems = ["Home", "About", "Project", "Contact"];

  const getThemeStyles = (nav) => {
    if (nav === "Home") {
      return {
        headerBg: "bg-white/80",
        borderColor: "border-slate-200",
        titleColor: "text-slate-800",
        accentDot: "bg-sky-500",
        activeBtn: "text-sky-700 bg-sky-50",
      };
    }
    if (nav === "About") {
      return {
        headerBg: "bg-emerald-50/70",
        borderColor: "border-emerald-200",
        titleColor: "text-emerald-900",
        accentDot: "bg-emerald-500",
        activeBtn: "text-emerald-800 bg-emerald-200/80",
      };
    }
    if (nav === "Project") {
      return {
        headerBg: "bg-indigo-50/70",
        borderColor: "border-indigo-200",
        titleColor: "text-indigo-900",
        accentDot: "bg-indigo-500",
        activeBtn: "text-indigo-800 bg-indigo-200/80",
      };
    }
    if (nav === "Contact") {
      return {
        headerBg: "bg-rose-50/70",
        borderColor: "border-rose-200",
        titleColor: "text-rose-900",
        accentDot: "bg-rose-500",
        activeBtn: "text-rose-800 bg-rose-200/80",
      };
    }

    return {
      headerBg: "bg-white/80",
      borderColor: "border-slate-200",
      titleColor: "text-slate-800",
      accentDot: "bg-sky-500",
      activeBtn: "text-sky-700 bg-sky-50",
    };
  };

  const theme = getThemeStyles(activeNav);

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-md border-b shadow-md transition-all duration-500 ${theme.headerBg} ${theme.borderColor}`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-500 ${theme.accentDot}`}
          />
          <span
            className={`text-lg font-bold tracking-tight transition-colors duration-500 ${theme.titleColor}`}
          >
            {activeNav}
          </span>
        </div>

        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeNav === item;
            return (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive
                    ? `${theme.activeBtn} font-semibold shadow-sm`
                    : "text-slate-600 hover:text-slate-900 hover:bg-black/5"
                }`}
              >
                {item}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
