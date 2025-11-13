"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex flex-col justify-center items-center z-20 relative"
      >
        <span
          className={`block transition-all duration-300 ease-out h-1 w-6 rounded-sm bg-blue-500 ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`block transition-all duration-300 ease-out h-1 w-6 rounded-sm bg-blue-500 my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block transition-all duration-300 ease-out h-1 w-6 rounded-sm bg-blue-500 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full h-[calc(100vh-4rem)] bg-white text-black flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/">Home</Link>
          <Link href="/">Friends</Link>
          <Link href="/">Groups</Link>
          <Link href="/">stories</Link>
          <Link href="/">profile</Link>
          <Link href="/">Links</Link>
        </div>
      )}
    </div>
  );
}
