import Head from 'next/head';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export const metadata = {
  title: "Pelatihan Sepak Bola Anak di Bogor - Youth Tiger Soccer School",
  description: "Pelatihan sepak bola terbaik untuk anak-anak dan remaja di Bogor. Kembangkan keterampilan sepak bola, fisik, dan mental dengan program kami.",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-10 lg:p-24">
        <h1 className="text-4xl font-bold">Youth Tiger Soccer School</h1>
        <p className="text-lg">Pelatihan Sepak Bola untuk Anak-Anak dan Remaja</p>
        <p className="text-lg mt-4">
          Youth Tiger Soccer School adalah program pelatihan sepak bola yang dirancang khusus untuk anak-anak dan remaja di Bogor. Kami menawarkan berbagai program yang membantu mengembangkan keterampilan dasar sepak bola, pelatihan fisik dan mental, serta pendidikan nilai positif.
        </p>
        <p className="text-lg mt-4">
          Dengan pengalaman dan dedikasi kami, kami berkomitmen untuk membentuk generasi pemain sepak bola yang hebat dan beretika tinggi.
        </p>
        <Link href="/programs" className="mt-8 text-blue-500 hover:underline">
          Pelajari Lebih Lanjut Tentang Program Kami
        </Link>
      </main>
    </>
  )
}
