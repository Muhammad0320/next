"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex flex-col justify-center items-center"
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
    </div>
  );
}
