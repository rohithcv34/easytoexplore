"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Configuration for local gallery images.
// You can replace the image files in `frontend/public/images/` at any time!
// Add more objects here to instantly add them to the slider!
const localGalleryImages = [
  {
    id: "gulmarg",
    title: "Gulmarg",
    src: "/images/gulmarg.jpg",
    alt: "Beautiful view of Gulmarg",
  },
  {
    id: "pahalgam",
    title: "Pahalgam",
    src: "/images/pahalgam.jpg",
    alt: "Scenic landscape of Pahalgam",
  },
  {
    id: "sonamarg",
    title: "Sonamarg",
    src: "/images/sonamarg.jpg",
    alt: "Majestic mountains of Sonamarg",
  },
  {
    id: "local-sightseeing",
    title: "Local Sight Seeing",
    src: "/images/dal-lake.jpg", // Kept original image path, change if necessary
    alt: "Beautiful local sight seeing spots in Srinagar",
  },

];

export default function Home() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mx-auto max-w-2xl lg:mx-0"
            >
              <h1 className="mt-24 text-4xl font-extrabold tracking-tight text-[#132B45] sm:mt-10 sm:text-6xl lg:leading-tight">
                Discover the Paradise of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F56636] to-orange-400">Kashmir</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Welcome to EasyToExplore, your premier travel partner based in the heart of Srinagar. 
                Experience the breathtaking landscapes, serene lakes, and snow-capped peaks of Kashmir with our meticulously crafted travel packages.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/packages"
                  className="rounded-full bg-[#F56636] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F56636] transition-all duration-300"
                >
                  View Packages
                </Link>
                <Link href="/about" className="text-sm font-semibold leading-6 text-[#132B45] hover:text-[#F56636] transition-colors group">
                  Learn more <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0 z-0 h-[50vh] lg:h-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full w-full"
            >
              <Image
                className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:rounded-bl-[120px] shadow-2xl"
                src="/images/hero.jpg"
                alt="Dal Lake Srinagar"
                priority
                fill
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Glimpses of Paradise Section */}
      <div className="bg-slate-50 py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-3xl z-0"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between items-center mb-12"
          >
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#132B45] sm:text-5xl">Popular Destinations</h2>
              
            </div>
            
            {/* Slider Navigation Controls */}
            <div className="hidden md:flex items-center gap-4 mt-6 md:mt-0">
              <button 
                onClick={slideLeft}
                className="p-3 rounded-full bg-white shadow-md border border-gray-100 text-gray-600 hover:text-[#F56636] hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#F56636] active:scale-95"
                aria-label="Slide Left"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={slideRight}
                className="p-3 rounded-full bg-white shadow-md border border-gray-100 text-gray-600 hover:text-[#F56636] hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#F56636] active:scale-95"
                aria-label="Slide Right"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
          
          {/* Scrollable Container */}
          <div className="relative -mx-6 px-6 lg:-mx-8 lg:px-8">
            <div 
              ref={sliderRef}
              className="flex gap-8 overflow-x-auto pb-12 pt-4 snap-x snap-mandatory hide-scroll-bar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {localGalleryImages.map((image, idx) => (
                <Link 
                  key={image.id} 
                  href={`/destinations/${image.id}`}
                  className="snap-center sm:snap-start shrink-0 first:ml-0 w-[85vw] sm:w-[350px] block"
                >
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group relative overflow-hidden rounded-3xl shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2 aspect-[4/5] w-full h-full"
                  >
                    <Image 
                      src={image.src} 
                      alt={image.alt} 
                      fill
                      sizes="(max-width: 768px) 85vw, 350px"
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pr-6">
                      <h3 className="text-white font-bold text-2xl tracking-wide leading-tight">{image.title}</h3>
                      <div className="h-1 w-12 bg-[#F56636] rounded mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
            
            {/* Visual fade effect for the edges of the scroll container to hint more content */}
            <div className="hidden lg:block absolute top-0 -right-8 h-full w-24 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent pointer-events-none z-10"></div>
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            .hide-scroll-bar::-webkit-scrollbar {
              display: none;
            }
          `}} />
        </div>
      </div>
    </>
  );
}
