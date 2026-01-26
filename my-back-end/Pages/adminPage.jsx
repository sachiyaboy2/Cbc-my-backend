import { Routes, Route, Link } from "react-router-dom";
import { MdProductionQuantityLimits, MdOutlineDashboard, } from "react-icons/md";
import { BsBox2 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import AdminProductPage from "./admin/adminProductPage";
import AddProductPage from "./admin/Admin-Add-Product";

export default function AdminPage() {
  return (
    <div className="w-full h-screen bg-[url('/BG.jpg')] bg-cover bg-center flex">

      {/* SIDEBAR */}
      <div
        className="
          w-[260px] h-full
          bg-white/30 backdrop-blur-sm
          border-r border-white/40
          shadow-xl
          px-6 py-8 overflow-hidden
        "
      >
        {/* LOGO */}
        <div className="items-center flex-raw flex relative backdrop-blur-md rounded-xl mb-[10%] text-pink-900  hover:bg-pink-400  hover:text-white ransition">
          <Link to="/admin">
          <span className="absolute ml-[35%] mt-[10.5%] 
              px-4 py-3        
              rounded-xl font-medium
              transition text-[18px] text-shadow-2xs">
          <h1>Admin Panel</h1>
        </span>
        <img
          src="/logo.png"
          className="w-20 mx-0 mb-5 drop-shadow-lg flex"
        />
        
        </Link>
        </div>

        {/* NAV */}
        <nav className="flex flex-col gap-4 ">
          <Link
            to="/admin"
            className="px-4 py-3 rounded-xl font-medium
              text-pink-900 bg-white/40
              hover:bg-pink-500 hover:text-white
              transition flex flex-row gap-2"
          ><MdOutlineDashboard className="flex mt-1" />
            Dashboard
          </Link>

          <Link
            to="/admin/orders"
            className="px-4 py-3 rounded-xl font-medium
              text-pink-900 bg-white/20
              hover:bg-pink-500 hover:text-white
              transition flex flex-row gap-2"
          ><MdProductionQuantityLimits className="flex mt-1"  />
            Orders
          </Link>

          <Link
            to="/admin/products"
            className="px-4 py-3 rounded-xl font-medium
              text-pink-900 bg-white/20
              hover:bg-pink-500 hover:text-white
              transition flex flex-row gap-2"
          ><BsBox2 className="flex mt-1"  />
            Products
          </Link>

          <Link
            to="/admin/User"
            className="px-4 py-3 rounded-xl font-medium
              text-pink-900 bg-white/20
              hover:bg-pink-500 hover:text-white
              transition flex flex-row gap-2"
          ><CiUser className="flex mt-1" />
            Users
          </Link>

          
        </nav>
      </div>

      {/* CONTENT AREA */}
      <div className="flex-1 p-10">

        <div
          className="
            w-full h-full
            bg-white/35 backdrop-blur-sm
            rounded-[2.5rem]
            border border-white/40
            shadow-[0_25px_60px_rgba(0,0,0,0.3)]
            p-5 max-h-full max-w-full 
          "
        >
          <Routes>
            <Route
              path="/"
              element={
                <h1 className="text-3xl font-bold text-pink-900">
                  Dashboard
                </h1>
              }
            />

            <Route
              path="/orders"
              element={
                <h1 className="text-3xl font-bold text-pink-900">
                  Orders
                </h1>
              }
            />

            <Route
              path="/products"
              element={<AdminProductPage/>}
            />
            <Route
              path="/User"
              element={
                <h1 className="text-3xl font-bold text-pink-900">
                  Users
                </h1>
              }
            />
            <Route
              path="/Admin-Add-Product"
              element={<AddProductPage/>}
            />

            
          </Routes>
        </div>

      </div>
    </div>
  );
}
