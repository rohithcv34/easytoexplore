const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {/* Social links can be added here */}
        </div>
        <div className="mt-8 md:order-1 md:mt-0 flex flex-col md:flex-row items-center gap-4">
          <p className="text-center text-sm font-semibold tracking-wide text-[#132B45] italic">
            Travel Easy. Dream Big.
          </p>
          <span className="hidden md:block text-gray-300">|</span>
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-[#F56636]">Easy to Explore</span>. All rights reserved. Based in Srinagar, Kashmir.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
