import Image from "next/image";

export default function Home() {
  return (
    // Conteneur principal - Flex-col sur mobile, Flex-row sur PC
    <div className="flex flex-col lg:flex-row h-screen w-full overflow-hidden bg-[#0a1120] text-slate-300">
      
      {/* --- HEADER MOBILE UNIQUEMENT --- */}
      <header className="lg:hidden flex justify-between items-center p-4 bg-[#0d1629] border-b border-white/5">
        <h1 className="text-cyan-400 font-bold text-xl">TH. DIALLO</h1>
        <button className="text-white text-2xl">☰</button>
      </header>

      {/* 1. BLOC GAUCHE (Profil Sidebar - Caché sur mobile) */}
      <aside className="hidden lg:flex flex-col w-[300px] bg-[#0d1629] h-full overflow-y-auto border-r border-white/5">
        <div className="p-8 text-center">
          <div className="w-24 h-24 relative mx-auto mb-4 rounded-full overflow-hidden border-2 border-cyan-500">
             {/* Remplace par ton image réelle */}
             <div className="bg-slate-700 w-full h-full" /> 
          </div>
          <h2 className="text-white font-bold text-lg">T. Hammady DIALLO</h2>
          <p className="text-xs text-cyan-400 font-mono">Développeur Full Stack</p>
        </div>
        
        <div className="p-6 space-y-4 text-sm">
          <div className="flex justify-between"><span className="text-white">Ville:</span><span>Caen, FR</span></div>
          <div className="flex justify-between"><span className="text-white">Âge:</span><span>22 ans</span></div>
          <hr className="border-white/5" />
          {/* Section Langues et Skills à ajouter ici */}
        </div>
      </aside>

      {/* 2. BLOC CENTRE (Le "Hero" de ton image) */}
      <main className="flex-1 h-full overflow-y-auto">
        {/* Navigation Desktop Interne */}
        <nav className="hidden lg:flex justify-end items-center gap-8 p-6 px-12 text-sm font-medium">
          <a href="#" className="text-cyan-400 border-b-2 border-cyan-400 pb-1">Accueil</a>
          <a href="#" className="hover:text-white transition">Portfolio</a>
          <a href="#" className="hover:text-white transition">Parcours</a>
          <button className="border border-cyan-500 text-cyan-500 px-4 py-2 rounded-md hover:bg-cyan-500/10 transition">
            Me contacter
          </button>
        </nav>

        {/* Section Hero */}
        <div className="flex flex-col-reverse xl:flex-row items-center justify-center min-h-[80%] p-6 lg:p-12 gap-10">
          
          {/* Texte à gauche */}
          <div className="flex-1 max-w-2xl space-y-6">
            <p className="text-cyan-400 font-mono text-sm tracking-widest">
              Recherche une alternance (24 mois) à partir de septembre 2026
            </p>
            <h1 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight">
              Ingénieur <span className="bg-orange-700 px-2 text-white">en</span> Sécurité & Technologies Informatiques
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Spécialisé en <span className="text-white font-semibold">Administration Systèmes, Réseaux et Cybersécurité</span>. 
              Expertise confirmée en support N1/N2 et maintenance d'infrastructures hybrides Windows/Linux.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-cyan-500 text-[#0a1120] px-8 py-3 font-bold rounded shadow-lg shadow-cyan-500/20 hover:scale-105 transition">
                Voir mes réalisations
              </button>
              <button className="border border-slate-600 text-white px-8 py-3 font-bold rounded hover:bg-white/5 transition">
                Télécharger mon CV
              </button>
            </div>
          </div>

          <div className="relative group">
          {/* L'effet de lueur Cyan derrière */}
          <div className="absolute -inset-1 bg-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 bg-[#162238] rounded-3xl border-2 border-cyan-500/30 overflow-hidden shadow-2xl">
            <Image 
              src="/thd.jpeg" // Assure-toi que le fichier est dans le dossier public/
              alt="Thierno Hammady DIALLO"
              fill // Remplit le conteneur parent
              className="object-cover" // Garde les proportions sans déformer
              priority // Charge l'image en priorité (LCP)
            />
          </div>
        </div>

        </div>
      </main>

      {/* 3. BLOC DROITE (Menu Vertical - Devient invisible ou fusionne sur mobile) */}
      <nav className="hidden lg:flex w-20 bg-[#0d1629] h-full flex-col items-center py-8 border-l border-white/5">
        <div className="text-white text-2xl mb-12 hover:text-cyan-400 cursor-pointer">☰</div>
        <div className="flex-1 flex items-center">
           <span className="rotate-90 whitespace-nowrap font-black tracking-[0.2em] text-2xl text-white/10 uppercase">
             THD Hamana
           </span>
        </div>
      </nav>

    </div>
  );
}