"use client";

import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { ArrowLeft } from "lucide-react";

// Mock data updated for Cloudinary Public IDs
const destinationMapping: Record<string, { title: string; image: string; description: string; gallery: string[] }> = {
  "gulmarg": {
    title: "Gulmarg",
    image: "easytoexplore/gulmarg",
    description: "Gulmarg is a famous hill station located in the Pir Panjal range of the Himalayas in the union territory of Jammu and Kashmir. Known for its breathtaking natural beauty, lush green meadows, snow-covered mountains, and pleasant climate, Gulmarg is one of the most popular tourist destinations in India. In winter, it becomes a major center for skiing and other snow sports. One of the main attractions of Gulmarg is the Gulmarg Gondola, which is among the highest cable cars in the world. The gondola ride takes visitors from Gulmarg to Kongdoori and then to Apharwat Peak in two phases. During the ride, tourists can enjoy stunning panoramic views of the mountains, forests, and valleys below. The Gondola ride offers a thrilling and unforgettable experience, making it a highlight of any visit to Gulmarg.",
    gallery: ["easytoexplore/about-1", "easytoexplore/about-2"]
  },
  "pahalgam": {
    title: "Pahalgam",
    image: "easytoexplore/pahalgam",
    description: "Pahalgam, the Valley of Shepherds, offers stunning river views and lush greenery. Perfect place to document your Betaab Valley itineraries.",
    gallery: ["easytoexplore/about-2", "easytoexplore/about-3"]
  },
  "sonamarg": {
    title: "Sonamarg",
    image: "easytoexplore/sonamarg",
    description: "Sonamarg, the Meadow of Gold. Explain the beauty of the Thajiwas Glacier and the Sindh River here.",
    gallery: ["easytoexplore/about-3", "easytoexplore/about-1"]
  },
  "local-sightseeing": {
    title: "Local Sight Seeing",
    image: "easytoexplore/dal-lake",
    description: "Discover the heart of Kashmir. Write about the majestic Dal Lake, Shikara rides, and the beautiful Mughal Gardens here.",
    gallery: ["easytoexplore/hero", "easytoexplore/about-2"]
  }
};

export default function DestinationPage({ params }: { params: { id: string } }) {
  const idValue = params.id.toLowerCase();
  
  const destinationData = destinationMapping[idValue] || {
    title: idValue.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    image: "easytoexplore/hero",
    description: `Create an enchanting description for ${idValue.split("-").join(" ")} here!`,
    gallery: ["easytoexplore/hero", "easytoexplore/hero"]
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Dynamic Header Image */}
      <div className="relative w-full h-[50vh] md:h-[60vh] bg-gray-900">
        <CldImage 
          src={destinationData.image} 
          alt={destinationData.title}
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-black/20 to-transparent"></div>
        
        {/* Back navigation */}
        <div className="absolute top-8 left-8 z-10">
          <Link href="/#destinations" className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white font-medium transition-colors">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
        </div>

        <div className="absolute bottom-12 left-8 md:left-24 z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-lg">
            {destinationData.title}
          </h1>
        </div>
      </div>

      {/* Editable Content Area */}
      <div className="max-w-4xl mx-auto px-6 py-16 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col gap-8">
          
          <div className="prose prose-lg prose-emerald max-w-none">
            <h2 className="text-[#132B45] font-bold text-3xl">About {destinationData.title}</h2>
            <p className="text-gray-600 leading-relaxed text-xl">
              {destinationData.description}
            </p>
          </div>

          <hr className="border-gray-100" />
          
          <div>
            <h3 className="text-2xl font-bold text-[#132B45] mb-6">Explore the Beauty</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {destinationData.gallery.map((imgSrc, idx) => (
                 <div key={idx} className="relative aspect-video rounded-2xl overflow-hidden shadow-lg group">
                    <CldImage 
                      src={imgSrc} 
                      alt={`${destinationData.title} Gallery ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                 </div>
               ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center">
             <Link
                href="/enquiry"
                className="rounded-full bg-[#F56636] px-10 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/30 hover:bg-[#d54d1b] hover:-translate-y-1 transition-all"
              >
                Plan this Trip
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
