import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#132B45] border-t border-[#132B45]">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col items-center justify-center gap-8 lg:px-8">

        {/* Social Links - Using SVGs to avoid library version issues */}
        <div className="flex justify-center gap-6">
          {/* Instagram */}
          <Link href="https://www.instagram.com/easy_to_explore?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="text-gray-400 hover:text-[#F56636] transition-all transform hover:scale-110">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </Link>

          {/* Facebook */}
          <Link href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-[#F56636] transition-all transform hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.14H7v4.21h2.5V23h5V11.67h3.35l.42-4.21z"></path>
            </svg>
          </Link>

          {/* Twitter (X) */}
          <Link href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-[#F56636] transition-all transform hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </Link>

          {/* Youtube */}
          <Link href="https://youtube.com" target="_blank" className="text-gray-400 hover:text-[#F56636] transition-all transform hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
            </svg>
          </Link>
        </div>

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

      </div>
    </footer>
  );
};

export default Footer;
