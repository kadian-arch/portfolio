import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Download, Check, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
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
  { src: commandControl,  label: "Command and Control" },
  { src: dataIngest,      label: "Data Ingest" },
  { src: systemHealth,    label: "System Health" },
  { src: sysConfig,       label: "Configuration" },
];

export default function Work() {
  const [box, setBox] = useState(null); // null | { type: "image", i } | { type: "video" }

  useEffect(() => {
    if (!box) return;
    const onKey = (e) => {
      if (e.key === "Escape") setBox(null);
      if (box.type === "image" && e.key === "ArrowRight")
        setBox((b) => ({ type: "image", i: (b.i + 1) % SHOTS.length }));
      if (box.type === "image" && e.key === "ArrowLeft")
        setBox((b) => ({ type: "image", i: (b.i - 1 + SHOTS.length) % SHOTS.length }));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [box]);

  return (
    <Section id="work" index="02" eyebrow="Selected work" title="What I've built">
      {/* Bastion, hero project */}
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

          {/* Right: live demo video (click to enlarge) */}
          <div className="relative bg-base/40 p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-edge flex items-center">
            <button
              type="button"
              onClick={() => setBox({ type: "video" })}
              aria-label="Enlarge demo video"
              className="group relative w-full rounded-xl overflow-hidden border border-edge shadow-2xl cursor-zoom-in text-left"
            >
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
              <span className="absolute bottom-3 right-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest
                text-ink bg-base/80 backdrop-blur border border-edge rounded-full px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={11} /> Expand
              </span>
            </button>
          </div>
        </div>

        {/* Full dashboard gallery, all eight pages */}
        <div className="border-t border-edge bg-base/40 p-6 lg:p-8">
          <p className="idx-tag text-[11px] font-bold uppercase tracking-[0.3em] text-faint mb-4">
            Inside the dashboard
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {SHOTS.map((s, i) => (
              <motion.button
                key={s.label}
                type="button"
                onClick={() => setBox({ type: "image", i })}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                className="group overflow-hidden rounded-xl border border-edge cursor-zoom-in text-left hover:border-accent/40 transition-colors"
              >
                <div className="relative overflow-hidden">
                  <img src={s.src} alt={s.label} loading="lazy"
                    className="w-full h-full object-cover aspect-video group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-2 right-2 text-ink bg-base/80 backdrop-blur border border-edge rounded-md p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={12} />
                  </span>
                </div>
                <figcaption className="text-[10px] font-bold text-faint px-2 py-1.5 bg-panel">
                  {s.label}
                </figcaption>
              </motion.button>
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
            {p.repo && (
              <a href={p.repo} target="_blank" rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-accent hover:underline">
                <GitHubIcon size={13} /> Source code
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {box && (
        <div
          onClick={() => setBox(null)}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-base/92 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={() => setBox(null)}
            aria-label="Close"
            className="absolute top-4 right-4 text-ink bg-base/70 border border-edge rounded-full p-2 hover:border-accent/50 transition-colors"
          >
            <X size={18} />
          </button>

          {box.type === "image" ? (
            <>
              <button
                type="button"
                aria-label="Previous"
                onClick={(e) => { e.stopPropagation(); setBox((b) => ({ type: "image", i: (b.i - 1 + SHOTS.length) % SHOTS.length })); }}
                className="absolute left-3 sm:left-6 text-ink bg-base/70 border border-edge rounded-full p-2 hover:border-accent/50 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>

              <figure onClick={(e) => e.stopPropagation()} className="max-w-[92vw]">
                <img
                  src={SHOTS[box.i].src}
                  alt={SHOTS[box.i].label}
                  className="max-h-[82vh] max-w-[92vw] w-auto rounded-xl border border-edge shadow-2xl"
                />
                <figcaption className="text-center text-[12px] font-bold text-muted mt-3">
                  {SHOTS[box.i].label}
                </figcaption>
              </figure>

              <button
                type="button"
                aria-label="Next"
                onClick={(e) => { e.stopPropagation(); setBox((b) => ({ type: "image", i: (b.i + 1) % SHOTS.length })); }}
                className="absolute right-3 sm:right-6 text-ink bg-base/70 border border-edge rounded-full p-2 hover:border-accent/50 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </>
          ) : (
            <video
              src={demoVid}
              autoPlay loop muted controls playsInline
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[92vw] w-auto rounded-xl border border-edge shadow-2xl"
            />
          )}
        </div>
      )}
    </Section>
  );
}
