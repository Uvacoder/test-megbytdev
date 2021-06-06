import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const closeMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <nav>
      <div className="flex flex-col sm:flex-row justify-evenly sm:justify-evenly sm:px-20 sm:items-center py-2 sm:py-8 bg-[#3F4CE0] text-white ">
        <div className="flex justify-between sm:justify-center items-center mx-4">
          <div className="flex items-end">
            <Image
              src={
                "https://cdn.statically.io/gh/afkcodes/megbytdev-web/main/public/whiteLogo.png"
              }
              width={50}
              height={40}
              alt="Megabyt logo"
            />
            <span className="sm:hidden text-2xl font-semibold mx-2">Megabyt</span>
          </div>
          <div
            className="sm:hidden"
            onClick={() => {
              setMenuOpened(!menuOpened);
            }}
          >
            <Image
              className
              src={menuOpened ? "/close.svg" : "/menu.svg"}
              width={50}
              height={40}
              alt="hamburger menu button"
            />
          </div>
        </div>
        <div className="hidden sm:block">
          <ul className="flex flex-row sm:space-x-12 lg:space-x-14 justify-evenly text-center font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#products">Our Products</Link>
            </li>
            <li>
              <Link href="#story">Our Story</Link>
            </li>
            <li>
              <Link href="#contacts">Contact Us</Link>
            </li>
          </ul>
        </div>
        {menuOpened ? (
          <div className="flex justify-end text-center items-center sm:hidden">
            <ul className="flex flex-col justify-center text-center font-medium items-end bg-white text-black w-40 rounded-2xl px-4 py-4 mx-4">
              <li
                className="py-2 block"
                onClick={() => {
                  closeMenu();
                }}
              >
                <Link className="block" href="/">
                  Home
                </Link>
              </li>
              <li
                className="py-2 block"
                onClick={() => {
                  closeMenu();
                }}
              >
                <Link href="#products">Our Products</Link>
              </li>
              <li
                className="py-2 block"
                onClick={() => {
                  closeMenu();
                }}
              >
                <Link href="#story">Our Story</Link>
              </li>
              <li
                className="py-2 block"
                onClick={() => {
                  closeMenu();
                }}
              >
                <Link href="#contacts">Contact Us</Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Nav;
