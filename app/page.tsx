"use client";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col-reverse xl:flex-row items-center justify-center min-h-[80vh] p-6 lg:p-12 gap-10">
        {/* Texte à gauche */}
        <div className="flex-1 max-w-2xl space-y-6">
          <p className="text-cyan-400 font-mono text-lg tracking-widest opacity-80">
            Recherche une alternance (36 mois) a partir de septembre 2026
          </p>
          
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight min-h-[120px]">
            Ingénieur <span className="bg-orange-700 px-2 text-white italic">en</span> <br />
            <span className="text-cyan-400">
              <Typewriter
                options={{
                  strings: ['Sécurité Informatique', 'Technologies Réseaux', 'Développement Full Stack', 'Administration Systèmes'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 75,
                }}
              />
            </span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed">
            Spécialisé en <span className="text-white font-semibold">Administration Systèmes, Réseaux et Cybersécurité</span>. 
            Expertise confirmée en support N1/N2 et maintenance d'infrastructures hybrides Windows/Linux.
          </p>
          
          <div className="flex flex-col lg:flex-row items-center lg:justify-start gap-4 pt-4">
            {/* Bouton 1 */}
            <Link href="/portfolio" className="w-full lg:w-auto">
              <button className="w-full lg:w-auto text-md bg-cyan-500 text-[#0a1120] px-4 py-3 font-bold rounded shadow-lg shadow-cyan-500/20 hover:scale-110 transition-all tracking-wider">
                Voir mes réalisations
              </button>
            </Link>

            {/* Bouton 2 */}
            <Link href="#competences" className="w-full lg:w-auto">
              <button className="w-full lg:w-auto text-md bg-cyan-500 text-[#0a1120] px-4 py-3 font-bold rounded shadow-lg shadow-cyan-500/20 hover:scale-110 transition-all tracking-wider">
                Mes compétences
              </button>
            </Link>

            {/* Bouton 3 */}
            <Link 
              href="https://www.canva.com/design/DAG4PfpUG9M/wsrZ84ge6svm3_Xb4gSwsw/edit?..." 
              target="_blank" 
              className="w-full lg:w-auto"
            >
              <button className="w-full lg:w-auto text-md border border-slate-600 text-white px-4 py-3 font-bold rounded hover:bg-white/20  hover:scale-110 transition-all tracking-wider">
                Télécharger mon CV
              </button>
            </Link>
          </div>
        </div>

  
        <div className="relative group">
          <div className="absolute -inset-1 bg-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative w-64 h-64 lg:w-93 lg:h-93 bg-[#162238] rounded-3xl border-3 border-cyan-500 overflow-hidden shadow-lg">
            <Image src="/thd.jpeg" alt="Profil" fill className="object-cover" priority />
          </div>
        </div>

      </section>

      <section className="p-6 lg:p-12 grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#0a1120]">
        <div className="bg-[#111a2e] p-8 rounded-xl border border-white/5 transition-all duration-300 group 
                        hover:border-cyan-500/50 hover:-translate-y-1 hover:-translate-x-1 
                        hover:shadow-[8px_8px_0px_0px_rgba(6,182,212,0.8)]">
          <div className="text-5xl mb-6 text-slate-400 group-hover:text-cyan-400 transition-colors">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <h3 className="text-white font-bold text-2xl mb-4">Sécurité Offensive & Défensive</h3>
          <p className="text-slate-400 text-md leading-relaxed">
            Maîtrise de la <span className="text-white">Blue Team</span> via SIEM/XDR (Splunk, Wazuh) et détection NIDS. Expertise <span className="text-white">Red Team</span> (TryHackMe/HackTheBox) : audit de vulnérabilités et tests d'intrusion.
          </p>
        </div>

        {/* Carte 2 */}
        <div className="bg-[#111a2e] p-8 rounded-xl border border-white/5 transition-all duration-300 group 
                        hover:border-cyan-500/50 hover:-translate-y-1 hover:-translate-x-1 
                        hover:shadow-[8px_8px_0px_0px_rgba(8,182,212,0.8)]">
          <div className="text-5xl mb-6 text-cyan-500/80 group-hover:text-cyan-400 transition-colors">
            <i className="fa-solid fa-globe"></i>
          </div>
          <h3 className="text-white font-bold text-2xl mb-4">Infrastructures & Réseaux</h3>
          <p className="text-slate-400 text-md leading-relaxed">
            Administration avancée <span className="text-white">Active Directory</span>, gestion des services Core (DNS, DHCP) et segmentation <span className="text-white">VLAN</span>. Supervision proactive (Nagios/Centreon).
          </p>
        </div>

        {/* Carte 3 */}
        <div className="bg-[#111a2e] p-8 rounded-xl border border-white/5 transition-all duration-300 group 
                        hover:border-cyan-500/50 hover:-translate-y-1 hover:-translate-x-1 
                        hover:shadow-[8px_8px_0px_0px_rgba(6,182,212,0.8)]">
          <div className="text-5xl mb-6 text-slate-400 group-hover:text-cyan-400 transition-colors">
            <i className="fa-solid fa-gear"></i>
          </div>
          <h3 className="text-white font-bold text-2xl mb-4">Systèmes & Automatisation</h3>
          <p className="text-slate-400 text-md leading-relaxed">
            Maîtrise <span className="text-white">Linux/Windows Server</span> et virtualisation. Développement d'outils en <span className="text-white">Python</span> et programmation système bas-niveau en <span className="text-white">Langage C</span>.
          </p>
        </div>
      </section>

      <footer className="p-8 border-t border-white/5 text-center text-xs text-slate-400 tracking-widest">
        © {new Date().getFullYear()} TH. DIALLO — Futur Ingénieur Cybersécurité. 
      </footer>
    </div>
    
  );
}