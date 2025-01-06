import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

export const metadata = {
  title: "Tentang Youth Tiger Soccer School - Visi dan Misi",
  description: "Pelajari lebih lanjut tentang Youth Tiger Soccer School, visi, misi, dan tujuan kami dalam mengembangkan generasi pemain sepak bola yang hebat.",
};

export default function About() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Navbar />
      <main className="container mx-auto p-4 md:p-8">
        <div className="hidden md:block mb-8">
          <div className="flex">
            <div className=" w-1/2 bg-white rounded-lg shadow-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300">
              <Image
                src="/path/to/your/image.jpg" // Ganti dengan path gambar Anda
                alt="Youth Tiger Soccer School"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className=" w-1/2 p-4">
              <h1 className="text-4xl font-bold mb-4">Tentang Kami</h1>
              <p className="text-lg mb-4">
                Youth Tiger Soccer School adalah sebuah program pelatihan sepak bola yang dirancang untuk anak-anak dan remaja di Bogor. Kami berkomitmen untuk membantu setiap peserta kami mencapai potensi maksimal dalam bermain sepak bola.
              </p>
              <p className="text-lg">
                Program kami mencakup berbagai aspek penting seperti pengembangan keterampilan dasar sepak bola, pelatihan fisik dan mental, pendekatan usia dan tingkat kemampuan, serta kompetisi dan turnamen. Selain itu, kami juga menanamkan nilai-nilai positif seperti kedisiplinan, kerja keras, dan rasa hormat kepada sesama pemain.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4">Visi Kami</h2>
              <p className="text-lg">
                Visi kami adalah menjadi pusat pelatihan sepak bola terkemuka di Bogor yang mampu membentuk generasi pemain sepak bola yang hebat dan beretika tinggi.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4">Misi Kami</h2>
              <p className="text-lg">
                Misi kami adalah menyediakan program pelatihan sepak bola yang berkualitas tinggi, membantu peserta kami mengembangkan keterampilan sepak bola, fisik, dan mental, serta menanamkan nilai-nilai positif.
              </p>
              <Link href="/programs" className="mt-8 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                Pelajari Lebih Lanjut Tentang Program Kami
              </Link>
            </div>
          </div>
        </div>
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
