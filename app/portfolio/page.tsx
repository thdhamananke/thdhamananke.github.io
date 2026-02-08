"use client";
import Image from "next/image";
import Link from "next/link";

const EXPERIENCES = [
  {
    poste: "Developpeur - Chef de projet",
    entreprise: "Institut Supérieur de Technologie de Mamou | Guinée",
    periode: "06/2023 - 06/2024",
    missions: [
      "Pilotage du projet de création de l'ENT (Espace Numérique de Travail) : de l'analyse des besoins au déploiement.",
      "Développement d'un site web dynamique et d'une plateforme d'administration centralisée.",
      "Conception d'espaces personnels sécurisés pour le personnel (gestion des sessions, authentification et contrôle d'accès).",
      "Architecture et gestion de la base de données relationnelle pour la centralisation des informations académiques.",
      "Mise en place de mesures de sécurité applicative pour la protection des données sensibles."
    ]
  },
  {
    poste: "Support Informatique N1/N2",
    entreprise: "Institut Supérieur Agronomique et Vétérinaire de Faranah | Guinée",
    periode: "07/2023 - 09/2023",
    missions: [
      "Support aux utilisateurs et traitement des incidents sur parc Windows",
      "Déploiement et sécurisation de nouveaux postes (durcissement d'OS, antivirus)",
      "Formation des employés pour la prise en main d'un nouveau progiciel"
    ]
  }
];

const PROJETS = [
 {
    id: 1,
    titre: "Intelligence Artificielle & Simulation : Jeu de Tron",
    description: "Développement d'une simulation basée sur l'intelligence artificielle et la théorie des jeux. Analyse des stratégies de coalition et expérimentation d'algorithmes de décision en temps réel au sein d'un environnement multi-agents.",
    image: "/tron.png", 
    tags: ["Java", "Modélisation UML", "Patterns (Observer, Strategie)", "Multi-threading"],
    link: "https://github.com/thdhamananke/Tron-Game"
  },
  {
    id: 2,
    titre: "Intelligence Artificielle & Planification : Blocks World",
    description: "Conception d'un système intelligent pour résoudre le problème du Monde des Blocs. Implémentation de solveurs de contraintes (CSP), d'algorithmes de planification (STRIPS, Heuristiques) et d'extraction de connaissances (Fouille de données/Règles d'association).",
    image: "/blockworld.png",
    tags: ["Intelligence Artificielle ", "CSP" , "Planning", "Datamining", "Java", "Automatisation", "Shell/Bash", "Tests"],
    link: "https://github.com/thdhamananke/Blocksworld"
  },
  {
    id: 3,
    titre: "Simulateur d'Automate Cellulaire (2D/3D)",
    description: "Développement d'un simulateur basé sur les travaux de John Horton Conway. Implémentation de règles locales régissant l'évolution de cellules binaires dans un environnement multidimensionnel pour l'étude des comportements émergents et du chaos organisé.",
    image: "/gol.png",
    tags: ["Java", "Swing", "Java FX", "Shell", "Automatisation des Tests", "Modélisation UML", "Algorithmique", "Systèmes Dynamiques"],
    link: "https://github.com/thdhamananke/Game-of-Life/tree/main"
  },
  {
    id: 4,
    titre: "Audit de Sécurité Réseau",
    description: "Analyse de vulnérabilités et tests d'intrusion sur une infrastructure hybride. Mise en place de correctifs et rapports de conformité.",
    image: "/tro.png", 
    tags: ["Kali Linux", "Wireshark", "Metasploit", "Nmap"],
    link: "#"
  },
  {
    id: 5,
    titre: "Intelligence Artificielle & Planification : Blocks World",
    description: "Conception d'un système intelligent pour résoudre le problème du Monde des Blocs. Implémentation de solveurs de contraintes (CSP), d'algorithmes de planification (STRIPS, Heuristiques) et d'extraction de connaissances (Fouille de données/Règles d'association).",
    image: "/blockworld.png",
    tags: ["Intelligence Artificielle ", "CSP" , "Planning", "Datamining", "Java", "Automatisation", "Shell/Bash", "Tests"],
    link: "https://github.com/thdhamananke/Blocksworld"
  },
  {
    id: 6,
    titre: "Simulateur d'Automate Cellulaire (2D/3D)",
    description: "Développement d'un simulateur basé sur les travaux de John Horton Conway. Implémentation de règles locales régissant l'évolution de cellules binaires dans un environnement multidimensionnel pour l'étude des comportements émergents et du chaos organisé.",
    image: "/gol.png",
    tags: ["Java", "Swing", "Java FX", "Shell", "Automatisation des Tests", "Modélisation UML", "Algorithmique", "Systèmes Dynamiques"],
    link: "https://github.com/thdhamananke/Game-of-Life/tree/main"
  }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0a1120] p-6 lg:p-16 space-y-20">
      <div className="max-w-6xl mx-auto">
        
        {/* experiences */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-8 w-1 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
            <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
              Expériences Professionnelles
            </h2>
          </div>

          <div className="space-y-6">
            {EXPERIENCES.map((exp, index) => (
              <div  key={index} className="bg-[#0d1629] p-8 rounded-2xl border border-white/5 border-l-3 border-l-cyan-500 shadow-xl">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400">{exp.poste}</h3>
                    <p className="text-white font-medium">{exp.entreprise}</p>
                  </div>
                  <span className="text-slate-500 font-mono text-sm bg-white/5 px-3 py-1 rounded-full"> {exp.periode} </span>
                </div>
                <ul className="space-y-3">
                  {exp.missions.map((mission, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm">
                      <span className="text-cyan-500 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0"></span>
                      {mission}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* réalisations */}
        <section id="realisations">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-8 w-1 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
            <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
              Mes Réalisations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJETS.map((projet) => (
              <div 
                key={projet.id} 
                className="group bg-[#0d1629] rounded-2xl border border-white/5 border-l-3 border-l-cyan-500 overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:-translate-y-2 shadow-xl"
              >
                <div className="p-4 pb-0"> 
                  <div className="relative h-44 w-full overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-cyan-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <Image src={projet.image} alt={projet.titre} fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100" 
                    />
                  </div>
                </div>

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

                  <div className="pt-4">
                    <Link 
                      href={projet.link} 
                      className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-500/30 text-cyan-400 text-sm font-bold tracking-widest rounded-sm transition-all duration-300 hover:bg-cyan-500 hover:text-[#0a1120] hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                    >
                      <i className="fa-brands fa-github text-base"></i>
                      Voir sur GitHub
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

       
      </div>
    </div>
  );
}