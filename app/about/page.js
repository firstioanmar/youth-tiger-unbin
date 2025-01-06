import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

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
        <Link href="/programs" className="mt-8 text-blue-500 hover:underline">
          Pelajari Lebih Lanjut Tentang Program Kami
        </Link>
      </main>
    </>
  )
}
