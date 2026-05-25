import React from "react";

function page() {
  return (
    <section className="flex flex-col min-h-screen p-4 sm:p-6 lg:px-12">
      <header className="mb-4 ">
        <nav className="flex items-center justify-between">
          <h1 className="font-bold text-xl">Logo</h1>
          <ul className="hidden md:flex gap-6 shadow-sm px-8 rounded-full ">
            <li className="hover:font-bold cursor-pointer duration-300 transition-transform">
              Home
            </li>
            <li className="hover:font-bold cursor-pointer duration-300 transition-transform">
              About
            </li>
            <li className="hover:font-bold cursor-pointer duration-300 transition-transform">
              Contact
            </li>
          </ul>
          <div className="hidden md:flex gap-6 ">
            <button className="hover:bg-gray-200 duration-300 border shadow-sm text-black px-4 py-1 rounded">
              Login
            </button>
            <button className="hover:bg-gray-800 duration-300 bg-black text-white px-4 py-1 rounded">
              Sign Up
            </button>
          </div>
        </nav>
      </header>
      <div className="flex-1 ">
        {/* herosection image */}
        <div className="relative h-[calc(100vh-30vh)] overflow-hidden rounded-3xl shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/heroImage.png)" }}
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative z-10 flex h-full flex-col justify-center gap-6 px-6 py-12 text-white md:px-12 lg:px-20">
            <span className="block w-fit rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
              School management
            </span>
            <h2 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Manage students, teachers, and classes with confidence
            </h2>
            <p className="max-w-xl text-sm text-white/80 sm:text-base">
              A modern dashboard for administrators to simplify attendance,
              scheduling, and communication.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90">
                Get Started
              </button>
              <button className="rounded-full border border-white/80 bg-white/10 px-6 py-3 text-sm text-white transition hover:bg-white/15">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
