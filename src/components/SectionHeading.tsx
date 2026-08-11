import { motion } from "framer-motion";

export default function SectionHeading({
  // eyebrow,
  title,
}: {
  // eyebrow: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-10"
    >
      {/* <p className="text-xs font-mono tracking-[0.3em] text-cyan/70 mb-2">
        {eyebrow}
      </p> */}
      <h2 className="font-display font-bold text-4xl sm:text-5xl text-gradient">
        {title}
      </h2>
    </motion.div>
  );
}
