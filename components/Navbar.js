"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-orange-600 p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/images/logo.jpg"
            alt="Logo Brand"
            width={32}
            height={32}
            className="mr-2"
          />
          <Link href="/" className="text-white text-xl md:text-2xl font-bold">YTSS</Link>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul className={`lg:flex gap-2 ${isOpen ? 'flex flex-col absolute top-16 right-0 bg-orange-600 w-full p-4 z-50 px-6' : 'hidden'}`}>
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
              className="text-white block py-2 px-4 bg-red-600 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              Daftar Sekarang
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
