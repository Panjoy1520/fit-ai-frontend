import React, { useState } from "react";
import { testimonials } from "../assets/index"; 

function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const t = testimonials[current];

  return (
    <section
      id="Testimonials"
      className="w-full bg-white text-slate-900 py-20 border-t border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-emerald-600 font-semibold uppercase tracking-wide">
            Transformations
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Real people. Real results.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            FitAI adapts to every lifestyle and starting point. Swipe through
            real transformations from our community.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Arrow Buttons */}
          <button
            type="button"
            onClick={handlePrev}
            className="text-black hidden sm:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-green-400 hover:bg-green-300 shadow-sm px-4"
          >
            
            ›
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="hidden sm:flex absolute -right-10 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-green-400 text-slate-700 hover:bg-green-300 shadow-sm"
          >
            ›
          </button>

          {/* Single Slide */}
          <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)] gap-8 items-center">
            {/* Card with Before / After */}
            <div className="rounded-2xl bg-slate-50 border border-emerald-100 shadow-md hover:shadow-lg transition overflow-hidden">
              <div className="grid grid-cols-2">
                {/* Before */}
                <div className="relative h-56 sm:h-64 bg-slate-200">
                  <img
                    src={t.beforeImage}
                    alt={`${t.name} before transformation`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/70 text-xs font-semibold text-slate-50">
                    Before
                  </div>
                </div>

                {/* After */}
                <div className="relative h-56 sm:h-64 bg-slate-200">
                  <img
                    src={t.afterImage}
                    alt={`${t.name} after transformation`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-500 text-xs font-semibold text-white">
                    After
                  </div>
                </div>
              </div>

              {/* Quick stats row */}
              <div className="px-4 py-3 bg-white border-t border-slate-200 flex items-center justify-between text-xs sm:text-sm text-slate-700">
                <div>
                  <p className="font-semibold text-emerald-600">
                    {t.stat1Label}
                  </p>
                  <p className="text-slate-500">{t.stat1Desc}</p>
                </div>
                <div>
                  <p className="font-semibold text-emerald-600">
                    {t.stat2Label}
                  </p>
                  <p className="text-slate-500">{t.stat2Desc}</p>
                </div>
                <div>
                  <p className="font-semibold text-emerald-600">
                    {t.stat3Label}
                  </p>
                  <p className="text-slate-500">{t.stat3Desc}</p>
                </div>
              </div>
            </div>

            {/* Text Experience */}
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                  {t.name} · {t.age} · {t.role}
                </p>
                <h3 className="text-xl font-bold text-slate-900">
                  “{t.title}”
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.bodyMain}
              </p>
              <p className="text-sm text-slate-500">{t.bodySecondary}</p>

              {/* Carousel controls for mobile + dots */}
              <div className="flex items-center justify-between pt-4">
                {/* Mobile arrows */}
                <div className="flex gap-2 sm:hidden">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="h-9 w-9 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 shadow-sm"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="h-9 w-9 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 shadow-sm"
                  >
                    ›
                  </button>
                </div>

                {/* Dots */}
                <div className="flex gap-2 ml-auto">
                  {Array.from({ length: total }).map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrent(index)}
                      className={`h-2.5 rounded-full transition ${
                        index === current
                          ? "w-6 bg-emerald-500"
                          : "w-2.5 bg-slate-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsCarousel;
