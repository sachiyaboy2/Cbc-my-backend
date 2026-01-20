import { BrowserRouter, Routes, Route } from "react-router-dom"
export default function AdminPage(){
    return(
        <div className="w-full h-full bg-primary flex">
           <div className="w-[300px] h-full bg-primary"></div>

           <div className="w-[calc(100%-300px)] h-full bg-secondary rounded-[20px] m-1">
           <Routes path="/">
                <Route path="/" element={<h1 className="font-bold text-accent">Dashboard</h1>}/>
                <Route path="/products" element={<h1>Products</h1>}/>
                <Route path="/Oders" element={<h1>Oders</h1>}/>
                
           </Routes>
           </div>
           
        </div>
    )
}