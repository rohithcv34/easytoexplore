import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#132B45] border-t border-[#132B45]">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col items-center justify-center gap-6 lg:px-8">

        {/* Centered Logo (Optional: If you want to bring it back later, you can put it here) */}

        {/* Center: Paragraphs and Copyright */}
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="text-center text-base font-semibold tracking-wide text-[#F56636] italic">
            Travel Easy. Dream Big.
          </p>
          <p className="text-center text-xs leading-relaxed text-gray-300">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Easy to Explore</span>. All rights reserved.<br />
            Based in Srinagar, Kashmir.
          </p>
        </div>

        {/* Social Links placeholder - also centered */}
        <div className="flex justify-center">
          {/* You can add your social media icon links here in the future! */}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
