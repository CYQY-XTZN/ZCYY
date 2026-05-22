import Link from 'next/link';
import Image from 'next/image';
import { publicPath } from '../lib/paths';

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-semibold text-gray-800 tracking-wide">
              <Image src={publicPath("/logo.png")} width={112} height={48} className="w-28" alt="Logo"/>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-10 text-base text-gray-700">
            <a href="#hero" className="hover:text-gray-900 transition-colors">
              首页
            </a>
            <a href="#about" className="hover:text-gray-900 transition-colors">
              关于我们
            </a>
            <a href="#business" className="hover:text-gray-900 transition-colors">
              核心业务
            </a>
            <a href="#partnership" className="hover:text-gray-900 transition-colors">
              合作共赢
            </a>
          </div>

          {/* CTA Button */}
          <Link
              href="/sub-pages/jinXiuDigital"
              className="bg-[#B1F101] hover:bg-[#A0E000] text-gray-900 font-medium px-6 py-2.5 rounded-full flex items-center gap-2 transition-all shadow-sm hover:shadow-md"
            >
              金秀道地瑶药数智产业园
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5">
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

        </div>
      </div>
    </nav>
  );
}
