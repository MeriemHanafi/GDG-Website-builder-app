"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, Eye, Settings } from "lucide-react";
import Image from "next/image";

const DashboardHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    "Elements",
    "Hero",
    "About",
    "Agenda",
    "Speakers",
    "Location",
    "Registration",
    "Sponsors",
    "Testimonials",
    "FAQ",
    "Contact",
    "Edit",
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0b4aad] text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16 relative">
        {/* MENU GAUCHE */}
        <div className="flex items-center gap-4">
          {/* Bouton hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>

          {/* Logo GDG */}
          <div className="flex items-center gap-2 font-semibold text-lg cursor-pointer">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={28}
              height={28}
            />
            <span>GDG Builder</span>
          </div>
        </div>

        {/* PROFIL ET PREVIEW */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/profile.png"
            alt="Profile"
            width={36}
            height={36}
            className="rounded-full border-2 border-white"
          />
          <button className="flex items-center gap-1 bg-white text-[#0b4aad] px-3 py-1 rounded-md hover:bg-gray-100 transition">
            <Eye className="w-4 h-4" />
            Preview
          </button>
        </div>

        {/* EXPORT DROITE */}
        <button className="flex items-center gap-1">
          <Settings className="w-4 h-4" />
          Export
        </button>
      </div>

      {/* MENU LATÉRAL */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Arrière-plan semi-transparent */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Panneau du menu */}
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
              className="fixed top-0 left-0 w-64 h-full bg-white text-gray-800 shadow-lg z-50 p-6 flex flex-col"
            >
              <h2 className="text-xl font-semibold mb-4 text-[#0b4aad]">
                Website Sections
              </h2>

              <ul className="space-y-3">
                {sections.map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        const el = document.getElementById(section.toLowerCase());
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="block w-full text-left hover:text-[#0b4aad] transition"
                    >
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default DashboardHeader;
