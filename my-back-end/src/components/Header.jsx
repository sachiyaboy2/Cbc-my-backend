export default function headder(){
    return(
        <header className="w-full bg-accent h-[10%] text-white flex">
              <div className="w-full h-ful flex relative">
                <a href="/">
                <img src="/logo.png" className="h-full w-[130px] left-0 px-[20px] object-cover  absolute"/></a>

                <div className="h-full w-full flex justify-center items-center gap-[20px] text-lg">
                    <a href="/">Home</a>     
                    <a href="/product">Product</a>   
                    <a href="/about">About</a>     
                    <a href="/contact">Contact</a>          
                </div>
              </div>
              

        </header>
    )
}