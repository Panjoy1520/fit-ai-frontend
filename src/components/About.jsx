import React from "react";
import aboutfit from "../assets/aboutfit.png";

function About() {
  return (
    <section
      id="About"
      className="w-full bg-white text-slate-900 py-20 border-t border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-emerald-200/40 blur-3xl pointer-events-none hidden sm:block" />

          <div className="relative w-full h-72 sm:h-80 md:h-96 rounded-2xl bg-linear-to-br from-emerald-50 via-white to-slate-100 border border-emerald-300/60 flex items-center justify-center">
            <p className="text-emerald-700 text-sm sm:text-base text-center">
              <img
                className="relative w-[600px] h-[380px] rounded-2xl"
                src={aboutfit}
                alt="aboutfitai"
              />
            </p>
          </div>
        </div>

        {/* Right Side — Text Content */}
        <div className="space-y-6">
          <p className="text-emerald-600 font-semibold uppercase tracking-wide">
            About FitAI
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Designed to help you stay consistent, one session at a time.
          </h2>

          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            FitAI analyzes your heart rate, activity level, recovery, and energy
            patterns to give you personalized workout guidance. No generic
            routines, no guesswork — just science-backed recommendations
            tailored to your body’s real needs.
          </p>

          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Whether you're training for strength, endurance, or simply building
            healthier habits, FitAI adapts to you. As your performance evolves,
            your plan evolves. Because fitness isn’t just about pushing harder —
            it’s about training smarter.
          </p>

          <div className="flex gap-4 pt-2">
            <button className="px-6 py-3 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-400 transition shadow-lg shadow-emerald-300/40">
              Learn More
            </button>
            <button className="px-6 py-3 rounded-lg border border-emerald-600 text-emerald-700 hover:bg-emerald-50 transition">
              Our Vision
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
