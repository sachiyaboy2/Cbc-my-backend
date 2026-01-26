import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminPage from "../Pages/adminPage"
import HomePage from "../Pages/homePage"
import LoginPage from "../Pages/loginPage"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-[100vh] bg-amber-100">
        <Toaster position="top-right"/>
        <Routes path="/">
          <Route path="/*" element={<HomePage/>} />
          <Route path="/register" element={<h1>Register Page</h1>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/admin/*" element={<AdminPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
