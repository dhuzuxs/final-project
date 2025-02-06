import { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 nav-blur border-b border-white/10 bg-white/20 backdrop-blur-sm">
            <div className="max-w-[2000px] mx-auto px-4 sm:px-8">
                <div className="flex justify-between h-24 items-center">
                    <div className="text-2xl sm:text-3xl font-light tracking-[0.3em] logo">
                     <Link to='/Homepage'>BOROBUDUR AUTO</Link>
                    </div>
                    <div className="hidden md:flex space-x-16 text-xs tracking-[0.2em]">
                        <Link to='/HomePage' className="hover-line">DASHBOARD</Link>
                        <a href="/Stock" className="hover-line">STOCK</a>
                        <Link to='/About' className="hover-line">ABOUT US</Link>
                        <Link to="/Contact" className="hover-line">CONTACT</Link >
                    </div>
                    <button className="md:hidden w-8 h-8 flex flex-col justify-center space-y-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                        <span className="w-full h-[1px] bg-white transform transition-transform origin-right"></span>
                        <span className="w-full h-[1px] bg-white transform transition-transform origin-right"></span>
                    </button>

                </div>
                {open && <div className="md:hidden flex flex-col gap-3 items-center justify-center space-x-4">
                    <Link to='/HomePage' className="hover-line">DASHBOARD</Link>
                    <a href="/Stock" className="hover-line">STOCK</a>
                    <Link to='/About' className="hover-line">ABOUT US</Link>
                    <Link to="/Contact" className="hover-line">CONTACT</Link >
                </div>}

            </div>
        </nav >

    )
}
