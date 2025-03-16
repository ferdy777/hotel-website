import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import LogoWhite from "../../../images/logo-white.svg";
import LogoDark from "../../../images/logo-dark.svg";
import NavLinks from "./navLinks/index";
import MobileMenu from "./mobileMenu/index";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setHeader(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      } fixed z-50 w-full transition-all duration-500`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          {header ? (
            <img className="w-[160px]" src={LogoDark} alt="LogoDark" />
          ) : (
            <img className="w-[160px]" src={LogoWhite} alt="LogoWhite" />
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`hidden lg:flex ${header ? "text-primary" : "text-white"}`}
        >
          <NavLinks closeMenu={() => {}} />
        </nav>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          className="lg:hidden text-3xl text-gray-700"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu />
        </button>

        {/* Mobile Menu */}
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
