import { motion } from "framer-motion";
import { Download, ArrowRight, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import { PROFILE } from "../data";
import profile from "../assets/profile.png";

const fade = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background: moving grid + glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.18] animate-gridpan"
          style={{
            backgroundImage:
              "linear-gradient(#274069 1px, transparent 1px), linear-gradient(90deg, #274069 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-0 -left-32 w-[420px] h-[420px] rounded-full bg-accent2/10 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base" />
      </div>

      <div className="container-x grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        {/* Left: copy */}
        <div>
          <motion.p variants={fade} initial="hidden" animate="show" custom={0}
            className="eyebrow mb-5 flex items-center gap-2">
            <span className="inline-block w-8 h-px bg-accent" /> {PROFILE.role}
          </motion.p>

          <motion.h1 variants={fade} initial="hidden" animate="show" custom={1}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
            Hi, I'm <span className="grad-text">Donalsien A.</span>
          </motion.h1>

          <motion.p variants={fade} initial="hidden" animate="show" custom={2}
            className="mt-5 text-lg sm:text-xl text-muted max-w-xl leading-relaxed">
            {PROFILE.pitch}
          </motion.p>

          {/* Console-style identity line — the site's signature detail */}
          <motion.p variants={fade} initial="hidden" animate="show" custom={2.5}
            className="mt-5 font-mono text-[12px] text-faint flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-accent">&gt;</span>
            <span>status:</span><span className="text-emerald-400">operational</span>
            <span className="text-edge">|</span>
            <span>role:</span><span className="text-muted">network_defense</span>
            <span className="text-edge">|</span>
            <span>loc:</span><span className="text-muted">buea_cm</span>
          </motion.p>

          <motion.div variants={fade} initial="hidden" animate="show" custom={3}
            className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn-primary">
              View my work <ArrowRight size={16} />
            </a>
            <a href={PROFILE.resume} download className="btn-ghost">
              <Download size={16} /> Download résumé
            </a>
          </motion.div>

          <motion.div variants={fade} initial="hidden" animate="show" custom={4}
            className="mt-8 flex items-center gap-5 text-faint">
            <span className="flex items-center gap-1.5 text-[13px]">
              <MapPin size={14} /> {PROFILE.location}
            </span>
            <a href={PROFILE.github} target="_blank" rel="noreferrer"
              className="hover:text-accent transition-colors"><GitHubIcon size={18} /></a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"
              className="hover:text-accent transition-colors"><LinkedInIcon size={18} /></a>
          </motion.div>
        </div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto lg:mx-0 w-full max-w-sm"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-accent2/10 rounded-[2rem] blur-2xl" />
          {/* Scanner-reticle framed portrait (security/target motif) */}
          <div className="reticle relative animate-floaty">
            <span className="r-bl" /><span className="r-br" />
            <div className="relative card overflow-hidden">
              <img src={profile} alt={PROFILE.name} className="w-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl" />
              {/* monospace ID tag on the image */}
              <div className="absolute top-3 left-3 font-mono text-[10px] text-accent bg-base/70 backdrop-blur border border-accent/30 rounded px-2 py-0.5">
                ID://KDA-2026
              </div>
            </div>
          </div>
          {/* Floating status chip */}
          <div className="absolute -bottom-4 -left-4 card px-4 py-3 flex items-center gap-2 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[12px] font-bold text-ink">Open to opportunities</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
