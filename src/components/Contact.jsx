import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import Section from "./Section";
import { PROFILE } from "../data";

const CHANNELS = [
  { icon: Mail,  label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: Phone, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phoneHref}` },
  { icon: MapPin, label: "Location", value: PROFILE.location, href: null },
];

export default function Contact() {
  return (
    <Section id="contact" index="05" eyebrow="Contact" title="Let's talk">
      <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
        {/* Left: message */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[17px] leading-relaxed text-muted">
            I'm open to roles, collaborations, and security projects. Whether you want to talk
            about network defense, intrusion detection, or deploying Bastion IDS in your
            environment, my inbox is open.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${PROFILE.email}`} className="btn-primary">
              <Mail size={16} /> Send me an email
            </a>
            <a href={PROFILE.resume} download className="btn-ghost">
              <Download size={16} /> Download résumé
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a href={PROFILE.github} target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-lg card flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-colors">
              <GitHubIcon size={18} />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-lg card flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-colors">
              <LinkedInIcon size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right: channel cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3"
        >
          {CHANNELS.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <>
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-black uppercase tracking-widest text-faint">{label}</p>
                  <p className="text-ink font-semibold truncate">{value}</p>
                </div>
              </>
            );
            return href ? (
              <a key={label} href={href}
                className="card p-4 flex items-center gap-4 hover:border-accent/40 transition-colors">
                {inner}
              </a>
            ) : (
              <div key={label} className="card p-4 flex items-center gap-4">
                {inner}
              </div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
