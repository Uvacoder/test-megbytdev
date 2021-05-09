import Link from "next/link";

const Nav = () => {
  return (
      <nav>
        <div className="flex flex-col sm:flex-row justify-evenly sm:justify-evenly sm:px-20 align-middle sm:py-8 bg-[#3F4CE0] text-white ">
          <div className="logo text-center sm:text-left">MegaByt</div>
          <div>
            <ul className="flex flex-row sm:space-x-12 lg:space-x-14 justify-evenly text-center font-medium">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#">Our Products</Link>
              </li>
              <li>
                <Link href="/about">Our Story</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Nav;
