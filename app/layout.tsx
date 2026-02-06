import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TH. DIALLO | Portfolio",
  description: "Ingénieur en Sécurité & Technologies Informatiques",
};

const CircularProgress = ({ percentage, label }: { percentage: number; label: string }) => {
  const radius = 36;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className="flex flex-col items-center justify-center p-2">
      <div className="relative w-16 h-16">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50" cy="50" r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-slate-800"
          />
          <circle
            cx="50" cy="50" r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            className="text-cyan-400 transition-all duration-1000"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white">
          {percentage}%
        </div>
      </div>
      <h6 className="mt-2 text-[10px] uppercase tracking-wider font-medium text-slate-300">{label}</h6>
    </div>
  );
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a1120] text-slate-300`}>
        
        <div className="flex flex-col lg:flex-row h-screen w-full overflow-hidden">
          
          <aside className="hidden lg:flex flex-col w-[250px] min-w-[250px] bg-[#0d1629] h-full border-r border-white/5">
            <div className="flex-none p-8 text-center border-b border-white/5 bg-[#111a2e]">
              <div className="w-20 h-20 relative mx-auto mb-4 rounded-full overflow-hidden border-3 border-cyan-500 shadow-lg">
                <Image src="/thd.jpeg" alt="Profil" fill className="object-cover" />
              </div>
              <h2 className="text-white font-bold text-sm uppercase leading-tight">T. Hammady DIALLO</h2>
              <p className="text-[9px] text-cyan-400 font-mono mt-2 uppercase tracking-widest leading-tight">
                Ingénieur en Sécurité & Tech
              </p>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              <div className="space-y-2 text-[14px]">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">Ville:</span>
                  <span className="text-slate-400">Caen, FR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">Âge:</span>
                  <span className="text-slate-400">24 ans</span>
                </div>
              </div>

              <hr className="border-white/5" />

              <div>
                <p className="text-white font-bold text-[16px] uppercase tracking-wider mb-4 text-center"> Langues parlées</p>
                <div className="grid grid-cols-2 gap-2">
                  <CircularProgress percentage={100} label="Français" />
                  <CircularProgress percentage={60} label="Anglais" />
                  <CircularProgress percentage={100} label="Poular" />
                  <CircularProgress percentage={70} label="Malinke" />
                </div>
              </div>

              <hr className="border-white/5" />

              {/* Compétences Rapides (Optionnel mais pro) */}
              {/* <div className="space-y-2 text-[10px]">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-cyan-500 text-[8px]"></i>
                  <span>Windows / Linux Server</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-cyan-500 text-[8px]"></i>
                  <span>Cybersécurité N1/N2</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-cyan-500 text-[8px]"></i>
                  <span>React / Next.js / Tailwind</span>
                </div>
              </div> */}
            </div>

            {/* réseaux sociaux */}
            <div className="flex-none bg-[#0d1629] p-4 flex justify-around items-center border-t border-white/5 text-slate-400">
              <a href="#" className="hover:text-cyan-400 transition-all text-lg">
                <i className="fa-brands fa-github fa-lg"></i>
              </a>
              <a href="#" className="hover:text-cyan-400 transition-all text-lg">
                <i className="fa-brands fa-linkedin fa-lg"></i>
              </a>
              <a href="#" className="hover:text-cyan-400 transition-all text-lg">
                <i className="fa-brands fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="hover:text-cyan-400 transition-all text-lg">
                <i className="fa-solid fa-envelope fa-lg"></i>
              </a>
            </div>

          </aside>

          
          {/* block central */}
          <main className="flex-1 h-full overflow-y-auto flex flex-col bg-[#0a1120]">
            
            <header className="flex flex-col md:flex-row justify-between items-center p-4 lg:p-6 bg-[#0d1629] border-b border-white/5 sticky top-0 z-50 gap-4 text-center">
              <h1 className="text-cyan-400 font-bold text-xl uppercase tracking-tighter">TH. DIALLO</h1>
              <div className="flex flex-col sm:flex-row items-center gap-3 text-[11px] font-mono text-slate-400">
                <a href="mailto:dialloth9188@gmail.com" className="hover:text-cyan-400 transition-colors">dialloth9188@gmail.com</a>
                <span className="hidden sm:block text-white/10">|</span>
                <a href="tel:+33759840773" className="hover:text-cyan-400 transition-colors">+33 7 59 84 07 73</a>
              </div>
            </header>

            <nav className="sticky top-0 z-[100] bg-[#0a1120]/80 backdrop-blur-md border-b border-white/5 flex flex-row lg:flex-row justify-center lg:justify-end items-center gap-4 lg:gap-8 p-6 lg:px-12 text-sm font-medium">
              <Link href="/" className="hover:text-cyan-400 transition">Accueil</Link>
              <Link href="/portfolio" className="hover:text-white transition">Portfolio</Link>
              <Link href="/parcours" className="hover:text-white transition">Parcours</Link>
              <Link href="/contact">
                <button className="border border-cyan-500 text-cyan-500 px-4 py-2 rounded-md hover:bg-cyan-500/10 transition">
                  Me contacter
                </button>
              </Link>
            </nav>

            {/* le contenu dynamique */}
            <div className="flex-1">
              {children}
            </div>
          </main>

          {/* bloc droit */}
          <nav className="hidden lg:flex w-18 bg-[#0d1629] h-full border-l border-white/5 flex-col items-center justify-center py-8">
              <div className="h-full flex items-center justify-center">
                  <span className="rotate-90 whitespace-nowrap font-black tracking-[0.2em] text-[20px] text-white/50 uppercase inline-block origin-center select-none">
                      THD HAMANA . {new Date().getFullYear()}
                  </span>
              </div>
          </nav>
        </div>
      </body>
    </html>
  );
}