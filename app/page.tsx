import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 font-sans">
      <div className="max-w-2xl mx-auto bg-white p-10 rounded-xl shadow-sm border border-gray-200">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Praktikum Pemrograman Web II
        </h1>
        <p className="text-gray-600 mb-8">
          Selamat datang di proyek Next.js pertama saya. Proyek ini menggunakan 
          <strong> App Router</strong> dan didesain dengan <strong>Tailwind CSS</strong>.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h2 className="font-semibold text-blue-800 mb-2">Tugas Pertemuan 1:</h2>
          <p className="text-sm text-blue-700 mb-4">
            Membuat routing dasar dan halaman profil singkat mahasiswa.
          </p>
          <Link 
            href="/profile" 
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Buka Profil Mahasiswa →
          </Link>
        </div>
      </div>
    </main>
  );
}