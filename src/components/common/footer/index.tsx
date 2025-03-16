import { Link } from "react-router-dom";
import LogoWhite from "../../../images/logo-white.svg";

const Footer = () => {
  return (
    <footer className="bg-primary py-6">
      <div className="container mx-auto max-w-screen-lg px-4 flex flex-col md:flex-row items-center justify-between text-white text-center md:text-left">
        <Link to="/" className="mb-4 md:mb-0">
          <img src={LogoWhite} alt="logo" className="h-12" />
        </Link>
        <p className="text-sm md:text-base">
          Copyright &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
