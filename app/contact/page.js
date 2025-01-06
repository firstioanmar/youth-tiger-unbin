import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

export const metadata = {
  title: "Kontak Youth Tiger Soccer School - Hubungi Kami",
  description: "Temukan informasi kontak Youth Tiger Soccer School, alamat, jam operasional, dan cara menghubungi kami.",
};

export default function Contact() {
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
          <p className="text-lg">Stadion Elang Bondol, Bogor</p>
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
        <Link href="/programs" className="mt-8 text-blue-500 hover:underline">
          Pelajari Lebih Lanjut Tentang Program Kami
        </Link>
      </main>
    </>
  )
}
