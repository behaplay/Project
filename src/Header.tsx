export const Header = () => {
    return (
        <header className="m-auto max-w-[1520px]">
            <div className="lg:flex hidden flex-row justify-between bg-siniy py-4 px-[200px]">
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex flex-row">
                       <img src="https://cdn-icons-png.flaticon.com/512/7246/7246427.png" width={"25px"} height={"18px"} alt="" />
                        <span className="font-opens text-3 font-bold text-white">1010 Avenue, New York, NY 10018 US.</span>
                    </div>
                    <div className="flex flex-row">
                        <img src="https://images.rawpixel.com/image_transparent_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNTM1LXBob25lLTAzLWEucG5n.png"  width={"25px"} height={"18px"} alt="" />
                        <span className="font-opens text-3 font-bold text-white">212 386 5575, 212 386 5576</span>
                    </div>
                </div>
                <div className="flex flex-row">

                <img src="https://static.vecteezy.com/system/resources/previews/013/468/392/original/clock-time-line-icon-png.png" width={"25px"} height={"18px"} alt="" />
                <span className="font-opens text-3 font-bold text-white">Mon-Sat, 8.00-18.00. Sunday CLOSED</span>
                </div>
            </div>
            <div className="container flex flex-row justify-between py-2 px-[50px] sm:px-[50px] lg:px-[200px]">
                <div className="font-moon flex flex-row items-center gap-3">
                <img src="https://prium.github.io/elixir/v3.0.0/assets/img/logo-dark.png" alt="" />
                  <div className="md:flex flex-row gap-2 hidden">
                    <select className="w-[68px] font-bold text-siniy">
                        <option value="Home" className="text-[18px] cursor-pointer">Home</option>
                        <option value="Slider HEader" className="text-[16px]">Slider HEader</option>
                        <option value="Slider HEader" className="text-[16px]">Slider clasic</option>
                        <option value="Slider HEader" className="text-[16px]">static Header</option>
                    </select>
                    <select className="w-[68px] font-semibold text-siniy">
                        <option value="Pages" className="text-[18px] cursor-pointer">Pages</option>
                        <option value="About" className="text-[16px]">About</option>
                        <option value="Service" className="text-[16px]">Service</option>
                        <option value="Alumni" className="text-[16px]">Alumni</option>
                    </select>
                    <select className="w-[68px] font-semibold text-siniy">
                        <option value="News" className="text-[16px] cursor-pointer">News</option>
                        <option value="Newroom" className="text-[16px]">Newroom</option>
                        <option value="Singl new" className="text-[16px]">Singl new</option>
                    </select>
                    <select className="w-[85px] font-semibold text-siniy">
                        <option value="Elements">Elements</option>
                        <option value="Buttons">Buttons</option>
                        <option value="colors">Colors</option>
                    </select>
                    <p className="text-[18px] font-bold cursor-pointer">Contacts</p>
                  </div>
                </div>
                <button className="lg:flex hidden justify-center items-center py-1 px-4 duration-200 bg-white border-2 border-siniy rounded-[50px] text-siniy hover:bg-siniy hover:text-white">Purchase</button>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" className="w-[25px] flex lg:hidden" alt="" />
            </div>
        </header>
    )
}
