import React from 'react'

function Features() {
  return (
    <section
        id="Features"
        className="w-full bg-slate-50 text-slate-900 py-20 border-t border-slate-200"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-emerald-600 font-semibold uppercase tracking-wide">
              Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Everything you need to train with confidence.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              From real-time metrics to adaptive workout plans, FitAI keeps you
              focused, informed, and motivated — every time you show up.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="rounded-2xl bg-white border border-emerald-100 shadow-sm hover:shadow-md transition p-6 flex flex-col gap-4">
              {/* Icon / Visual */}
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <span className="text-2xl">💓</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Real-Time Heart Insight
              </h3>
              <p className="text-sm text-slate-600">
                Track your heart rate live and let FitAI adjust your workout
                intensity so you’re always training in the optimal zone — not
                overdoing it, not underperforming.
              </p>

              {/* Small “metric bar” UI */}
              <div className="mt-2 space-y-2">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Current Zone</span>
                  <span className="text-emerald-600 font-semibold">Cardio</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full w-3/4 bg-linear-to-r from-emerald-400 to-emerald-600" />
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl bg-white border border-emerald-100 shadow-sm hover:shadow-md transition p-6 flex flex-col gap-4">
              {/* Icon / Visual */}
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Adaptive Workout Engine
              </h3>
              <p className="text-sm text-slate-600">
                Every session is generated based on your recent activity,
                fatigue, and recovery patterns — so your plan evolves as you do.
              </p>

              {/* Simple “plan preview” UI */}
              <div className="mt-2 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Today’s Focus</span>
                  <span className="font-semibold text-emerald-600">
                    Lower Body
                  </span>
                </div>
                <div className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2">
                  <p className="text-slate-700">
                    3 × Squats · 3 × Lunges · 2 × Core Finishers
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl bg-white border border-emerald-100 shadow-sm hover:shadow-md transition p-6 flex flex-col gap-4">
              {/* Icon / Visual */}
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Progress You Can See
              </h3>
              <p className="text-sm text-slate-600">
                Visualize your consistency, intensity, and recovery trends to
                stay accountable and excited about your progress.
              </p>

              {/* Little “chart-like” visual */}
              <div className="mt-2 h-16 flex items-end gap-1">
                <div className="flex-1 rounded-lg bg-emerald-100 h-6" />
                <div className="flex-1 rounded-lg bg-emerald-200 h-9" />
                <div className="flex-1 rounded-lg bg-emerald-300 h-12" />
                <div className="flex-1 rounded-lg bg-emerald-400 h-10" />
                <div className="flex-1 rounded-lg bg-emerald-500 h-14" />
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Last 5 sessions · trending{" "}
                <span className="text-emerald-600 font-semibold">up</span> 🚀
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Features