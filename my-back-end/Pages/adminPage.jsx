import { BrowserRouter, Routes, Route } from "react-router-dom"
export default function AdminPage(){
    return(
        <div className="w-full h-full bg-[url('/BG.jpg')] bg-cover bg-center flex">
           

           <div className="w-[calc(100%-600px)] h-full backdrop-blur-xl 
          shadow-2xl shadow-black/40 rounded-4xl p-10 flex justify-center">
           <Routes path="/">
                <Route path="/" element={<h1 className="font-bold text-accent">Dashboard</h1>}/>
                <Route path="/products" element={<h1>Products</h1>}/>
                <Route path="/Oders" element={<h1>Oders</h1>}/>
                
           </Routes>
           </div>
           
        </div>
    )
}