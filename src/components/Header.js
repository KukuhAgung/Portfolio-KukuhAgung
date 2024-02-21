import React from "react";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="https://github.com/KukuhAgung" className="text-[25px] font-secondary">Kukuh Agung </a>
          <a href="https://bit.ly/cv-kukuhagung" className="btn btn-sm items-center flex">Read CV</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
