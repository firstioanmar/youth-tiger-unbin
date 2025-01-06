"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-orange-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">Youth Tiger Soccer School</Link>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul className={`lg:flex gap-1 ${isOpen ? 'flex flex-col absolute top-16 right-0 bg-orange-600 w-full p-4' : 'hidden'}`}>
          <li>
            <Link 
              href="/" 
              className="text-white block py-2 px-4 hover:bg-orange-700 transition-all duration-300 transform hover:scale-110"
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className="text-white block py-2 px-4 hover:bg-orange-700 transition-all duration-300 transform hover:scale-110"
            >
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link 
              href="/programs" 
              className="text-white block py-2 px-4 hover:bg-orange-700 transition-all duration-300 transform hover:scale-110"
            >
              Program
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className="text-white block py-2 px-4 hover:bg-orange-700 transition-all duration-300 transform hover:scale-110"
            >
              Kontak
            </Link>
          </li>
          <li>
            <Link 
              href="https://forms.gle/BqG2ox1ca1vif7Zw7" 
              className="text-white block py-2 px-4 bg-red-600 rounded hover:bg-red-700 transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pendaftaran
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
