
import React from "react";
import { useState } from "react";
function Header(){
    const [toggleDrop, setToggleDrop] = useState(false)
    return(
        <header className="bg-black">
            <div className="container mx-auto">
                <nav className="flex justify-between items-center">
                    <a href="#" className="text-white block" 
                    
                    >Logo</a>
                    <ul>
                        <li className="inline-block relative">
                            <a href="#" className="text-white block py-3 px-4" onClick={() => setToggleDrop(!toggleDrop)}>Home</a>
                            {toggleDrop && (
                                <ul className="absolute bg-white">
                            <li><a href="#" className="text-black block py-2">Home 1</a></li>
                            <li><a href="#" className="text-black block py-2">Home 2</a></li>
                            <li><a href="#" className="text-black block py-2">Home 3</a></li>
                            </ul>)}
                            
                        </li>
                        <li className="inline-block"><a href="#" className="text-white block py-3 px-4">About</a></li>
                        <li className="inline-block"><a href="#" className="text-white block py-3 px-4">Services</a></li>
                        <li className="inline-block"><a href="#" className="text-white block py-3 px-4">Products</a></li>
                        <li className="inline-block"><a href="#" className="text-white block py-3 px-4">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Header;