import { HiMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";
import Button from "./button";
import LogoImage from "../assets/logo.png"

const NavLinks = () => {
    return (
      <>
        <div className="font-custom font-semibold ">
          <Button text="Home" href="#home"/>
        </div>
        <div className="font-custom font-semibold">
          <Button text="Sobre" href="#about" />
        </div>
        <div className="font-custom font-semibold">
          <Button text="Portfolio" href="#portfolio" />
        </div>
        <div className="font-custom font-semibold">
          <Button text="Orçamento" href="#" />
        </div>
      </>
    );
  };

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className="
      bg-white flex-wrap z-20 mx-auto 
      flex items-center justify-between py-1 px-10 lg:px-14 md:px-44
      fixed top-0 left-0 w-full border-b-2"
    >
      <img className="flex-none h-24 w-24 md:h-40 md:w-40" src={LogoImage} alt="Logo" />
      <nav className="w-1/3 flex justify-end items-center">
        <div className="hidden w-full items-center justify-end xl:flex">
          <NavLinks />
          <div class="flex mx-6 hiddem xl:flex">
            <div class="border-r-2 border-white h-24"></div>
          </div>
        </div>
        <div className="xl:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? (
              <HiOutlineX className="h-12 w-12" />
            ) : (
              <HiMenu className="h-12 w-12" />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex basis-full flex-col items-center gap-4 mt-4">
          <NavLinks />
        </div>
      )}
    </header>
  );
}