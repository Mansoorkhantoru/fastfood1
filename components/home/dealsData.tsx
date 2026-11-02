// data/dealsData.ts

export interface FoodItem {
  id: number;
  title: string;
  category: 'deal' | 'pizza' | 'burger' | 'party';
  price: string;
  image: string;
  description: string;
}

export const foodItems: FoodItem[] = [
  {
    id: 1,
    title: 'Mega Family Deal 1',
    category: 'deal',
    price: 'Rs. 1,999',
    image: '/images/hero3.webp',
    description: '2 Large pizzas + 1.5L drink + large fries',
  },
  {
    id: 2,
    title: 'Supreme Crown Pizza',
    category: 'pizza',
    price: 'Rs. 1,299',
    image: '/images/hero2.webp',
    description: 'Freshly baked crust with extra cheese and chicken tikka.',
  },
  {
    id: 3,
    title: 'Juicy Smash Burger',
    category: 'burger',
    price: 'Rs. 549',
    image: '/images/hero1.webp',
    description: 'Double beef patty with special sauce and melted cheddar.',
  },
  {
    id: 4,
    title: 'Birthday Party Combo',
    category: 'party',
    price: 'Rs. 4,999',
    image: '/images/hero3.webp',
    description: '4 Large pizzas, 6 zinger burgers, 2 big fries, and 2.25L drinks.',
  },{
    id: 4,
    title: 'Mega Family Deal 1',
    category: 'deal',
    price: 'Rs. 1,999',
    image: '/images/hero3.webp',
    description: '2 Large pizzas + 1.5L drink + large fries',
  }
  // Aap yahan apni baaki 34+ deals ishi tarah add kar sakte hain!
];