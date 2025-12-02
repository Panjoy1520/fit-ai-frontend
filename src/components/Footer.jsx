import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 text-slate-700 py-12">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">

    {/* Brand */}
    <div className="space-y-3">
      <h3 className="text-2xl font-extrabold tracking-tight">
        <span className="text-emerald-600">Fit</span>AI
      </h3>
      <p className="text-sm text-slate-500 max-w-xs">
        Smarter training. Healthier habits. Progress that lasts.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
        Quick Links
      </h4>
      <ul className="space-y-2 text-sm">
        <li className="hover:text-emerald-600 cursor-pointer">Home</li>
        <li className="hover:text-emerald-600 cursor-pointer">Features</li>
        <li className="hover:text-emerald-600 cursor-pointer">Pricing</li>
        <li className="hover:text-emerald-600 cursor-pointer">Testimonials</li>
        <li className="hover:text-emerald-600 cursor-pointer">About Us</li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
        Resources
      </h4>
      <ul className="space-y-2 text-sm">
        <li className="hover:text-emerald-600 cursor-pointer">Help Center</li>
        <li className="hover:text-emerald-600 cursor-pointer">Community</li>
        <li className="hover:text-emerald-600 cursor-pointer">Guides</li>
        <li className="hover:text-emerald-600 cursor-pointer">Updates</li>
      </ul>
    </div>

    {/* Socials */}
    <div>
      <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
        Follow Us
      </h4>
      <div className="flex gap-4 text-xl text-slate-600">
        <a href="#" className="hover:text-emerald-600 transition">🌐</a>
        <a href="#" className="hover:text-emerald-600 transition">🐦</a>
        <a href="#" className="hover:text-emerald-600 transition">📸</a>
        <a href="#" className="hover:text-emerald-600 transition">▶️</a>
      </div>
    </div>
  </div>

  {/* Bottom */}
  <div className="mt-12 pt-6 border-t border-slate-200 text-center">
    <p className="text-xs text-slate-500">
      © {new Date().getFullYear()} FitAI. All rights reserved.
    </p>
  </div>
</footer>

  )
}

export default Footer