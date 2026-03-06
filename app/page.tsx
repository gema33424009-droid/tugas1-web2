import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-[#ededed] font-mono p-6">
      <div className="relative group max-w-2xl w-full">
        {/* Efek Glow Hijau Node.js */}
        <div className="absolute -inset-1 bg-[#339933] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        
        <div className="relative bg-[#111] border border-[#222] rounded-2xl p-10 shadow-2xl">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-3 h-3 rounded-full bg-[#339933] animate-pulse"></div>
            <span className="text-[#339933] text-xs tracking-widest uppercase font-bold">Server Ready</span>
          </div>

          <h1 className="text-5xl font-black tracking-tighter mb-6 text-white">
            WEB<span className="text-[#339933]">_PRO_II</span>
          </h1>

          <p className="text-slate-400 text-sm mb-10 leading-relaxed border-l-2 border-[#333] pl-4">
            // Menginisialisasi proyek Next.js Pertemuan 1. <br />
            // Framework: <span className="text-white">Next.js 15 (App Router)</span> <br />
            // Status: <span className="text-[#339933]">Stable</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/profile" 
              className="flex-1 text-center bg-[#339933] text-black font-bold py-4 rounded-lg hover:bg-[#40c040] transition-all transform hover:scale-[1.02]"
            >
              RUN PROFILE
            </Link>
            <div className="flex-1 text-center bg-black border border-[#333] text-[#666] py-4 rounded-lg">
              v3.34.24.0.09
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}