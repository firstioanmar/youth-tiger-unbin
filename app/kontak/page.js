import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

export const metadata = {
  title: "Kontak Youth Tiger Soccer School - Hubungi Kami",
  description: "Temukan informasi kontak Youth Tiger Soccer School, alamat, jam operasional, dan cara menghubungi kami.",
};

export default function Kontak() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Navbar />
      <main className="container mx-auto p-4 md:p-8">
        <h1 className="text-4xl font-bold mb-4">Kontak</h1>
        <p className="text-lg mb-4">
          Jika Anda memiliki pertanyaan atau ingin mendaftar program kami, silakan hubungi kami melalui informasi kontak berikut:
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Alamat</h2>
          <p className="text-lg">Stadion Elang Bondol, Jl. Salabenda Raya, Atang Senjaya, Kec. Kemang, Kabupaten Bogor, Jawa Barat 16310</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-2xl font-bold mb-2">Jam Operasional</h2>
          <p className="text-lg">Selasa dan Kamis pukul 16.00–18.00 WIB</p>
          <p className="text-lg">Minggu pukul 08.00–10.00 WIB</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-2xl font-bold mb-2">Kontak</h2>
          <p className="text-lg">Email: info@youthtigersoccerschool.com</p>
          <p className="text-lg">Telepon: +62 812 345 6789</p>
        </div>
        <Link href="/program" className="mt-8 text-blue-500 hover:underline">
          Pelajari Lebih Lanjut Tentang Program Kami
        </Link>
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