'use client'; // Tandai komponen sebagai komponen klien

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa'; // Import ikon chevron

export default function Home() {
  const scrollToMain = () => {
    const mainSection = document.getElementById('main-section');
    if (mainSection) {
      mainSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Pelatihan Sepak Bola Anak di Bogor - Youth Tiger Soccer School</title>
        <meta name="description" content="Pelatihan sepak bola terbaik untuk anak-anak dan remaja di Bogor. Kembangkan keterampilan sepak bola, fisik, dan mental dengan program kami." />
      </Head>
      <Navbar />
      <div className="banner bg-cover bg-center h-96 xl:h-[50rem] relative">
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="flex items-center justify-center h-full text-white text-center relative">
    <div className="animate-slide-up">
      <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold uppercase">Youth Tiger Soccer School</h1>
      <p className="text-lg md:text-2xl xl:text-4xl mt-4">Pelatihan Sepak Bola untuk Anak-Anak dan Remaja</p>
    </div>
  </div>
  <style jsx>{`
    .banner {
      background-image: url("/images/banner.jpg");
    }
    @keyframes slide-up {
      0% {
        transform: translateY(20px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
    .animate-slide-up {
      animation: slide-up 0.9s ease-out forwards;
    }
  `}</style>
</div>

      
      {/* Tombol untuk scroll ke section main */}
      <div className="flex justify-center mt-4">
        <button 
          onClick={scrollToMain} 
          className="flex items-center justify-center text-blue-500 hover:text-blue-600 transition duration-300 animate-bounce"
        >
          <FaChevronDown size={64} />
        </button>
      </div>

      <main id="main-section" className="flex min-h-screen flex-col items-center justify-between">
      <section className="max-w-6xl text-center py-1 px-2 md:px-7 md:py-5 mt-20">
        <p className=" text-lg md:text-2xl text-center">
          Youth Tiger Soccer School adalah program pelatihan sepak bola yang dirancang khusus untuk anak-anak dan remaja di Bogor. Kami menawarkan berbagai program yang membantu mengembangkan keterampilan dasar sepak bola, pelatihan fisik dan mental, serta pendidikan nilai positif.
        </p>
        <p className="text-md md:text-lg text-center mt-4">
          Dengan pengalaman dan dedikasi kami, kami berkomitmen untuk membentuk generasi pemain sepak bola yang hebat dan beretika tinggi.
        </p>
        <Link href="/tentang-kami" className="mt-8 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
          Pelajari Lebih Lanjut Tentang Kami
        </Link>
      </section>
      <section className="max-w-6xl py-1 px-2 md:px-7 md:py-5 mt-20 rounded-xl bg-orange-600">
  <h2 className="text-3xl font-bold mb-8 text-center text-white">Para Pelatih</h2>
  <div className="flex flex-col items-center">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
        <Image src="/images/coach1.jpg" alt="Coach 1" width={300} height={300} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold">John Doe</h3>
          <p className="text-gray-600">Head Coach</p>
          <p className="mt-2 text-gray-700">
            John Doe adalah pelatih profesional dengan pengalaman lebih dari 10 tahun dalam pelatihan sepak bola.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
        <Image src="/images/coach2.jpg" alt="Coach 2" width={300} height={300} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold">Jane Smith</h3>
          <p className="text-gray-600">Assistant Coach</p>
          <p className="mt-2 text-gray-700">
            Jane Smith memiliki pengalaman dalam mengembangkan keterampilan pemain muda dan membantu mereka berkembang.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        <section className="max-w-6xl mx-auto mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Testimoni</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
              <p className="text-gray-700">
                "Saya sangat senang dengan program ini. Anak saya menjadi lebih percaya diri dan kreatif dalam bermain sepak bola."
              </p>
              <p className="mt-4 text-gray-600">- Tirtayasa Samosir (wali murid)</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
              <p className="text-gray-700">
                "Pelatihan ini membantu anak saya meningkatkan keterampilannya dan belajar nilai-nilai penting dalam hidup."
              </p>
              <p className="mt-4 text-gray-600">- Reksa Kuswoyo (wali murid)</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
              <p className="text-gray-700">
                "Saya merasa sangat beruntung bisa bergabung dengan Youth Tiger Soccer School. Programnya sangat baik."
              </p>
              <p className="mt-4 text-gray-600">- Dian Puspasari (wali murid)</p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl py-1 px-2 md:px-7 md:py-5 mt-20 mb-20 rounded-xl bg-orange-600">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Galeri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
              <Image src="/images/galeri-1.jpg" alt="Gallery 1" width={300} height={300} className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
              <Image src="/images/galeri-2.jpg" alt="Gallery 2" width={300} height={300} className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
              <Image src="/images/galeri-3.jpg" alt="Gallery 3" width={300} height={300} className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-4 rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4">Home Ground</h3>
              <p>Stadion Elang Bondol, Jl. Salabenda Raya, Atang Senjaya, Kec. Kemang, Kabupaten Bogor, Jawa Barat 16310</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4">Kontak</h3>
              <p>Telepon: +62 812 3456 7890</p>
              <p>Email: info@youthtigersoccerschool.com</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4">Sosial Media</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/youthtigersoccerschool" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-500">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Youth Tiger Soccer School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
