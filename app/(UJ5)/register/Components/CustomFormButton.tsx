import React from "react";
// import { Button } from '@headlessui/react'

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

type ButtonProps = {
  text: string;
  ButtonText: string;
  border: any;
  onClick?: () => void;
};

const CustomFormDropdown: React.FC<ButtonProps> = ({ text, ButtonText }) => {
  return (
    <div className="flex flex-col py-2 space-y-12 w-full">
      <Menu>
        <MenuButton className="text-black flex flex-row justify-between p-2 space-y-5 border-2 btn h-12 w-full border-black">
          {ButtonText}
          <ChevronDownIcon className="size-8 items-end fill-gray-600" />
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            anchor="bottom"
            className="w-[80%] flex flex-col items-center origin-top-right rounded-xl border border-gray-900 bg-white p-1 text-sm/6 text-black"
          >
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-800">
                {text}
              </button>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
};
export default CustomFormDropdown;

// type ButtonProps = {
//   text: string
//   border: any
//   onClick?: () => void
// }

// const CustomFormButton: React.FC<ButtonProps> = ({ text, onClick, border }) => {
//   return (
//     <>
// <Button
//   onClick={onClick}
//   className={`text-black border-2 btn h-12 w-full border-${border}`}
// >
//   {text}
// </Button>
//     </>
//   )
// }

// export default CustomFormButton
