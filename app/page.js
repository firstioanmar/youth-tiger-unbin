'use client'; // Tandai komponen sebagai komponen klien

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pelatihan Sepak Bola Anak di Bogor - Youth Tiger Soccer School</title>
        <meta name="description" content="Pelatihan sepak bola terbaik untuk anak-anak dan remaja di Bogor. Kembangkan keterampilan sepak bola, fisik, dan mental dengan program kami." />
      </Head>
      <Navbar />
      <div className="banner bg-cover bg-center h-96 xl:h-[40rem] relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex items-center justify-center h-full text-white text-center relative">
          <div>
            <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold uppercase">Youth Tiger Soccer School</h1>
            <p className="text-lg md:text-2xl xl:text-4xl mt-4">Pelatihan Sepak Bola untuk Anak-Anak dan Remaja</p>
          </div>
        </div>
        <style jsx>{`
          .banner {
            background-image: url("/images/banner.jpg");
          }
        `}</style>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="max-w-6xl py-1 px-2 md:px-7 md:py-5 mt-20">
        <p className="text-lg text-center">
          Youth Tiger Soccer School adalah program pelatihan sepak bola yang dirancang khusus untuk anak-anak dan remaja di Bogor. Kami menawarkan berbagai program yang membantu mengembangkan keterampilan dasar sepak bola, pelatihan fisik dan mental, serta pendidikan nilai positif.
        </p>
        <p className="text-lg text-center mt-4">
          Dengan pengalaman dan dedikasi kami, kami berkomitmen untuk membentuk generasi pemain sepak bola yang hebat dan beretika tinggi.
        </p>
        <Link href="/programs" className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out block text-center">
          Pelajari Lebih Lanjut Tentang Program Kami
        </Link>
      </section>
        <section className="max-w-6xl py-1 px-2 md:px-7 md:py-5 mt-20 bg-orange-600">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Para Pelatih</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </section>

        <section className="max-w-6xl mx-auto mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
              <p className="text-gray-700">
                "Saya sangat senang dengan program ini. Anak saya menjadi lebih percaya diri dan kreatif dalam bermain sepak bola."
              </p>
              <p className="mt-4 text-gray-600">- Parent 1</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
              <p className="text-gray-700">
                "Pelatihan ini membantu anak saya meningkatkan keterampilannya dan belajar nilai-nilai penting dalam hidup."
              </p>
              <p className="mt-4 text-gray-600">- Parent 2</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
              <p className="text-gray-700">
                "Saya merasa sangat beruntung bisa bergabung dengan Youth Tiger Soccer School. Programnya sangat baik."
              </p>
              <p className="mt-4 text-gray-600">- Parent 3</p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
              <Image src="/images/gallery1.jpg" alt="Gallery 1" width={300} height={300} className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
              <Image src="/images/gallery2.jpg" alt="Gallery 2" width={300} height={300} className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
              <Image src="/images/gallery3.jpg" alt="Gallery 3" width={300} height={300} className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
              <Image src="/images/gallery4.jpg" alt="Gallery 4" width={300} height={300} className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
              <Image src="/images/gallery5.jpg" alt="Gallery 5" width={300} height={300} className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
              <Image src="/images/gallery6.jpg" alt="Gallery 6" width={300} height={300} className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Home Ground</h3>
              <p>Stadion Elang Bondol, Jl. Salabenda Raya, Atang Senjaya, Kec. Kemang, Kabupaten Bogor, Jawa Barat 16310</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Kontak</h3>
              <p>Telepon: +62 812 3456 7890</p>
              <p>Email: info@youthtigersoccerschool.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Sosial Media</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/youthtigersoccerschool" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                <FaInstagram/>
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
