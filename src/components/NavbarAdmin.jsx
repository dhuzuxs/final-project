import MobileMenu from "../UI/MobileMenu";

export default function NavbarAdmin() {   
    
  return (
<nav className="fixed w-full z-50 nav-blur border-b border-white/10 bg-white/20 backdrop-blur-sm">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-8">
            <div className="flex justify-between h-24 items-center">
                <div className="text-2xl sm:text-3xl font-light tracking-[0.3em] logo">BOROBUDUR AUTO</div>
                <div className="hidden md:flex space-x-16 text-xs tracking-[0.2em]">
                    <a href="#" className="hover-line">DASHBOARD</a>
                    <a href="#" className="hover-line">STOCK</a>
                    <a href="#" className="hover-line">ABOUT</a>
                    <a href="#" className="hover-line">CONTACT</a>
                </div>
                <button className="md:hidden w-8 h-8 flex flex-col justify-center space-y-2" onClick="toggleMenu()" aria-label="Toggle menu">
                    <span className="w-full h-[1px] bg-white transform transition-transform origin-right"></span>
                    <span className="w-full h-[1px] bg-white transform transition-transform origin-right"></span>
                </button>
               <MobileMenu />   
            </div>
        </div>
    </nav>

)
}
