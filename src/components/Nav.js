import React, { useState } from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsChatSquare, BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(true);

  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };

  return (
    <navbar>
      {navbarVisible && (
        <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
          {/* nav inner */}
          <div
            className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px]
        mx-auto px-5 flex justify-between text-2xl text-white/50"
          >
            <Link
              to="home"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-200}
              className="cursor-pointer w-[90px] h-[90px] flex items-center p-[2rem]"
            >
              <BiHomeAlt />
            </Link>
            <Link
              to="services"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-200}
              className="cursor-pointer w-[90px] h-[90px] flex items-center p-[2rem]"
            >
              <BiUser />
            </Link>
            <Link
              to="work"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-200}
              className="cursor-pointer w-[90px] h-[90px] flex items-center p-[2rem]"
            >
              <BsBriefcase />
            </Link>
            <Link
              to="contact"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-200}
              className="cursor-pointer w-[90px] h-[90px] flex items-center p-[2rem]"
            >
              <BsChatSquare />
            </Link>
          </div>
        </nav>
      )}
      <button
        className="z-50 cursor-pointer w-full max-w-[50px] h-[50px] bottom-[20px] right-[20px] lg:bottom-[40px] rounded-full bg-accent mx-auto px-5 flex items-center justify-center fixed"
        onClick={toggleNavbar}
      >
        {navbarVisible ? <BsArrowLeft /> : <BsArrowRight />}
      </button>
    </navbar>
  );
};

export default Navbar;
