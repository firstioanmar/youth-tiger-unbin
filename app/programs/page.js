import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

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
        <h1 className="text-4xl font-bold mb-4">Program</h1>
        <p className="text-lg mb-4">
          Youth Tiger Soccer School menawarkan berbagai program pelatihan sepak bola yang dirancang untuk membantu anak-anak dan remaja mengembangkan keterampilan sepak bola, fisik, dan mental. Berikut adalah beberapa program yang kami tawarkan:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Pengembangan Keterampilan Dasar Sepak Bola</h2>
            <p className="text-lg">
              Anak-anak diajarkan keterampilan dasar seperti menggiring bola (dribbling), menendang (shooting), passing, dan bertahan (defending). Program ini dirancang untuk membantu peserta memahami dasar-dasar sepak bola dan meningkatkan keterampilan mereka secara bertahap.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Pelatihan Fisik dan Mental</h2>
            <p className="text-lg">
              Program ini mencakup latihan fisik untuk meningkatkan kebugaran, kecepatan, kelincahan, serta pelatihan mental seperti kerja sama tim, kepercayaan diri, dan sportivitas. Kami memastikan bahwa peserta kami tidak hanya menjadi pemain yang hebat, tetapi juga individu yang kuat dan beretika tinggi.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Pendekatan Usia dan Tingkat Kemampuan</h2>
           <p className="text-lg">
              Pelatihan biasanya dibagi berdasarkan kelompok usia dan tingkat kemampuan, sehingga anak-anak dapat belajar sesuai dengan kapasitas mereka. Kami memahami bahwa setiap peserta memiliki kecepatan belajar yang berbeda, dan program kami dirancang untuk memenuhi kebutuhan setiap peserta.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Kompetisi dan Turnamen</h2>
            <p className="text-lg">
              Untuk meningkatkan pengalaman, peserta sering kali diberi kesempatan mengikuti pertandingan atau turnamen, baik internal maupun eksternal. Program ini membantu peserta memperoleh pengalaman nyata dan meningkatkan keterampilan mereka dalam situasi yang nyata.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Pendidikan Nilai Positif</h2>
            <p className="text-lg">
              Selain keterampilan teknis, sekolah ini juga berusaha menanamkan nilai-nilai positif seperti kedisiplinan, kerja keras, dan rasa hormat kepada sesama pemain. Kami percaya bahwa nilai-nilai ini sangat penting dalam membentuk karakter peserta kami.
            </p>
          </div>
        </div>
        <Link href="/about" className="mt-8 text-blue-500 hover:underline">
          Pelajari Lebih Lanjut Tentang Kami
        </Link>
      </main>
    </>
  )
}
