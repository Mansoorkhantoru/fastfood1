'use client';

import Link from 'next/link';

export default function Footer() {
  const restaurantWhatsApp = '923159687096'; 
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <h3 className="text-2xl font-black tracking-tight text-white">
              CHEESY<span className="text-red-600">BITES</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Serving the juiciest burgers, hot & cheesy pizzas, and mouth-watering deals right to your doorstep. Order instantly via WhatsApp!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-red-500 transition">Home</Link>
              </li>
              <li>
                <a href="#menu-section" className="hover:text-red-500 transition">Special Deals</a>
              </li>
              <li>
                <a href="#menu-section" className="hover:text-red-500 transition">Pizzas & Burgers</a>
              </li>
              <li>
                <a href="#menu-section" className="hover:text-red-500 transition">Party Packs</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📞 Phone / WhatsApp: +92 3159687096</li>
              <li>📍 Location: Main Commercial Market, Pakistan</li>
              <li>🕒 Timing: 12:00 PM – 02:00 AM</li>
            </ul>
          </div>

          {/* WhatsApp Direct Chat */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Instant Ordering</h4>
            <p className="text-sm text-gray-400 mb-4">
              Have questions or want custom bulk orders? Chat with us directly on WhatsApp!
            </p>
            <a
              href={`https://wa.me/${restaurantWhatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2.5 rounded-xl shadow-md transition text-sm cursor-pointer"
            >
              <span>💬</span> Chat on WhatsApp
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Cheesy Bites. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Built with Next.js & Tailwind CSS 🚀</p>
        </div>
      </div>
    </footer>
  );
}