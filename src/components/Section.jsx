import { motion } from "framer-motion";

// Reusable animated section wrapper. The `index` prop renders a distinctive
// console-style marker (e.g. 01 // SELECTED WORK) that gives the whole site a
// signature "security console" editorial identity.
export default function Section({ id, index, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`py-24 scroll-mt-20 ${className}`}>
      <div className="container-x">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            {(eyebrow || index) && (
              <div className="flex items-center gap-3 mb-3">
                {index && (
                  <span className="idx-tag text-[12px] font-bold text-accent">{index}</span>
                )}
                <span className="h-px w-8 bg-accent/50" />
                {eyebrow && (
                  <span className="idx-tag text-[11px] font-bold uppercase tracking-[0.3em] text-faint">
                    {eyebrow}
                  </span>
                )}
              </div>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">{title}</h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
