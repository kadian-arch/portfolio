import { motion } from "framer-motion";
import Section from "./Section";
import { PROFILE, FACTS } from "../data";

export default function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="Who I am">
      <div className="grid lg:grid-cols-[1.35fr_1fr] gap-12 items-start">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          {PROFILE.bio.map((p, i) => (
            <p key={i} className="text-[17px] leading-relaxed text-muted">{p}</p>
          ))}
        </motion.div>

        {/* Quick facts */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card p-6 lg:sticky lg:top-24"
        >
          <p className="eyebrow mb-5">Quick facts</p>
          <dl className="space-y-4">
            {FACTS.map((f) => (
              <div key={f.k} className="border-b border-edge/60 last:border-0 pb-4 last:pb-0">
                <dt className="text-[11px] font-black uppercase tracking-widest text-accent mb-1">
                  {f.k}
                </dt>
                <dd className="text-[14px] text-ink leading-snug">{f.v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </Section>
  );
}
