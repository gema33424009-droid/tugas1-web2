import Link from 'next/link';

export default function Profile() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-[#ededed] font-mono p-6">
      <div className="max-w-2xl w-full bg-[#0d0d0d] border border-[#222] rounded-xl overflow-hidden shadow-2xl">
        
        {/* Header ala VS Code */}
        <div className="bg-[#1a1a1a] px-4 py-3 border-b border-[#222] flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">profile.json</span>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <span className="text-[#339933]">const</span> <span className="text-blue-400">mahasiswa</span> = {"{"}
            <div className="pl-6 mt-3 space-y-2">
              <p><span className="text-purple-400">nama</span>: <span className="text-yellow-200">"Gema Admaja Abi Iskandar"</span>,</p>
              <p><span className="text-purple-400">nim</span>: <span className="text-yellow-200">"3.34.24.0.09"</span>,</p>
              <p><span className="text-purple-400">kelas</span>: <span className="text-yellow-200">"IK-2A"</span>,</p>
              <p><span className="text-purple-400">prodi</span>: <span className="text-yellow-200">"D3 Teknik Informatika"</span>,</p>
              <p><span className="text-purple-400">minat</span>: [<span className="text-yellow-200">"Backend"</span>, <span className="text-yellow-200">"UI/UX"</span>]</p>
            </div>
            {"}"};
          </div>

          <div className="pt-6 border-t border-[#222]">
            <Link 
              href="/" 
              className="text-[#339933] hover:text-white transition-colors flex items-center gap-2"
            >
              <span>{">"}</span> cd .. <span className="animate-pulse w-2 h-5 bg-[#339933] inline-block"></span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}