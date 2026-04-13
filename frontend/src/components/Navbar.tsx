import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex shrink-0 items-center">
              {/* Ensure your logo file is placed in your frontend/public/images/ directory and is named logo.jpg or logo.png. Update the src below if it's a png */}
              <div className="relative w-40 h-20">
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
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link href="/" className="text-[#132B45] border-b-2 border-transparent hover:border-[#F56636] hover:text-[#F56636] px-1 pt-1 text-sm font-medium transition-colors">Home</Link>
            <Link href="/packages" className="text-[#132B45] border-b-2 border-transparent hover:border-[#F56636] hover:text-[#F56636] px-1 pt-1 text-sm font-medium transition-colors">Packages</Link>
            <Link href="/about" className="text-[#132B45] border-b-2 border-transparent hover:border-[#F56636] hover:text-[#F56636] px-1 pt-1 text-sm font-medium transition-colors">About Us</Link>
            <Link href="/enquiry" className="ml-4 inline-flex items-center justify-center rounded-full bg-[#F56636] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#D54D1B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F56636] transition-colors">Enquire Now</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
