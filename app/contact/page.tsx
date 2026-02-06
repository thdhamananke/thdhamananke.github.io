"use client";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a1120] p-6 lg:p-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* COLONNE GAUCHE : INFOS */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Me contacter
            </h1>
            <div className="inline-block bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full mb-6">
              <span className="flex items-center gap-2 font-bold text-cyan-400 text-md font-bold tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Disponible pour une alternance de (36 mois)
              </span>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Discutons de vos besoins en infrastructure IT et cybersécurité.
            </p>
          </div>

          <div className="space-y-4">
            {/* Localisation */}
            <div className="flex items-center gap-6 p-6 bg-[#0d1629] rounded-xl border border-white/5 transition-all duration-300 group 
                            hover:border-cyan-500/50 hover:-translate-y-1 hover:-translate-x-1 
                            hover:shadow-[8px_8px_0px_0px_rgba(6,182,212,0.9)]">
            <div className="w-12 h-12 bg-[#111a2e] flex items-center justify-center rounded-lg text-2xl group-hover:scale-110 transition-transform">
                📍
            </div>
            <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Localisation</p>
                <p className="text-white font-bold">Caen Normandie, France</p>
            </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-6 p-6 bg-[#0d1629] rounded-xl border border-white/5 transition-all duration-300 group 
                            hover:border-cyan-500/50 hover:-translate-y-1 hover:-translate-x-1 
                            hover:shadow-[8px_8px_0px_0px_rgba(6,182,212,0.9)]">
            <div className="w-12 h-12 bg-[#111a2e] flex items-center justify-center rounded-lg text-2xl group-hover:scale-110 transition-transform">
                📧
            </div>
            <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Email Professionnel</p>
                <p className="text-white font-bold">dialloth9188@gmail.com</p>
            </div>
            </div>

            {/* Téléphone */}
            <div className="flex items-center gap-6 p-6 bg-[#0d1629] rounded-xl border border-white/5 transition-all duration-300 group 
                            hover:border-cyan-500/50 hover:-translate-y-1 hover:-translate-x-1 
                            hover:shadow-[8px_8px_0px_0px_rgba(6,182,212,0.9)]">
            <div className="w-12 h-12 bg-[#111a2e] flex items-center justify-center rounded-lg text-2xl group-hover:scale-110 transition-transform">
                📱
            </div>
            <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Téléphone</p>
                <p className="text-white font-bold">+33759840700</p>
            </div>
            </div>
          </div>
        </div>

        {/* COLONNE DROITE : FORMULAIRE */}
        <div className="bg-[#0d1629] p-8 lg:p-10 rounded-2xl border border-white/5 transition-all duration-300 
                            hover:border-cyan-500/30 hover:-translate-y-1 hover:-translate-x-1 
                            hover:shadow-[12px_12px_0px_0px_rgba(6,182,212,0.9)]">
            <form className="space-y-6">
                <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Nom complet</label>
                <input 
                    type="text" 
                    placeholder="Votre nom"
                    className="w-full bg-[#0a1120] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                />
                </div>

                <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Email</label>
                <input 
                    type="email" 
                    placeholder="votre@email.com"
                    className="w-full bg-[#0a1120] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                />
                </div>

                <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Message</label>
                <textarea 
                    rows={5}
                    placeholder="Bonjour, je souhaiterais vous rencontrer pour..."
                    className="w-full bg-[#0a1120] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all resize-none"
                ></textarea>
                </div>

                <button className="w-full lg:w-auto bg-cyan-500 text-[#0a1120] font-bold px-8 py-4 rounded-lg 
                                transition-all duration-300 hover:bg-cyan-400 
                                hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] active:scale-95">
                                Envoyer le message
                </button>
            </form>
        </div>
      </div>
    </div>
  );
}