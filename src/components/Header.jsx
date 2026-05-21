import { Link, Outlet } from "react-router-dom";
import { useRef } from "react";
import useHashScroll from "../useHashScroll.js";
import Footer from "./Footer.jsx";

function Header() {
  useHashScroll("location", "location");
  return (
    <>
      <header >
        <nav className="fixed w-full z-50 py-2 border-b border-stone-200 bg-bistro-cream">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex justify-between pl-4 pr-4">
              <Link to="/" className="font-semibold text-2xl">Bistro Regal</Link>
              <div className="flex items-center ">
                <ul className="flex">
                  <Link to="/location" data-slot="nav-link">
                    Location
                  </Link>
                  <Link to="/menu" data-slot="nav-link">
                    Menu
                  </Link>
                  <Link to="tel:12345" data-slot="nav-link">
                    Call
                  </Link>
                </ul>
                <Link
                  to="/cart"
                  className="cursor-pointer text-center mx-auto bg-bistro-dark rounded-xl w-32 h-6 ml-2 text-white"
                >
                  Order
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </>
  );
}

export default Header;
