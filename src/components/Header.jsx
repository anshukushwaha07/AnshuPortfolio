import React, { useState, useEffect } from "react"; // 1. Import useEffect
import Logo from "./Logo";
import Nav from "./Nav";
import { Menu, X } from "lucide-react"; // Icons for the mobile menu

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 2. Add this useEffect hook to control the page's scrollbar
  useEffect(() => {
    if (isMenuOpen) {
      // When the menu is open, prevent the background from scrolling
      document.body.style.overflow = "hidden";
    } else {
      // When the menu is closed, allow scrolling again
      document.body.style.overflow = "auto";
    }

    // This is a cleanup function that runs when the component is removed
    // It ensures that scrolling is always re-enabled
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]); // This code runs every time 'isMenuOpen' changes

  return (
    <header className="relative flex bg-[#F8F7F7] justify-between items-center">
      <Logo />

      {/* Desktop Navigation (hidden on screens smaller than md) */}
      <div className="hidden md:flex">
        <Nav />
      </div>

      {/* Hamburger Menu Button (only visible on screens smaller than md) */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(true)} className="p-4">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 p-4"
          >
            <X size={28} />
          </button>
          {/* We render the Nav component inside the mobile menu for consistency */}
          <div className="flex flex-col items-center gap-8">
            <Nav />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
