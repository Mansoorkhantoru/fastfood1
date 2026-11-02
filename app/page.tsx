'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import Navbar from '../components/nav/Navbar';
import HeroSlider from '@/components/home/Section1';
import MenuSection from '@/components/home/MenuSection';

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <main className="min-h-screen bg-gray-50 pb-12">
      {/* Navbar with Cart Count and Toggle */}
      <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />

      {/* Hero Banner Slider */}
      <HeroSlider />

      {/* Deals & Menu Section */}
      <MenuSection
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        setCartCount={setCartCount}
      />
    </main>
  );
}