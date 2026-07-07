import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import { POSTS } from "../data";

export default function Writing() {
  return (
    <Section id="writing" index="04" eyebrow="Writing" title="Notes & articles">
      <div className="grid md:grid-cols-2 gap-5">
        {POSTS.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card p-6 group hover:border-accent/40 transition-colors block"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 rounded px-2 py-0.5">
                {p.tag}
              </span>
              <span className="text-[11px] text-faint font-mono">{p.date}</span>
              <ArrowUpRight size={16} className="ml-auto text-faint group-hover:text-accent transition-colors" />
            </div>
            <h4 className="font-black text-ink text-lg leading-snug group-hover:text-accent transition-colors">
              {p.title}
            </h4>
            <p className="mt-2 text-[14px] text-muted leading-relaxed">{p.blurb}</p>
          </motion.a>
        ))}

        {/* Placeholder card inviting more writing */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="card p-6 border-dashed flex items-center justify-center text-center"
        >
          <p className="text-[13px] text-faint leading-relaxed">
            More articles on network security, detection engineering,<br />
            and building Bastion are on the way.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
