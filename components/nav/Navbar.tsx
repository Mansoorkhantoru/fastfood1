'use client';

import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
  const restaurantWhatsApp = '923001234567'; // Apna WhatsApp number yahan likhein

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left Side: Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-red-600 shadow-md transition group-hover:scale-105">
            <Image
              src="/images/hero1.webp"
              alt="Restaurant Logo"
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <span className="text-2xl font-black tracking-tight text-gray-900 group-hover:text-red-600 transition">
            NAWAB<span className="text-red-600">PIZZA</span>
          </span>
        </Link>

        {/* Right Side: WhatsApp & Cart Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Direct WhatsApp Contact Button */}
          {/* <a
            href={`https://wa.me/${restaurantWhatsApp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-2.5 sm:px-4 sm:py-2.5 rounded-full font-bold text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
            title="Chat on WhatsApp"
          >
            <span className="text-lg">💬</span>
            <span className="hidden sm:inline">WhatsApp Us</span>
          </a> */}

          {/* Navbar Cart Button */}
          <button
            onClick={onCartClick}
            className="relative bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-full font-bold text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
          >
            <span className="text-lg">🛒</span>
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="bg-white text-red-600 px-2 py-0.5 rounded-full text-xs font-black">
                {cartCount}
              </span>
            )}
          </button>

        </div>
      </div>
    </header>
  );
}