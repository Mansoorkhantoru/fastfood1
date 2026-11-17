// data/dealsData.ts

export interface FoodItem {
  id: number;
  title: string;
  category: 'deal' | 'drinks' | 'burger' | 'fries';
  price: string;
  image: string;
  description: string;
}

export const foodItems: FoodItem[] = [
  {
    id:1,
    title:"Deal 1",
    category:"deal",
    price:"Rs. 890",
    image: '/images/deals/deal1.webp',
    description: '2 Zinger burger + 500ml regular Drink',
  },
  {
    id: 2,
    title: 'Deal 2',
    category: 'deal',
    price: 'Rs. 490',
    image: '/images/deals/deal2.webp',
    description: '1 Chicken Biryani + 1 regular Cold Drink + 1 Raita',
  },
  {
    id: 3,
    title: 'Deal 3',
    category: 'deal',
    price: 'Rs. 600',
    image: '/images/deals/deal3.webp',
    description: '1 cripsy chick burger + 1 regular cold Drink',
  },
  {
    id: 3,
    title: 'Creemy Smash Burger',
    category: 'burger',
    price: 'Rs. 550',
    image: '/images/hero1.webp',
    description: 'Double beef patty with special sauce and melted cheddar.',
  },
  {
    id: 4,
    title: 'French Fries half',
    category: 'fries',
    price: 'Rs. 200',
    image: '/images/fries/frenchfrieshalf.webp',
    description: 'Half French Fries',
  },{
    id: 4,
    title: ' Deal 4',
    category: 'deal',
    price: 'Rs. 600',
    image: '/images/deals/deal4.webp',
    description: '1 zinger burger + Regular Fries + Regular Drinks',
  },{
    id: 5,
    title: 'Banana Shake',
    category: 'drinks',
    price: 'Rs : 300',
    image: '/images/drinks/banana.webp',
    description: '1 banana shake',
  },{
     id: 6,
    title: 'Zinger cheese burger',
    category: 'burger',
    price: 'Rs. 450',
    image: '/images/burger/zingercheeseburger.webp',
    description: '',
  },{
    id: 7,
    title: 'Strawberry Shake',
    category: 'drinks',
    price: 'Rs : 300',
    image: '/images/drinks/Strawberryshake.webp',
    description: '1 Strawberry shake',
  },
  {
    id: 8,
    title: 'Kajoor and badam  Shake',
    category: 'drinks',
    price: 'Rs : 450',
    image: '/images/drinks/kajoorandbadamshake.webp',
    description: '1 Kajoor and badam shake',
  }
];