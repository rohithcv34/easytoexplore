"use client";

import { CldImage } from 'next-cloudinary';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
} as const;

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
} as const;

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
} as const;

const safetyImages = [
  { src: "easytoexplore/image", alt: "Safety Record 1" },
  { src: "easytoexplore/image1", alt: "Safety Record 2" },
];

export default function About() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % safetyImages.length);
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev - 1 + safetyImages.length) % safetyImages.length);
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-7xl py-24 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-[#132B45] sm:text-6xl text-balance">
              About <span className="text-[#F56636]">EasyToExplore</span>
            </h1>
            <p className="mt-8 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Based in Srinagar, our Destination Management Company has been delivering trusted travel services across the breathtaking Kashmir Valley for the past six years. With strong local expertise and a passion for hospitality, we specialize in creating seamless travel experiences, covering popular destinations like Gulmarg, Pahalgam, and the iconic Dal Lake. Our focus is to provide personalized itineraries, reliable ground support, and memorable journeys that showcase the true beauty and culture of Kashmir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section 1: Local Expertise */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-12 gap-y-16 lg:grid-cols-2">
            <motion.div {...fadeInLeft}>
              <h2 className="text-3xl font-bold tracking-tight text-[#132B45] sm:text-4xl">Our Journey & Local Expertise</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Being based in Srinagar gives us the distinct advantage of knowing Kashmir inside out. From hidden gems to popular spots, we ensure a truly authentic experience. We don&apos;t just book trips; we create memories that last a lifetime.
              </p>
              <div className="mt-8">
                <div className="flex items-center gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F56636]/10 text-[#F56636]">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-lg text-gray-600 font-medium">
                      Born in Srinagar, we provide authentic local insights you won&apos;t find in any guidebook.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeInRight} className="relative">
              <div className="aspect-[4/3] relative overflow-hidden rounded-2xl shadow-2xl">
                <CldImage
                  src="easytoexplore/about-1"
                  alt="Srinagar landscapes"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-2xl bg-[#F56636]/10 -z-10 animate-pulse"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section 2: Premium Service */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-12 gap-y-16 lg:grid-cols-2">
            <motion.div {...fadeInLeft} className="lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-[#132B45] sm:text-4xl">Premium Service & Quality</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We don&apos;t compromise on quality or comfort. Whether it&apos;s a basic getaway or a luxury retreat, our services are meticulously tailored to meet high standards. Every detail of your journey is managed with precision.
              </p>
              <div className="mt-8">
                <div className="flex items-center gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F56636]/10 text-[#F56636]">
                    <span className="text-xl">⭐</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#132B45]">Unmatched Comfort</h3>
                    <p className="text-gray-500">Hand-picked stays and seamless transport for your peace of mind.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeInRight} className="lg:order-1">
              <div className="aspect-[4/3] relative overflow-hidden rounded-2xl shadow-2xl">
                <CldImage
                  src="easytoexplore/image2"
                  alt="Premium travel experience"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 h-32 w-32 rounded-2xl bg-[#132B45]/5 -z-10 animate-pulse"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section 3: Full Width Trust & Safety Slider */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-[#132B45] sm:text-5xl mb-6">Trust & Safety Above All</h2>
            <p className="text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Your safety and comfort form the core of our operations. With 24/7 support throughout your journey, you explore with peace of mind. We are registered and committed to ethical travel practices.
            </p>
          </motion.div>

          <div className="relative group max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-2xl bg-white border-8 border-white">
            <div className="aspect-video relative overflow-hidden bg-gray-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIdx}
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <CldImage
                    src={safetyImages[currentIdx].src}
                    alt={safetyImages[currentIdx].alt}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center pointer-events-none">
                <button
                  onClick={prevSlide}
                  className="pointer-events-auto p-4 rounded-full bg-white/40 backdrop-blur-md text-[#132B45] hover:bg-[#F56636] hover:text-white transition-all shadow-lg active:scale-90"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={nextSlide}
                  className="pointer-events-auto p-4 rounded-full bg-white/40 backdrop-blur-md text-[#132B45] hover:bg-[#F56636] hover:text-white transition-all shadow-lg active:scale-90"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>

              {/* Slide Counter Overlay */}
              <div className="absolute bottom-6 left-6 px-4 py-2 bg-[#132B45]/70 backdrop-blur-md rounded-full text-white text-sm font-bold shadow-lg">
                {currentIdx + 1} / {safetyImages.length}
              </div>
            </div>
          </div>

          {/* Legend/Dots Below */}
          <div className="flex justify-center gap-3 mt-10">
            {safetyImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIdx(i)}
                className={`h-2 transition-all duration-300 rounded-full ${i === currentIdx ? 'w-10 bg-[#F56636]' : 'w-2 bg-gray-300 hover:bg-[#132B45]'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl px-6 lg:px-8 text-center"
        >
          <div className="rounded-3xl bg-[#132B45] px-6 py-16 sm:py-24 lg:px-8 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 h-64 w-64 rounded-full bg-[#F56636]/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl"></div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6 leading-tight">Ready to Explore Paradise?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              Join thousands of happy travelers who have experienced the magic of Kashmir with EasyToExplore.
            </p>
            <Link
              href="/enquiry"
              className="rounded-full bg-[#F56636] px-10 py-4 text-base font-bold text-white shadow-lg hover:bg-[#d54d1b] transition-all transform hover:scale-105 active:scale-95 inline-block"
            >
              Start Your Journey
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
