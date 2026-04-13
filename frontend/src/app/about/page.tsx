import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About EasyToExplore</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are a premier travel agency located in the breathtaking valley of Srinagar, Kashmir. 
            Our mission is to help travelers from across the globe discover the untouched beauty, 
            rich culture, and warm hospitality of &quot;Paradise on Earth.&quot;
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
                  <span className="text-white">📍</span>
                </div>
                Local Expertise
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Being based in Srinagar gives us the distinct advantage of knowing Kashmir inside out. From hidden gems to popular spots, we ensure a truly authentic experience.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
                  <span className="text-white">⭐</span>
                </div>
                Premium Service
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">We don&apos;t compromise on quality or comfort. Whether it&apos;s a basic getaway or a luxury retreat, our services are meticulously tailored to meet high standards.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
                  <span className="text-white">🤝</span>
                </div>
                Trust & Safety
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Your safety and comfort form the core string of our operations. With 24/7 support throughout your journey, you explore with peace of mind.</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
