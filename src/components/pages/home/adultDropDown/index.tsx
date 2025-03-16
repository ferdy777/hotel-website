import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { useRoomContext } from "../../../../context/roomContext";

const AdultDropDown = () => {
  const { adults, setAdults } = useRoomContext();
  const lis = [
    { name: "1 Adult" },
    { name: "2 Adults" },
    { name: "3 Adults" },
    { name: "4 Adults" },
  ];

  return (
    <Menu as="div" className="relative bg-white w-full h-full z-2">
      <MenuButton className="w-full h-full flex items-center justify-between px-8">
        {adults}
        <BsChevronDown className="text-base text-accent-hover cursor-pointer" />
      </MenuButton>
      <MenuItems
        as="ul"
        className="bg-white absolute top-full mt-1 w-full flex flex-col z-40 shadow-md border border-gray-200 rounded-md"
      >
        {lis.map((li, index) => (
          <MenuItem
            onClick={() => setAdults(li.name)}
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

export default AdultDropDown;
