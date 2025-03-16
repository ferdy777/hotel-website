import { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import NavLinks from "../navLinks";

interface MobileMenuProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuOpen, setMenuOpen }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen, setMenuOpen]);

  return (
    <div
      className={`fixed inset-0 bg-black/50 transition-opacity ${
        menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } lg:hidden`}
    >
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-[250px] w-[150px] md:h-[350px] md:w-[350px] bg-white shadow-lg p-4 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col justify-center`}
      >
        <button
          className="absolute top-4 right-6 text-3xl text-gray-700"
          onClick={() => setMenuOpen(false)}
        >
          <FiX />
        </button>
        <nav className="flex flex-col items-center space-y-6">
          <NavLinks closeMenu={() => setMenuOpen(false)} />
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
