'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { foodItems, FoodItem } from './dealsData';

interface CartItem extends FoodItem {
  quantity: number;
}

interface MenuSectionProps {
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  setCartCount: (count: number) => void;
}

export default function MenuSection({ isCartOpen, setIsCartOpen, setCartCount }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'deal' | 'pizza' | 'burger' | 'party'>('deal');
  const [cart, setCart] = useState<CartItem[]>([]);

  // Customer details state for cart checkout
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerLocation, setCustomerLocation] = useState('');

  const restaurantWhatsApp = '923159687096'; // Apna WhatsApp number yahan likhein

  // Total items count for Navbar & Cart
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Update parent cart count whenever cart changes
  useEffect(() => {
    setCartCount(totalCartCount);
  }, [totalCartCount, setCartCount]);

  // Filter items based on category
  const filteredItems = useMemo(() => {
    return foodItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Add item to cart
  const addToCart = (item: FoodItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  // Update item quantity
  const updateQuantity = (id: number, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => {
    const numericPrice = parseInt(item.price.replace(/[^0-9]/g, '')) || 0;
    return sum + numericPrice * item.quantity;
  }, 0);

  // Send Cart Order via WhatsApp with Location & Phone details
  const sendCartWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    if (!customerName || !customerPhone || !customerLocation) {
      alert('Meherbani karke apna Name, Phone Number aur Location darj karein!');
      return;
    }

    let orderText = `🛒 *NEW CART ORDER* 🛒\n\n`;
    orderText += `👤 *Name:* ${customerName}\n`;
    orderText += `📞 *Phone:* ${customerPhone}\n`;
    orderText += `📍 *Location:* ${customerLocation}\n\n`;
    orderText += `*Order Items:*\n`;

    cart.forEach((item, index) => {
      orderText += `${index + 1}. ${item.title} (Qty: ${item.quantity}) - ${item.price}\n`;
    });

    orderText += `\n*Total Bill: Rs. ${totalPrice.toLocaleString()}*\n\nPlease confirm my order!`;

    const encodedMessage = encodeURIComponent(orderText);
    window.open(`https://wa.me/${restaurantWhatsApp}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 relative">
      {/* Floating Direct WhatsApp Icon (Cart removed from bottom) */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`https://wa.me/${restaurantWhatsApp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition transform hover:scale-110 border-2 border-white"
          title="Chat on WhatsApp"
        >
          <span className="text-2xl">💬</span>
        </a>
      </div>

      {/* Cart Drawer / Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h2 className="text-2xl font-black text-gray-800">Your Cart 🛒</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-500 hover:text-red-600 font-bold text-xl cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-12">Your cart is empty!</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-xl border">
                      <div>
                        <h4 className="font-bold text-gray-800">{item.title}</h4>
                        <p className="text-sm text-red-600 font-semibold">{item.price}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="bg-gray-200 px-2.5 py-1 rounded-lg font-bold hover:bg-gray-300 cursor-pointer"
                        >
                          -
                        </button>
                        <span className="font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="bg-gray-200 px-2.5 py-1 rounded-lg font-bold hover:bg-gray-300 cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <form onSubmit={sendCartWhatsAppOrder} className="border-t pt-4 mt-4 space-y-3">
                <h3 className="font-bold text-gray-700 text-sm">Delivery Details:</h3>
                <input
                  type="text"
                  placeholder="Aapka Naam (Name)"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded-lg text-sm outline-none focus:border-red-600"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp / Phone Number"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded-lg text-sm outline-none focus:border-red-600"
                />
                <input
                  type="text"
                  placeholder="Delivery Address / Location"
                  value={customerLocation}
                  onChange={(e) => setCustomerLocation(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded-lg text-sm outline-none focus:border-red-600"
                />

                <div className="flex justify-between text-xl font-black pt-2 text-gray-800">
                  <span>Total:</span>
                  <span className="text-red-600">Rs. {totalPrice.toLocaleString()}</span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer transition"
                >
                  💬 Checkout via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
        <button
          onClick={() => setActiveCategory('deal')}
          className={`px-6 py-3 rounded-full font-bold text-base transition-all duration-200 cursor-pointer shadow-md ${
            activeCategory === 'deal'
              ? 'bg-red-600 text-white shadow-red-500/30 scale-105'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          🔥 Special Deals
        </button>
        <button
          onClick={() => setActiveCategory('pizza')}
          className={`px-6 py-3 rounded-full font-bold text-base transition-all duration-200 cursor-pointer shadow-md ${
            activeCategory === 'pizza'
              ? 'bg-red-600 text-white shadow-red-500/30 scale-105'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          🍕 Pizza
        </button>
        <button
          onClick={() => setActiveCategory('burger')}
          className={`px-6 py-3 rounded-full font-bold text-base transition-all duration-200 cursor-pointer shadow-md ${
            activeCategory === 'burger'
              ? 'bg-red-600 text-white shadow-red-500/30 scale-105'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          🍔 Burger
        </button>
        <button
          onClick={() => setActiveCategory('party')}
          className={`px-6 py-3 rounded-full font-bold text-base transition-all duration-200 cursor-pointer shadow-md ${
            activeCategory === 'party'
              ? 'bg-red-600 text-white shadow-red-500/30 scale-105'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          🎉 Party Packs
        </button>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => {
          const singleItemMsg = encodeURIComponent(
            `Hello! I want to order this item:\n\n*${item.title}*\nPrice: ${item.price}\n\nPlease confirm my order.`
          );
          const singleWhatsAppUrl = `https://wa.me/${restaurantWhatsApp}?text=${singleItemMsg}`;

          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-52 w-full bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-extrabold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{item.description}</p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-xl font-black text-red-600">{item.price}</span>

                  <div className="flex items-center gap-2">
                    <a
                      href={singleWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 px-3 rounded-xl transition duration-200 shadow-md text-xs cursor-pointer flex items-center gap-1"
                      title="Order on WhatsApp"
                    >
                      <span>💬 WhatsApp</span>
                    </a>

                    <button
                      onClick={() => addToCart(item)}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-4 rounded-xl transition duration-200 shadow-md text-xs cursor-pointer"
                    >
                      🛒 Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}