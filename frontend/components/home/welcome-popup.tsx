'use client';

import { useEffect, useState } from 'react';

const SEEN_KEY = 'welcome-popup-seen';

export const WelcomePopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SEEN_KEY)) return;
    const timer = setTimeout(() => setOpen(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    sessionStorage.setItem(SEEN_KEY, '1');
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4" onClick={close}>
      <div
        className="grid w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative flex flex-col justify-end bg-gradient-to-br from-sky-200 via-sky-100 to-orange-100 p-8">
          <span className="absolute left-6 top-6 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700">
            Special Welcome
          </span>
          <div className="rounded-2xl bg-white/90 p-5 shadow">
            <div className="flex items-center gap-4">
              <img src="/images/shivam.jpg" alt="Shivam Gupta" className="h-20 w-20 rounded-full object-cover" />
              <div>
                <p className="text-lg font-bold text-slate-900">Shivam Gupta</p>
                <p className="text-sm font-semibold text-sky-700">Software Developer</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Greater Noida, India. B.Tech in CSE (AI &amp; ML), MERN stack developer.
            </p>
          </div>
        </div>

        <div className="space-y-5 p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Welcome</p>
          <h3 className="text-3xl font-bold tracking-tight text-slate-900">Before You Go!</h3>
          <p className="text-slate-700">
            Special thanks to <span className="font-semibold text-slate-900">Shivam Gupta</span> (Software Developer).
          </p>
          <p className="text-sm text-slate-600">
            <span className="font-semibold">About:</span> Software Developer with a B.Tech in CSE (AI &amp; ML, CGPA 8.3)
            and 8 months of internship experience building full-stack web applications with React, Node.js and MongoDB.
            Solved 200+ DSA problems on LeetCode.
          </p>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold text-emerald-700">Thank you</p>
            <p className="text-sm text-emerald-800">
              Thank you for visiting! Let&apos;s find your next career step together.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={close}
              className="flex-1 rounded-xl bg-gradient-to-r from-sky-600 to-orange-500 px-4 py-2.5 font-semibold text-white"
            >
              Got it
            </button>
            <button
              onClick={close}
              className="flex-1 rounded-xl border border-slate-300 px-4 py-2.5 font-semibold text-slate-700"
            >
              Remind later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
