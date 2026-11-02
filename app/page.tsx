'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/nav/Navbar';
import MenuSection from '@/components/home/MenuSection';
import Footer from '@/components/footer/Footer';

// HeroSlider ko SSR disable karke dynamic import karein taaki Date/Prerender error khatam ho jaye
const HeroSlider = dynamic(() => import('@/components/home/Section1'), {
  ssr: false,
});

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
        <HeroSlider />
        <MenuSection
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          setCartCount={setCartCount}
        />
      </div>
      <Footer />
    </main>
  );
}