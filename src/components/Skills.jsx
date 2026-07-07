import { motion } from "framer-motion";
import { ShieldCheck, Network, Code2, BrainCircuit, Cloud } from "lucide-react";
import Section from "./Section";
import { SKILLS } from "../data";

const ICONS = {
  "Security": ShieldCheck,
  "Networking": Network,
  "Cloud & AWS": Cloud,
  "Programming": Code2,
  "AI / ML & Frameworks": BrainCircuit,
};

export default function Skills() {
  return (
    <Section id="skills" index="03" eyebrow="Toolbox" title="Skills & technologies">
      <div className="grid sm:grid-cols-2 gap-5">
        {SKILLS.map((s, i) => {
          const Icon = ICONS[s.group] ?? ShieldCheck;
          return (
            <motion.div
              key={s.group}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card p-6 hover:border-accent/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Icon size={17} className="text-accent" />
                </div>
                <h4 className="font-black text-ink">{s.group}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span key={it}
                    className="text-[12px] font-semibold text-muted bg-base/60 border border-edge rounded-lg px-3 py-1.5
                      hover:border-accent/40 hover:text-ink transition-colors">
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
