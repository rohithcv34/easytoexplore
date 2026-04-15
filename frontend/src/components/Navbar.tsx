"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Packages', href: '/packages' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">

          {/* Logo Area */}
          <div className="flex items-center">
            <Link href="/" className="flex shrink-0 items-center">
              <div className="relative w-36 h-16 sm:w-44 sm:h-20">
                <Image
                  src="/images/logo.jpg"
                  alt="Easy To Explore Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on Mobile and Tablet (up to lg) */}
          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#132B45] font-semibold text-sm hover:text-[#F56636] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F56636] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="/enquiry"
              className="inline-flex items-center justify-center rounded-full bg-[#F56636] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 hover:bg-[#D54D1B] hover:-translate-y-0.5 transition-all"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-[#132B45] hover:bg-gray-100 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-6 h-0.5 bg-[#132B45] transition-all duration-300 ${isOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-[#132B45] transition-all duration-300 top-3 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-[#132B45] transition-all duration-300 ${isOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu "Tile" Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-20 inset-x-0 bg-[#132B45] border-b border-[#132B45] shadow-2xl lg:hidden overflow-hidden z-40"
          >
            <div className="px-4 pt-4 pb-10 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-4 text-lg font-bold text-white hover:bg-white/10 hover:text-[#F56636] rounded-2xl transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 px-6">
                <Link
                  href="/enquiry"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full rounded-2xl bg-[#F56636] px-6 py-5 text-lg font-bold text-white shadow-xl shadow-orange-500/30 hover:bg-[#D54D1B] active:scale-95 transition-all text-center"
                >
                  Plan Your Trip Now
                </Link>
              </div>

              <div className="pt-8 flex justify-center gap-8 text-white/40">
                <span className="text-xs uppercase tracking-widest font-bold">Paradise Awaits</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
