import { Routes, Route, Link } from "react-router-dom";

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
          px-6 py-8
        "
      >
        {/* LOGO */}
        <img
          src="/logo.png"
          className="w-20 mx-auto mb-10 drop-shadow-lg"
        />

        {/* NAV */}
        <nav className="flex flex-col gap-4">
          <Link
            to="/admin"
            className="px-4 py-3 rounded-xl font-medium
              text-pink-900 bg-white/40
              hover:bg-pink-500 hover:text-white
              transition"
          >
            Dashboard
          </Link>

          <Link
            to="/admin/products"
            className="px-4 py-3 rounded-xl font-medium
              text-pink-900 bg-white/20
              hover:bg-pink-500 hover:text-white
              transition"
          >
            Products
          </Link>

          <Link
            to="/admin/orders"
            className="px-4 py-3 rounded-xl font-medium
              text-pink-900 bg-white/20
              hover:bg-pink-500 hover:text-white
              transition"
          >
            Orders
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
            p-10
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
              path="/products"
              element={
                <h1 className="text-3xl font-bold text-pink-900">
                  Products
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
          </Routes>
        </div>

      </div>
    </div>
  );
}
