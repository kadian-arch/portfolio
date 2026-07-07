import { motion } from "framer-motion";
import { ExternalLink, Download, Check } from "lucide-react";
import { GitHubIcon } from "./BrandIcons";
import Section from "./Section";
import { BASTION, PROJECTS } from "../data";

import demoVid from "../assets/screenshots/demo.mp4";
import opsCenter from "../assets/screenshots/ops_center.png";
import liveCapture from "../assets/screenshots/live_capture.png";
import threatIntel from "../assets/screenshots/threat_intel.png";
import networkTopology from "../assets/screenshots/network_topology.png";
import commandControl from "../assets/screenshots/command_control_center.png";
import dataIngest from "../assets/screenshots/data_ingest_portal.png";
import sysConfig from "../assets/screenshots/sys_config.png";
import systemHealth from "../assets/screenshots/system_health.png";

const SHOTS = [
  { src: opsCenter,       label: "Operations Center" },
  { src: liveCapture,     label: "Live Packet Capture" },
  { src: threatIntel,     label: "Threat Intelligence" },
  { src: networkTopology, label: "Network Topology" },
  { src: commandControl,  label: "Command & Control" },
  { src: dataIngest,      label: "Data Ingest" },
  { src: systemHealth,    label: "System Health" },
  { src: sysConfig,       label: "Configuration" },
];

export default function Work() {
  return (
    <Section id="work" index="02" eyebrow="Selected work" title="What I've built">
      {/* Bastion — hero project */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="card overflow-hidden"
      >
        <div className="grid lg:grid-cols-2">
          {/* Left: details */}
          <div className="p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-black uppercase tracking-widest text-accent">
                Flagship project
              </span>
              <span className="text-[11px] text-faint font-mono">{BASTION.year}</span>
            </div>

            <h3 className="text-3xl font-black tracking-tight">{BASTION.title}</h3>
            <p className="mt-1 text-muted font-semibold">{BASTION.tagline}</p>

            <p className="mt-5 text-[15px] leading-relaxed text-muted">{BASTION.summary}</p>

            <ul className="mt-6 space-y-2.5">
              {BASTION.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-[14px] text-ink">
                  <Check size={16} className="text-accent shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {BASTION.stack.map((t) => (
                <span key={t}
                  className="text-[11px] font-semibold text-muted bg-base/60 border border-edge rounded-lg px-2.5 py-1">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href={BASTION.download} target="_blank" rel="noreferrer" className="btn-primary">
                <Download size={16} /> Download
              </a>
              <a href={BASTION.repo} target="_blank" rel="noreferrer" className="btn-ghost">
                <GitHubIcon size={16} /> Source code
              </a>
            </div>
          </div>

          {/* Right: live demo video (contained so it stays crisp) */}
          <div className="relative bg-base/40 p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-edge flex items-center">
            <div className="relative w-full rounded-xl overflow-hidden border border-edge shadow-2xl">
              <video
                src={demoVid}
                autoPlay loop muted playsInline
                className="w-full block"
              />
              <span className="absolute top-3 left-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest
                text-accent bg-base/80 backdrop-blur border border-accent/30 rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Live demo
              </span>
            </div>
          </div>
        </div>

        {/* Full dashboard gallery — all eight pages */}
        <div className="border-t border-edge bg-base/40 p-6 lg:p-8">
          <p className="idx-tag text-[11px] font-bold uppercase tracking-[0.3em] text-faint mb-4">
            Inside the dashboard
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {SHOTS.map((s, i) => (
              <motion.figure
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                className="group overflow-hidden rounded-xl border border-edge"
              >
                <img src={s.src} alt={s.label} loading="lazy"
                  className="w-full h-full object-cover aspect-video group-hover:scale-105 transition-transform duration-500" />
                <figcaption className="text-[10px] font-bold text-faint px-2 py-1.5 bg-panel">
                  {s.label}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Secondary projects */}
      <div className="grid md:grid-cols-3 gap-5 mt-6">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card p-6 hover:border-accent/40 transition-colors flex flex-col"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-black text-ink">{p.title}</h4>
              <span className="text-[11px] text-faint font-mono">{p.year}</span>
            </div>
            <p className="text-[13px] text-muted leading-relaxed flex-1">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t}
                  className="text-[10px] font-semibold text-faint bg-base/60 border border-edge rounded-md px-2 py-0.5">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
