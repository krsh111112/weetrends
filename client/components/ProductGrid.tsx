import { Heart, Star, ShoppingBag } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Essential White Tee",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.8,
    reviews: 124,
    image: "https://images.pexels.com/photos/8148576/pexels-photo-8148576.jpeg",
    category: "T-Shirts",
    isNew: true,
    colors: ["white", "black", "gray"],
  },
  {
    id: 2,
    name: "Vintage Denim Jacket",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.9,
    reviews: 89,
    image: "https://images.pexels.com/photos/8119553/pexels-photo-8119553.jpeg",
    category: "Jackets",
    isNew: false,
    colors: ["blue", "black", "light-blue"],
  },
  {
    id: 3,
    name: "Casual Button Shirt",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.7,
    reviews: 203,
    image:
      "https://images.pexels.com/photos/32877668/pexels-photo-32877668.jpeg",
    category: "Shirts",
    isNew: true,
    colors: ["white", "blue", "beige"],
  },
  {
    id: 4,
    name: "Premium Cotton Tee",
    price: 34.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 156,
    image:
      "https://images.pexels.com/photos/32924600/pexels-photo-32924600.png",
    category: "T-Shirts",
    isNew: false,
    colors: ["brown", "black", "navy"],
  },
  {
    id: 5,
    name: "Relaxed Fit Hoodie",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.8,
    reviews: 342,
    image: "https://images.pexels.com/photos/8148576/pexels-photo-8148576.jpeg",
    category: "Hoodies",
    isNew: true,
    colors: ["gray", "black", "navy"],
  },
  {
    id: 6,
    name: "Slim Fit Chinos",
    price: 64.99,
    originalPrice: 84.99,
    rating: 4.5,
    reviews: 78,
    image: "https://images.pexels.com/photos/8119553/pexels-photo-8119553.jpeg",
    category: "Pants",
    isNew: false,
    colors: ["khaki", "navy", "black"],
  },
];

export default function ProductGrid() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id],
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trending Now
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular pieces that everyone's talking about
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["All", "T-Shirts", "Shirts", "Jackets", "Pants", "Hoodies"].map(
              (category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    category === "All"
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ),
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      SALE
                    </span>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                      favorites.includes(product.id)
                        ? "bg-red-500 text-white"
                        : "bg-white/80 text-gray-700 hover:bg-red-500 hover:text-white"
                    }`}
                  >
                    <Heart
                      className="h-4 w-4"
                      fill={
                        favorites.includes(product.id) ? "currentColor" : "none"
                      }
                    />
                  </button>
                  <button className="p-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
                    <ShoppingBag className="h-4 w-4" />
                  </button>
                </div>

                {/* Quick Add to Cart */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 px-4 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                    Quick Add
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-purple-600 font-medium">
                    {product.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">
                      {product.rating}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Color Options */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-gray-600">Colors:</span>
                  <div className="flex gap-1">
                    {product.colors.map((color) => (
                      <div
                        key={color}
                        className={`w-4 h-4 rounded-full border-2 border-gray-300 cursor-pointer hover:scale-110 transition-transform ${
                          color === "white"
                            ? "bg-white"
                            : color === "black"
                              ? "bg-black"
                              : color === "gray"
                                ? "bg-gray-500"
                                : color === "blue"
                                  ? "bg-blue-500"
                                  : color === "light-blue"
                                    ? "bg-blue-300"
                                    : color === "brown"
                                      ? "bg-amber-700"
                                      : color === "navy"
                                        ? "bg-blue-900"
                                        : color === "beige"
                                          ? "bg-amber-200"
                                          : color === "khaki"
                                            ? "bg-yellow-600"
                                            : color === "red"
                                              ? "bg-red-500"
                                              : "bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="text-sm text-gray-500">
                  {product.reviews} reviews
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
}
