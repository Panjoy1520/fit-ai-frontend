import React from "react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "react-oauth2-code-pkce";
import { useDispatch } from "react-redux";
import { logout, setCredentials } from "../store/authSlice";

function Navbar() {
  const { token, tokenData, logIn, logOut, isAuthenticated } =
    useContext(AuthContext);
  const dispatch = useDispatch();
  const [authReady, setAuthReady] = useState(false);

  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "About", "Features", "Testimonials", "Pricing"];

  useEffect(() => {
    if (token) {
      dispatch(setCredentials({ token, user: tokenData }));
      setAuthReady(true);
    }
  }, []);

  return (
    <nav className="w-full bg-white text-slate-900 fixed top-0 left-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold cursor-pointer tracking-tight">
          <span className="text-emerald-600">Fit</span>AI
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer relative group text-sm font-medium text-slate-700 hover:text-slate-900 transition"
            >
              <span
                onClick={() => {
                  const section = document.getElementById(item);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                  setOpen(false);
                }}
              >
                {item}
              </span>

              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}

          {/* Login Button */}
          <button
            className="ml-4 px-5 py-2 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-400 active:bg-emerald-600 transition shadow-sm shadow-emerald-300/60"
            onClick={() => {
              logIn();
            }}
          >
            Login
          </button>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-900 focus:outline-none text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white px-6 overflow-hidden transition-all duration-300 border-t border-slate-200 ${
          open ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4">
          {menuItems.map((item) => (
            <li
              key={item}
              className="pb-2 border-b border-slate-200 text-slate-700 text-sm font-medium"
            >
              {item}
            </li>
          ))}

          <button
            className="w-full mt-2 px-5 py-2 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-400 active:bg-emerald-600 transition shadow-sm shadow-emerald-300/60"
            onClick={() => {
              logIn();
            }}
          >
            Login
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
