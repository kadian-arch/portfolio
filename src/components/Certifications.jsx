import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";
import Section from "./Section";
import { CERTIFICATIONS } from "../data";

export default function Certifications() {
  return (
    <Section id="certifications" index="04" eyebrow="Certifications" title="Certifications & badges">
      <div className="grid sm:grid-cols-2 gap-5">
        {CERTIFICATIONS.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card p-6 hover:border-accent/40 transition-colors flex items-start gap-4"
          >
            <div className="w-9 h-9 shrink-0 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
              <BadgeCheck size={17} className="text-accent" />
            </div>
            <div className="min-w-0">
              <h4 className="font-black text-ink leading-snug">{c.name}</h4>
              {(c.issuer || c.date) && (
                <p className="text-[13px] text-muted mt-1">
                  {c.issuer}
                  {c.issuer && c.date ? " · " : ""}
                  {c.date}
                </p>
              )}
              {c.valid && (
                <p className="text-[12px] text-faint mt-0.5">{c.valid}</p>
              )}
              {c.credentialUrl && (
                <a
                  href={c.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[12px] font-semibold text-accent mt-2 hover:underline"
                >
                  View credential <ExternalLink size={12} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
