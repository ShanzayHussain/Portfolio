
import { motion } from "framer-motion";
import avatarNormal from "../assets/avatar-normal.png";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-28 scroll-mt-24">
      <SectionHeading title="About me" />
      <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 md:gap-5 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-8 text-white/70 text-lg md:text-s leading-relaxed"
        > 
          <p>
            I'm <span className="text-white font-medium">Shanzay Hussain</span>,
            a Software Engineering undergraduate at NED University of
            Engineering &amp; Technology, Karachi, with hands-on experience
            building full-stack web applications and integrating AI
            capabilities into modern software systems.
          </p>
          <p>
            I develop end-to-end applications using React, TypeScript,
            Node.js, Express and Python across cloud platforms, and I've
            built products powered by LLMs, AI-driven features,
            retrieval-based systems and machine learning models.
          </p>
          <p>
            I'm passionate about AI-integrated full-stack development,
            intelligent web applications, and shipping practical software
            from concept to deployment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto md:mx-0 w-full max-w-[280px] sm:max-w-[320px] aspect-square"
        >
          <div
            className="absolute inset-0 rounded-full blur-2xl opacity-60"
            style={{ background: "radial-gradient(circle, rgba(79,217,219,0.5) 0%, transparent 70%)" }}
          />
          <img
            src={avatarNormal}
            alt="Shanzay Hussain"
            className="relative h-full w-full rounded-full object-cover object-top ring-2 ring-cyan/40 shadow-[0_0_40px_rgba(79,217,219,0.35)]"
          />
        </motion.div>
      </div>
    </section>
  );
}