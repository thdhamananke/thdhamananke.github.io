"use client";
import Image from "next/image";
import Link from "next/link";

const PROJETS = [
  {
    id: 1,
    titre: "Audit de Sécurité Réseau",
    description: "Analyse de vulnérabilités et tests d'intrusion sur une infrastructure hybride. Mise en place de correctifs et rapports de conformité.",
    image: "/projet1.jpg", // Remplace par tes vraies images dans /public
    tags: ["Kali Linux", "Wireshark", "Metasploit", "Nmap"],
    link: "#"
  },
  {
    id: 2,
    titre: "Automatisation de Supervision",
    description: "Déploiement d'une solution de monitoring avec Nagios et Centreon pour surveiller un parc de 50 serveurs Windows/Linux.",
    image: "/projet2.jpg",
    tags: ["Linux", "Nagios", "Bash", "SNMP"],
    link: "#"
  },
  {
    id: 3,
    titre: "Infrastructure Active Directory",
    description: "Conception et déploiement d'un domaine AD sécurisé avec GPO restrictives, serveurs DNS/DHCP redondants et VPN.",
    image: "/projet3.jpg",
    tags: ["Windows Server", "GPO", "PowerShell", "VPN"],
    link: "#"
  }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0a1120] p-6 lg:p-16">
      <div className="max-w-6xl mx-auto">
        
        {/* En-tête de la page */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Mes Réalisations
          </h1>
          <div className="h-1 w-20 bg-cyan-500 rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl">
            Découvrez mes projets académiques et professionnels en cybersécurité, administration systèmes et développement.
          </p>
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJETS.map((projet) => (
            <div 
              key={projet.id} 
              className="group bg-[#0d1629] rounded-2xl border border-white/5 overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:-translate-y-2 shadow-xl"
            >
              {/* Image du projet */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-cyan-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                {/* Fallback si tu n'as pas encore d'image : un fond coloré */}
                <div className="absolute inset-0 bg-[#162238] flex items-center justify-center text-cyan-500/20">
                   <i className="fa-solid fa-code text-5xl"></i>
                </div>
                {/* Image réelle (décommente quand tu as les fichiers) */}
                {/* <Image src={projet.image} alt={projet.titre} fill className="object-cover group-hover:scale-110 transition-transform duration-500" /> */}
              </div>

              {/* Contenu de la carte */}
              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {projet.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded-md border border-cyan-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {projet.titre}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {projet.description}
                </p>

                <div className="pt-4 flex items-center justify-between">
                  <Link href={projet.link} className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:text-cyan-400 transition-colors">
                    Détails du projet
                    <i className="fa-solid fa-arrow-right-long transition-transform group-hover:translate-x-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}