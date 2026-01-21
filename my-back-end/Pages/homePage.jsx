import { Route, Routes } from "react-router-dom"
import Header from "../src/components/Header"
export default function HomePage(){
    return(
        <div className="w-full h-full bg-secondary">
            <Header/>
            <Routes path="/">
                <Route path="/" element={<h1>Welcome to Home Page</h1>}/>
                <Route path="/product" element={<h1>Products List</h1>}/>
                <Route path="/contact" element={<h1>Contact Us</h1>}/>
                <Route path="/about" element={<h1>About Us</h1>}/>
                <Route path="/*" element={<h1>404 Not Found</h1>}/>
            </Routes>
        </div>
    )
}