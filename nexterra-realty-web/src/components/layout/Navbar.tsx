
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-4">

      <div className="max-w-[1500px] mx-auto px-8 py-6 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Nexterra Realty"
            className="h-10 md:h-24 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10 text-white font-medium">

          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>

          <Link to="/listings" className="hover:text-yellow-400 transition">
            Buy
          </Link>

          <a href="/rent" className="hover:text-yellow-400 transition">
            Rent
          </a>

          <a href="/commercial" className="hover:text-yellow-400 transition">
            Commercial
          </a>

          <a href="/agents" className="hover:text-yellow-400 transition">
            Agents
          </a>

          <a href="/about" className="hover:text-yellow-400 transition">
            About Us
          </a>

          <a href="/contact" className="hover:text-yellow-400 transition">
            Contact
          </a>

        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">

          <a
            href="/login"
            className="border border-yellow-400 text-white px-4 py-2 rounded-lg"
          >
            Login
          </a>

          <a
            href="/list-property"
            className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            List Property
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#071B3B] text-white px-6 py-4">

          <div className="flex flex-col gap-4">

            <a href="/">Home</a>
            <a href="/listings">Buy</a>
            <a href="/rent">Rent</a>
            <a href="/commercial">Commercial</a>
            <a href="/agents">Agents</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/login">Login</a>
            <a href="/list-property">List Property</a>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;

