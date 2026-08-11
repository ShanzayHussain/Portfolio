import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
      <SectionHeading title="Education" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-border bg-panel/60 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
      >
        <div>
          <h3 className="font-display font-semibold text-xl text-white">
            B.E. Software Engineering
          </h3>
          <p className="text-white/50 mt-1">
            NED University of Engineering &amp; Technology, Karachi
          </p>
        </div>
        <span className="text-cyan/80 font-mono text-sm whitespace-nowrap">
          2024 – 2028 (Expected)
        </span>
      </motion.div>
    </section>
  );
}
