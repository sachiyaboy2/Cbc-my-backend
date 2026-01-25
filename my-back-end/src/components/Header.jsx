import {Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full h-[72px] sticky top-0 z-50 backdrop-blur-sm bg-gradient-to-r from-pink-500/90 to-rose-400/90 shadow-lg ">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-2">
         <Link to="/"><img
            src="/logo.png"
            alt="Logo"
            className="h-[55px] w-auto object-contain"
          /></Link>
        </div>

        {/* Navigation */}
        <nav className="flex gap-10 text-white font-medium text-[17px]">
          {[
            { name: "Home", path: "/" },
            { name: "Product", path: "/product" },
            { name: "About Us", path: "/about" },
            { name: "Contact Us", path: "/contact" },
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative transition-all duration-300 
                 after:content-[''] after:absolute after:left-0 after:-bottom-1 
                 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300
                 hover:after:w-full
                 ${isActive ? "after:w-full font-semibold" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
