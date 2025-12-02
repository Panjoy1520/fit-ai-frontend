import React from "react";

function Pricing() {
  return (
    <section
      id="Pricing"
      className="w-full bg-slate-50 text-slate-900 py-20 border-t border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-emerald-600 font-semibold uppercase tracking-wide">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Choose a plan that matches your goals.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Start simple or go all-in with AI coaching. You can upgrade,
            downgrade, or cancel anytime — your progress stays with you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Plan 1 – Starter */}
          <div className="flex flex-col rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="p-6 space-y-3">
              <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                Starter
              </p>
              <h3 className="text-xl font-bold text-slate-900">Get moving</h3>
              <p className="text-sm text-slate-600">
                For beginners building consistency with guided sessions.
              </p>

              <div className="pt-4">
                <span className="text-3xl font-extrabold text-slate-900">
                  ₹499
                </span>
                <span className="text-sm text-slate-500"> / month</span>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>✔ Basic AI-generated workouts</li>
                <li>✔ Heart rate & activity logging</li>
                <li>✔ Weekly progress summary</li>
                <li>✖ No advanced performance insights</li>
              </ul>
            </div>

            <div className="px-6 pb-6 mt-auto">
              <button className="w-full px-4 py-2.5 rounded-lg border border-emerald-500 text-emerald-700 font-semibold hover:bg-emerald-50 transition">
                Choose Starter
              </button>
            </div>
          </div>

          {/* Plan 2 – Pro (Recommended) */}
          <div className="relative flex flex-col rounded-2xl bg-white border-2 border-emerald-500 shadow-lg shadow-emerald-200/60 scale-[1.02]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-500 text-xs font-semibold text-white shadow">
              Most Popular
            </div>

            <div className="p-6 space-y-3">
              <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                Pro
              </p>
              <h3 className="text-xl font-bold text-slate-900">
                Train with precision
              </h3>
              <p className="text-sm text-slate-600">
                Ideal for busy professionals who want smart, adaptive coaching.
              </p>

              <div className="pt-4">
                <span className="text-3xl font-extrabold text-slate-900">
                  ₹999
                </span>
                <span className="text-sm text-slate-500"> / month</span>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>✔ Everything in Starter</li>
                <li>✔ Adaptive workouts based on recovery</li>
                <li>✔ Live heart rate training zones</li>
                <li>✔ Advanced progress & trend insights</li>
                <li>✔ Priority in-app support</li>
              </ul>
            </div>

            <div className="px-6 pb-6 mt-auto">
              <button className="w-full px-4 py-2.5 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-400 transition">
                Choose Pro
              </button>
            </div>
          </div>

          {/* Plan 3 – Elite */}
          <div className="flex flex-col rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="p-6 space-y-3">
              <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                Elite
              </p>
              <h3 className="text-xl font-bold text-slate-900">Go all in</h3>
              <p className="text-sm text-slate-600">
                For athletes and serious lifters who want full control & depth.
              </p>

              <div className="pt-4">
                <span className="text-3xl font-extrabold text-slate-900">
                  ₹1,799
                </span>
                <span className="text-sm text-slate-500"> / month</span>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>✔ Everything in Pro</li>
                <li>✔ Custom training blocks & cycles</li>
                <li>✔ Deep performance & recovery analytics</li>
                <li>✔ Early access to new AI features</li>
                <li>✔ 1:1 review calls (limited slots)</li>
              </ul>
            </div>

            <div className="px-6 pb-6 mt-auto">
              <button className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-800 font-semibold hover:bg-slate-50 transition">
                Choose Elite
              </button>
            </div>
          </div>
        </div>

        {/* Little note */}
        <p className="mt-6 text-center text-xs sm:text-sm text-slate-500">
          All plans include secure data sync and the ability to pause your
          membership anytime.
        </p>
      </div>
    </section>
  );
}

export default Pricing;
