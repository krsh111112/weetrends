import { Search, ShoppingBag, Menu, User, Heart } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets%2F5b38739d4d434391a03bc58fb70bb7b5%2F4cc51186a1304bd1b553cb1d7c501549?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F5b38739d4d434391a03bc58fb70bb7b5%2F4cc51186a1304bd1b553cb1d7c501549?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F5b38739d4d434391a03bc58fb70bb7b5%2F4cc51186a1304bd1b553cb1d7c501549?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F5b38739d4d434391a03bc58fb70bb7b5%2F4cc51186a1304bd1b553cb1d7c501549?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F5b38739d4d434391a03bc58fb70bb7b5%2F4cc51186a1304bd1b553cb1d7c501549?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F5b38739d4d434391a03bc58fb70bb7b5%2F4cc51186a1304bd1b553cb1d7c501549?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F5b38739d4d434391a03bc58fb70bb7b5%2F4cc51186a1304bd1b553cb1d7c501549?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F5b38739d4d434391a03bc58fb70bb7b5%2F4cc51186a1304bd1b553cb1d7c501549"
          className="aspect-[1.35] object-cover object-center w-full ml-5 min-h-5 min-w-5 overflow-hidden max-w-[85px]"
          alt="WeeTrends Logo"
        />
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent leading-[50px] w-auto flex-grow">
              WeeTrends
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              New In
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Women
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Men
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Accessories
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Sale
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-96">
            <Search className="h-4 w-4 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent flex-1 outline-none text-sm"
            />
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors lg:hidden">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
              <User className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
              <Heart className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingBag className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </button>
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#"
                className="block text-gray-700 hover:text-purple-600 font-medium"
              >
                New In
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-purple-600 font-medium"
              >
                Women
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-purple-600 font-medium"
              >
                Men
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-purple-600 font-medium"
              >
                Accessories
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-purple-600 font-medium"
              >
                Sale
              </a>
              <div className="pt-3 border-t border-gray-200">
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                  <Search className="h-4 w-4 text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="bg-transparent flex-1 outline-none text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
