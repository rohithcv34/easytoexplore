import { CheckIcon } from "lucide-react";

const packages = {
  basic: {
    title: "Basic Kashmir",
    price: "₹15,000",
    duration: "4 Days / 3 Nights",
    description: "A perfect short getaway to experience the essential beauty of Srinagar.",
    features: ["3 Star Hotel Stay", "Airport Transfers", "Shikara Ride on Dal Lake", "Breakfast Included"],
  },
  premium: {
    title: "Premium Paradise",
    price: "₹35,000",
    duration: "6 Days / 5 Nights",
    description: "Experience Kashmir with added comfort and exclusive local sightseeing.",
    features: ["4 Star Hotel Stay", "Private Cab for Sightseeing", "Houseboat Stay (1 Night)", "Breakfast & Dinner", "Gulmarg Gondola Phase 1"],
  },
  luxury: {
    title: "Luxury Retreat",
    price: "₹75,000",
    duration: "8 Days / 7 Nights",
    description: "The ultimate opulent Kashmiri experience with top-tier accommodations.",
    features: ["5 Star / Premium Heritage Hotel Stay", "Luxury SUV for Transport", "Premium Houseboat Stay", "All Meals Included", "Gondola Phase 1 & 2", "Spa Session"],
  }
};

export default function Packages() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-emerald-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose Your Kashmir Experience
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Whether you&apos;re looking for a quick escape or a luxurious retreat, we have the perfect package for you.
        </p>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {/* Basic Package */}
          <div className="rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10 hover:shadow-xl transition-shadow bg-white flex flex-col pt-8">
            <h3 className="text-lg font-semibold leading-8 text-gray-900">{packages.basic.title}</h3>
            <p className="mt-4 text-sm leading-6 text-gray-600">{packages.basic.description}</p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-gray-900">{packages.basic.price}</span>
              <span className="text-sm font-semibold leading-6 text-gray-600">/person</span>
            </p>
            <p className="mt-2 text-sm text-emerald-600 font-medium">{packages.basic.duration}</p>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 flex-1">
              {packages.basic.features.map((feature, index) => (
                <li key={index} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-emerald-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <a href="/enquiry" className="mt-8 block rounded-md bg-emerald-50 px-3 py-2 text-center text-sm font-semibold text-emerald-600 hover:bg-emerald-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">Book Basic</a>
          </div>

          {/* Premium Package */}
          <div className="rounded-3xl p-8 ring-2 ring-emerald-600 xl:p-10 bg-white hover:shadow-xl transition-shadow flex flex-col pt-8 relative">
            <div className="absolute top-0 right-6 -translate-y-1/2 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">Most Popular</div>
            <h3 className="text-lg font-semibold leading-8 text-emerald-600">{packages.premium.title}</h3>
            <p className="mt-4 text-sm leading-6 text-gray-600">{packages.premium.description}</p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-gray-900">{packages.premium.price}</span>
              <span className="text-sm font-semibold leading-6 text-gray-600">/person</span>
            </p>
            <p className="mt-2 text-sm text-emerald-600 font-medium">{packages.premium.duration}</p>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 flex-1">
              {packages.premium.features.map((feature, index) => (
                <li key={index} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-emerald-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <a href="/enquiry" className="mt-8 block rounded-md bg-emerald-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 shadow-md">Book Premium</a>
          </div>

          {/* Luxury Package */}
          <div className="rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10 bg-slate-900 hover:shadow-xl transition-shadow flex flex-col pt-8">
            <h3 className="text-lg font-semibold leading-8 text-white">{packages.luxury.title}</h3>
            <p className="mt-4 text-sm leading-6 text-gray-300">{packages.luxury.description}</p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-white">{packages.luxury.price}</span>
              <span className="text-sm font-semibold leading-6 text-gray-300">/person</span>
            </p>
            <p className="mt-2 text-sm text-emerald-400 font-medium">{packages.luxury.duration}</p>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 flex-1">
              {packages.luxury.features.map((feature, index) => (
                <li key={index} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-emerald-400" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <a href="/enquiry" className="mt-8 block rounded-md bg-white/10 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Book Luxury</a>
          </div>

        </div>
      </div>
    </div>
  );
}
