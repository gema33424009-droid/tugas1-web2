import Link from 'next/link';

export default function Profile() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 font-sans">
      <div className="max-w-2xl mx-auto bg-white p-10 rounded-xl shadow-sm border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
          Profil Mahasiswa
        </h1>
        
        <div className="space-y-4 text-gray-700">
          <div className="flex border-b border-gray-50 py-2">
            <span className="w-32 font-medium text-gray-500">Nama</span>
            <span>: Gema Admaja Abi Iskandar</span>
          </div>
          <div className="flex border-b border-gray-50 py-2">
            <span className="w-32 font-medium text-gray-500">NIM</span>
            <span>: 3.34.24.0.09</span>
          </div>
          <div className="flex border-b border-gray-50 py-2">
            <span className="w-32 font-medium text-gray-500">Kelas / Prodi</span>
            <span>: IK-2A / D3 Teknik Informatika</span>
          </div>
          <div className="flex border-b border-gray-50 py-2">
            <span className="w-32 font-medium text-gray-500">Minat Web</span>
            <span>: Backend Development & Cloud Computing</span>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}