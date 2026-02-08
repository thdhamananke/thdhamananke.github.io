"use client";

export default function ParcoursPage() {
  return (
    <div className="min-h-screen bg-[#0a1120] p-6 lg:p-16 space-y-20">
        <section className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
            <div className="h-10 w-1 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
            <h2 className="text-6xl font-extrabold text-white">À propos de moi</h2>
            </div>
            
            {/* Bordure à gauche sur le texte principal comme sur l'image */}
            <div className="relative pl-8 border-l-4 border-cyan-500/50 group">
                <p className="text-slate-400 text-lg leading-relaxed">
                    Passionné d'informatique en général, et plus particulièrement par les réseaux et la 
                    <span className="text-white font-medium"> cybersécurité</span>, je suis un profil polyvalent, impliqué et autonome. 
                    Mon aisance technique me permet d'évoluer efficacement dans plusieurs domaines en <span className="text-white">développement d'application web et mobile</span> 
                    , <span className="text-white">base de donnée</span> et <span className="text-white">infrastructures réseaux </span> ainsi qu'en <span className="text-white">sécurité informatique</span>
                    , aussi bien dans les opérations de 
                    <span className="text-cyan-400"> Blue Team</span> (défense et détection) que de 
                    <span className="text-orange-500"> Red Team</span> (tests d'intrusion). 
                    Mes expériences professionnelles, mes formations et mon entraînement constant sur des plateformes 
                    comme TryHackMe et HackTheBox m'ont permis de forger une solide culture de la menace et de maîtriser 
                    les outils d'audit, de monitoring et d'administration réseau & système. Je suis aujourd'hui prêt à 
                    mettre cette expertise au service de la sécurisation des infrastructures critiques au sein d'une équipe dynamique.
                </p>
            </div>
        </section>

        {/* Expertise technique */}
        <section id="competences">
            <div className="flex items-center gap-4 mb-10">
                <div className="h-8 w-1 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                <h2 className="text-3xl font-bold text-white uppercase tracking-wider">Expertise Technique</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-[#0d1629] p-8 rounded-2xl border border-white/5 border-l-2 border-l-cyan-500 hover:border-cyan-500/30 transition-all">
                    <h3 className="text-cyan-400 font-extrabold text-sm uppercase tracking-[0.2em] mb-6">
                        Cybersécurité & Réseaux
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {["Audit & Scan : Nmap, Nessus, Wireshark", "Exploitation: Metasploit", "Snort", "Pentesting", "Audit de Vulnérabilités", "Réponse Active", "Supervision (SNMP)", "Active Directory (AD DS)", "Services Core (DNS/DHCP)"].map((skill) => (
                        <span key={skill} 
                            className="px-3 py-1.5 bg-[#111a2e] border border-white/10 rounded-sm text-xs text-slate-300 font-medium cursor-default transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:-translate-y-1">
                            {skill}
                        </span>
                        ))}
                    </div>
                </div>

                <div className="bg-[#0d1629] p-8 rounded-2xl border border-white/5 border-l-4 border-l-cyan-500 hover:border-cyan-500/30 transition-all">
                    <h3 className="text-cyan-400 font-extrabold text-sm uppercase tracking-[0.2em] mb-6">Réseaux & Virtualisation</h3>
                    <div className="flex flex-wrap gap-2">
                    {[ "Linux (Debian/Ubuntu", "Routage", "Windows Server 2019 et 2022", "Wireshark", "VMware & VirtualBox",
                        "Gestion des Processus UNIX", "VLAN & Segmentation", "VPN", "VMPS", "Portforwording"].map((skill) => (
                        <span key={skill} 
                            className="px-3 py-1.5 bg-[#111a2e] border border-white/10 rounded-sm text-xs text-slate-300 font-medium cursor-default transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:-translate-y-1">
                            {skill}
                        </span>
                    ))}
                    </div>
                </div>

                <div className="bg-[#0d1629] p-8 rounded-2xl border border-white/5 border-l-4 border-l-cyan-500 hover:border-cyan-500/30 transition-all">
                    <h3 className="text-cyan-400 font-extrabold text-sm uppercase tracking-[0.2em] mb-6">  Développement & Scripting</h3>
                    <div className="flex flex-wrap gap-2">
                    {["Python (Algorithmes/IA)", "Langage C (Programmation Système)", "C++", "Java", "PHP", "SQL", "MySQL", "TypeScript", "JavaScript", "PostgreSQL", "Bash/Shell Scripting", "Git/GitHub", "CI/CD"].map((skill) => (
                        <span key={skill} 
                            className="px-3 py-1.5 bg-[#111a2e] border border-white/10 rounded-sm text-xs text-slate-300 font-medium cursor-default transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:-translate-y-1">
                            {skill}
                        </span>
                    ))}
                    </div>
                </div>
            </div>
        </section>

      {/* formations */}
        <section>
        <div className="flex items-center gap-4 mb-12">
            <div className="h-8 w-1 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
            <h2 className="text-3xl font-bold text-white uppercase tracking-wider">Formation</h2>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-1 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {[
                {
                    date: "2024 - 2026",
                    titre: "Licence Informatique",
                    lieu: "Université Caen Normandie (Caen, France)",
                },
                {
                    date: "2021 - 2024",
                    titre: "Licence Génie Informatique",
                    lieu: "Institut Supérieur de Technologie de Mamou (Mamou, Guinée)",
                },
                {
                    date: "2018 - 2020",
                    titre: "Baccalauréat Scientifique ",
                    lieu: "Lycée Gamal Abdel Nasser de Faranah (Faranah, Guinée)",
                }
            ].map((f, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-3 h-3 rounded-full border border-cyan-500 bg-[#0a1120] shadow-[0_0_8px_rgba(6,182,212,1)] absolute left-0 md:left-1/2 -translate-x-1/2 z-10 transition-transform group-hover:scale-125"></div>
                
                <div className="w-[calc(100%-2rem)] md:w-[45%] bg-[#0d1629] p-6 rounded-2xl border border-white/5 border-l-3 border-l-cyan-500 hover:border-cyan-500/20 transition-all duration-300">
                    <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold rounded-full mb-3 uppercase tracking-widest">
                        {f.date}
                    </span>
                    <h4 className="text-white font-bold text-lg mb-1 group-hover:text-cyan-400 transition-colors">
                        {f.titre}
                    </h4>
                    <p className="text-slate-500 text-md italic">
                        {f.lieu}
                    </p>
                </div>
            </div>
            ))}

        </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-20">
            <div>
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-8 w-1 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                    <h2 className="text-3xl font-bold text-white uppercase tracking-wider">Certifications</h2>
                </div>

                <div className="space-y-4">
                    {[
                    { title: "Certification Microsoft Azure AZ-900", org: "Microsoft", year: "En cours" },
                    { title: "Sécurité Microsoft SC-900", org: "Microsoft", year: "En cours" },
                    ].map((cert, index) => (
                    <div key={index} className="flex justify-between items-center p-5 bg-[#0d1629] border border-white/5 border-l-3 border-l-cyan-500 rounded-xl hover:border-cyan-500/30 transition-all group">
                        <div className="flex flex-col">
                        <span className="text-white font-bold text-sm group-hover:text-cyan-400 transition-colors">{cert.title} — <span className="text-slate-500 font-normal italic">{cert.org}</span></span>
                        </div>
                        <span className="text-cyan-500 font-mono font-bold text-sm">{cert.year}</span>
                    </div>
                    ))}
                </div>
            </div>

            {/* passions */}
            <div>
            <div className="flex items-center gap-4 mb-8">
                <div className="h-8 w-1 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                <h2 className="text-3xl font-bold text-white uppercase tracking-wider">Passions</h2>
            </div>

            <div className="space-y-4">
                {[
                { title: "Veille & Threat Intelligence", desc: "Passionné par l'actualité de la cybersécurité, le suivi des nouvelles vulnérabilités (CVE) et l'évolution des menaces mondiales." },
                { title: "Vie associative", desc: "Un pilier fondamental favorisant l'échange et l'esprit collectif, essentiels pour maintenir un bon équilibre personnel et professionnel." },
                { title: "Vie Sociale & Échanges", desc: "J'attache une grande importance aux sorties entre amis, favorisant ainsi le partage d'idées et le maintien d'un bon équilibre personnel." }
                ].map((passion, index) => (
                <div key={index} className="p-6 bg-[#0d1629] border border-white/5 border-l-3 border-l-cyan-500 rounded-xl">
                    <h4 className="text-cyan-400 font-bold text-sm mb-2">{passion.title} : <span className="text-slate-400 font-normal text-xs">{passion.desc}</span></h4>
                </div>
                ))}
            </div>
            </div>
        </section>
    </div>
  );
}