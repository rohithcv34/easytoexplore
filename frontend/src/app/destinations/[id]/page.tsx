import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

// Mock data to provide aesthetic placeholders based on the URL parameter
const destinationMapping: Record<string, { title: string; image: string; description: string }> = {
  "gulmarg": {
    title: "Gulmarg",
    image: "/images/gulmarg.jpeg",
    description: "Welcome to Gulmarg, the Meadow of Flowers. Add your gorgeous descriptions here about the Gondola rides, skiing, and panoramic views.",
  },
  "pahalgam": {
    title: "Pahalgam",
    image: "/images/pahalgam.jpeg",
    description: "Pahalgam, the Valley of Shepherds, offers stunning river views and lush greenery. Perfect place to document your Betaab Valley itineraries.",
  },
  "sonamarg": {
    title: "Sonamarg",
    image: "/images/sonamarg.jpeg",
    description: "Sonamarg, the Meadow of Gold. Explain the beauty of the Thajiwas Glacier and the Sindh River here.",
  },
  "local-sightseeing": {
    title: "Local Sight Seeing",
    image: "/images/dal-lake.jpg",
    description: "Discover the heart of Kashmir. Write about the majestic Dal Lake, Shikara rides, and the beautiful Mughal Gardens here.",
  }
};

export default function DestinationPage({ params }: { params: { id: string } }) {
  // Normalize the id and fetch data from our simple mapping above
  const idValue = params.id.toLowerCase();
  
  // If destination is found in our object, use its data, otherwise use a very generic fallback
  const destinationData = destinationMapping[idValue] || {
    title: idValue.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    image: "/images/hero.jpg",
    description: `Create an enchanting description for ${idValue.split("-").join(" ")} here!`,
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Dynamic Header Image */}
      <div className="relative w-full h-[50vh] md:h-[60vh] bg-gray-900">
        <Image 
          src={destinationData.image} 
          alt={destinationData.title}
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-black/20 to-transparent"></div>
        
        {/* Back navigation */}
        <div className="absolute top-8 left-8 z-10">
          <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white font-medium transition-colors">
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
            <h2 className="text-emerald-700">About {destinationData.title}</h2>
            <p className="text-gray-600 leading-relaxed text-xl">
              {destinationData.description}
            </p>
            <p className="text-gray-500 mt-4">
              [ Developer Note: You can easily add more rich details, paragraphs, features, or lists right here inside <code>src/app/destinations/[id]/page.tsx</code>! ]
            </p>
          </div>

          <hr className="border-gray-100" />
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Gallery Placeholder</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {/* Gallery Placeholders so they know where to add more photos */}
              <div className="bg-gray-100 aspect-video rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300 text-gray-400">
                <span>Add Additional Photo Here</span>
              </div>
              <div className="bg-gray-100 aspect-video rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300 text-gray-400">
                <span>Add Additional Photo Here</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
             <Link
                href="/enquiry"
                className="rounded-full bg-emerald-600 px-10 py-4 text-base font-bold text-white shadow-lg hover:bg-emerald-500 hover:-translate-y-1 transition-all"
              >
                Plan this Trip
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
