import React from "react";
import runningwomen from "../assets/greenrunning.png";

function Hero() {
  return (
    <section id="Home" className="w-full bg-slate-50 text-slate-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <p className="inline-block px-3 py-1 rounded-full border border-emerald-400/60 text-xs uppercase tracking-[0.2em] text-emerald-600 bg-emerald-50">
            AI-Powered Fitness · FitAI
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Train smarter.{" "}
            <span className="text-emerald-600">Feel stronger.</span> Every
            session.
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl">
            Enter your heart rate and activity level, and let FitAI build
            workouts that match your current energy, recovery, and goals—so
            coming back never feels like starting over.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-400 active:bg-emerald-600 transition shadow-md shadow-emerald-300/50">
              Start Tracking Now
            </button>
            <button className="px-6 py-3 rounded-lg border border-emerald-400/70 text-emerald-700 hover:bg-emerald-50 transition">
              Preview My AI Plan
            </button>
          </div>

          {/* Mini Stats / Highlights */}
          <div className="flex flex-wrap gap-6 pt-4 text-sm text-slate-700">
            <div>
              <p className="text-lg font-bold text-emerald-600">24/7</p>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Adaptive Coaching
              </p>
            </div>
            <div>
              <p className="text-lg font-bold text-emerald-600">+10k</p>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Smart Workouts
              </p>
            </div>
            <div>
              <p className="text-lg font-bold text-emerald-600">
                Heart · Activity
              </p>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Real-Time Inputs
              </p>
            </div>
          </div>
        </div>

        {/* Image placeholder */}
        <div className="relative">
          {/* Soft glow behind image */}
          <div className="absolute -inset-4 bg-emerald-200/40 blur-3xl pointer-events-none hidden sm:block" />

          <div className="relative px-0w-[600px] h-full sm:h-80 md:h-96 rounded-3xl  bg-linear-to-br from-white via-emerald-50 to-slate-100 flex items-center justify-center text-center">
            <img
              className="h-full rounded-3xl"
              src={runningwomen}
              alt="running_women"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
