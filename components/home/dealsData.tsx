// data/dealsData.ts

export interface FoodItem {
  id: number;
  title: string;
  category: 'deal' | 'pizza' | 'burger' | 'wings';
  price: string;
  image: string;
  description: string;
}

export const foodItems: FoodItem[] = [
  {
    id:1,
    title:"Deal 1",
    category:"deal",
    price:"Rs. 600",
    image: '/images/deals/deal1.webp',
    description: '1 Zinger burger + 1 Regular Fries + 1 regular Drink',
  },
  {
    id: 2,
    title: 'Deal 2',
    category: 'deal',
    price: 'Rs. 900',
    image: '/images/deals/deal2.webp',
    description: '1 Zinger burger + 1 Regular Fries + 1 regular Drink + 1 Chicken Piece',
  },
  {
    id: 3,
    title: 'Deal 3',
    category: 'deal',
    price: 'Rs. 1,000',
    image: '/images/deals/deal3.webp',
    description: '1 Small Pizza + 2 Zinger Burgers + 0.5 Drink',
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
    title: '12 pieces hot wings',
    category: 'wings',
    price: 'Rs. 1200',
    image: '/images/wings/12pieceswings.webp',
    description: '4 Large pizzas, 6 zinger burgers, 2 big fries, and 2.25L drinks.',
  },{
    id: 4,
    title: 'Mega Family Deal 1',
    category: 'deal',
    price: 'Rs. 1,999',
    image: '/images/hero3.webp',
    description: '2 Large pizzas + 1.5L drink + large fries',
  },{
    id: 5,
    title: 'Lifetime Specia',
    category: 'pizza',
    price: 'Rs. 1200',
    image: '/images/pizza/lifetimespecia.webp',
    description: '1 small pizza',
  },{
     id: 6,
    title: 'Zinger cheese burger',
    category: 'burger',
    price: 'Rs. 400',
    image: '/images/burger/zingercheeseburger.webp',
    description: '',
  }
];