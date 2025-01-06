import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

export const metadata = {
  title: "Program Pelatihan Sepak Bola - Youth Tiger Soccer School",
  description: "Temukan berbagai program pelatihan sepak bola yang kami tawarkan untuk anak-anak dan remaja di Bogor.",
};

export default function Programs() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Navbar />
      <main className="container mx-auto p-4 md:p-8">
        <h1 className="text-4xl font-bold mb-4 text-orange-600 hover:text-orange-800 transition-colors duration-300">Program</h1>
        <p className="text-lg mb-4">
          Youth Tiger Soccer School menawarkan berbagai program pelatihan sepak bola yang dirancang untuk membantu anak-anak dan remaja mengembangkan keterampilan sepak bola, fisik, dan mental. Berikut adalah beberapa program yang kami tawarkan:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-2 text-red-600 hover:text-red-800 transition-colors duration-300">Pengembangan Keterampilan Dasar Sepak Bola</h2>
            <p className="text-lg">
              Anak-anak diajarkan keterampilan dasar seperti menggiring bola (dribbling), menendang (shooting), passing, dan bertahan (defending). Program ini dirancang untuk membantu peserta memahami dasar-dasar sepak bola dan meningkatkan keterampilan mereka secara bertahap.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-2 text-red-600 hover:text-red-800 transition-colors duration-300">Pelatihan Fisik dan Mental</h2>
            <p className="text-lg">
              Program ini mencakup latihan fisik untuk meningkatkan kebugaran, kecepatan, kelincahan, serta pelatihan mental seperti kerja sama tim, kepercayaan diri, dan sportivitas. Kami memastikan bahwa peserta kami tidak hanya menjadi pemain yang hebat, tetapi juga individu yang kuat dan beretika tinggi.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-2 text-red-600 hover:text-red-800 transition-colors duration-300">Pendekatan Usia dan Tingkat Kemampuan</h2>
            <p className="text-lg">
              Pelatihan biasanya dibagi berdasarkan kelompok usia dan tingkat kemampuan, sehingga anak-anak dapat belajar sesuai dengan kapasitas mereka. Kami memahami bahwa setiap peserta memiliki kecepatan belajar yang berbeda, dan program kami dirancang untuk memenuhi kebutuhan setiap peserta.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-2 text-red-600 hover:text-red-800 transition-colors duration-300">Kompetisi dan Turnamen</h2>
            <p className="text-lg">
              Untuk meningkatkan pengalaman, peserta sering kali diberi kesempatan mengikuti pertandingan atau turnamen, baik internal maupun eksternal. Program ini membantu peserta memperoleh pengalaman nyata dan meningkatkan keterampilan mereka dalam situasi yang nyata.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-2 text-red-600 hover:text-red-800 transition-colors duration-300">Pendidikan Nilai Positif</h2>
            <p className="text-lg">
              Selain keterampilan teknis, sekolah ini juga berusaha menanamkan nilai-nilai positif seperti kedisiplinan, kerja keras, dan rasa hormat kepada sesama pemain. Kami percaya bahwa nilai-nilai ini sangat penting dalam membentuk karakter peserta kami.
            </p>
          </div>
        </div>
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-4 text-orange-600 hover:text-orange-800 transition-colors duration-300">Jadwal Latihan</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-gray-200 text-left p-4 text-red-600">Hari</th>
                <th className="bg-gray-200 text-left p-4 text-red-600">Waktu</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100 transition-colors duration-300">
                <td className="border p-4">Selasa</td>
                <td className="border p-4">16.00–18.00 WIB</td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors duration-300">
                <td className="border p-4">Kamis</td>
                <td className="border p-4">16.00–18.00 WIB</td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors duration-300">
                <td className="border p-4">Minggu</td>
                <td className="border p-4">08.00–10.00 WIB</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-4 text-orange-600 hover:text-orange-800 transition-colors duration-300">Pricing</h2>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-2 text-red-600 hover:text-red-800 transition-colors duration-300">Biaya Pendaftaran</h3>
            <p className="text-lg mb-4">
              Sekolah ini menerima siswa dengan rentang usia 4 hingga 16 tahun.
            </p>
            <p className="text-lg">
              Biaya bulanan: Rp 1.500.000
            </p>
            <p className="text-lg">
              Biaya pendaftaran awal: Rp 500.000
            </p>
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
                <a href="https://www.instagram.com/youthtigersoccerschool" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-500 transition-colors duration-300">
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
