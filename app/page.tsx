import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-[#111] border border-[#333] rounded-2xl p-10 shadow-[0_0_50px_-12px_rgba(51,153,51,0.2)]">
        
        <div className="flex items-center gap-2 mb-8">
          <div className="w-3 h-3 bg-[#339933] rounded-full animate-pulse"></div>
          <span className="text-[#339933] font-mono text-xs font-bold tracking-[0.2em]">STABLE_CONNECTION</span>
        </div>

        <h1 className="text-5xl font-black text-white mb-6 tracking-tighter">
          WEB<span className="text-[#339933]">_PRO_II</span>
        </h1>

        <p className="text-gray-400 font-mono text-sm mb-10 leading-relaxed border-l-2 border-[#333] pl-4">
          // Project: Next.js v15 <br />
          // Author: Gema Admaja <br />
          // Status: <span className="text-white font-bold">Online</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 font-mono">
          <Link 
            href="/profile" 
            className="flex-1 bg-[#339933] text-black text-center font-bold py-4 rounded-lg hover:bg-[#40c040] transition-all"
          >
            {">"} RUN_PROFILE
          </Link>
          <div className="flex-1 bg-black border border-[#333] text-gray-500 text-center py-4 rounded-lg">
            3.34.24.0.09
          </div>
        </div>
      </div>
    </main>
  );
}