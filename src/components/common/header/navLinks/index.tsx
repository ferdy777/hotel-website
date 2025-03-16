// import { Link } from "react-router-dom";

// interface NavLinksProps {
//   closeMenu: () => void;
// }

// const NavLinks: React.FC<NavLinksProps> = ({ closeMenu }) => {
//   return (
//     <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-8 text-xs lg:text-[15px] uppercase">
//       {["Home", "Rooms", "Restaurant", "Spa", "Contact"].map((item) => (
//         <Link
//           key={item}
//           to={item === "Rooms" ? "/rooms" : "/"}
//           className="hover:text-yellow-600 transition"
//           onClick={closeMenu}
//         >
//           {item}
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default NavLinks;

import { Link } from "react-router-dom";

interface NavLinksProps {
  closeMenu: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ closeMenu }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-8 text-xs lg:text-[15px] uppercase">
      {[
        { name: "Home", path: "/" },
        { name: "Rooms", path: "/rooms" },
        { name: "Restaurant", path: "/restaurant" },
        { name: "Spa", path: "/spa" },
        { name: "Contact", path: "/contact" },
      ].map(({ name, path }) => (
        <Link
          key={name}
          to={path}
          className="hover:text-yellow-600 transition"
          onClick={closeMenu}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
