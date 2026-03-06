import Link from 'next/link';

export default function About() {
  const socialMedia = [
    { platform: "Instagram", handle: "@gmadmj4._", link: "https://instagram.com/gmadmj4._" },
    { platform: "TikTok", handle: "@gempoolllll", link: "https://tiktok.com/@gempoolllll" },
    { platform: "WhatsApp", handle: "085150711745", link: "https://wa.me/6285150711745" },
    { platform: "YouTube", handle: "Gema Admaja", link: "https://youtube.com/@GemaAdmaja" } // Sesuaikan link jika ada
  ];

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-[#ededed] font-mono p-6">
      <div className="max-w-2xl w-full bg-[#0d0d0d] border border-[#222] rounded-xl overflow-hidden shadow-2xl">
        
        {/* Terminal Header */}
        <div className="bg-[#1a1a1a] px-4 py-3 border-b border-[#222] flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <span className="text-[10px] text-slate-500 font-bold tracking-widest text-center">contact_channels.sh</span>
        </div>

        <div className="p-8">
          <h1 className="text-2xl font-bold text-[#339933] mb-2 uppercase tracking-tighter">
            {">"} Social_Presence
          </h1>
          <p className="text-slate-500 text-xs mb-8 border-b border-[#222] pb-4 italic">
            // Hubungkan dengan pengembang untuk kolaborasi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {socialMedia.map((social, index) => (
              <a 
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#111] border border-[#222] rounded-lg hover:border-[#339933] hover:bg-[#151515] transition-all group"
              >
                <p className="text-[#339933] text-[10px] font-bold uppercase mb-1">{social.platform}</p>
                <p className="text-white text-sm group-hover:underline">{social.handle}</p>
              </a>
            ))}
          </div>

          <div className="space-y-4">
             <div className="p-4 bg-[#1a1a1a]/50 border-l-4 border-[#339933] rounded-r-lg">
                <p className="text-xs text-slate-400 leading-relaxed">
                   "Halaman ini dikembangkan sebagai bentuk demonstrasi navigasi antar halaman (Routing) 
                   pada framework Next.js."
                </p>
             </div>
          </div>

          <div className="mt-10 flex gap-6 text-sm">
            <Link href="/" className="text-[#339933] hover:text-white transition-colors">
              {">"} cd ..
            </Link>
            <Link href="/profile" className="text-[#339933] hover:text-white transition-colors">
              {">"} view_profile
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}