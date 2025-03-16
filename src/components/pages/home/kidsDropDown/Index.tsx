import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { useRoomContext } from "../../../../context/roomContext";

const KidsDropDown = () => {
  const { kids, setKids } = useRoomContext();
  const lis = [
    { name: "0 kids" },
    { name: "1 kid" },
    { name: "2 Kids" },
    { name: "3 Kids" },
  ];

  return (
    <Menu as="div" className="relative bg-white w-full h-full">
      <MenuButton className="w-full h-full flex items-center justify-between px-8">
        {kids === "0 kids" ? "No kids" : kids}
        <BsChevronDown className="text-base text-accent-hover cursor-pointer" />
      </MenuButton>

      <MenuItems
        as="ul"
        className="bg-white absolute top-full mt-1 w-full flex flex-col z-40 shadow-md border border-gray-200 rounded-md"
      >
        {lis.map((li, index) => (
          <MenuItem
            onClick={() => setKids(li.name)}
            key={index}
            className="border-b last-of-type:border-b-0 h-10 btn-secondary hover:text-white w-full flex justify-center items-center cursor-pointer"
            as="li"
          >
            {li.name}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default KidsDropDown;
