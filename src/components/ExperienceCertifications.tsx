// import { motion } from "framer-motion";

// export default function ExperienceCertifications() {
//   return (
//     <section id="experience" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24 space-y-16">
//       <div>
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.6 }}
//           className="font-display font-bold text-3xl text-gradient mb-6"
//         >
//           Experience
//         </motion.h2>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="rounded-2xl border border-border bg-panel/60 p-6 sm:p-8"
//         >
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
//             <h3 className="font-display font-semibold text-lg text-white">
//               Backend Intern (Remote) — ITVE Pvt Ltd
//             </h3>
//             <span className="text-cyan/80 font-mono text-sm">2 months</span>
//           </div>
//           <p className="text-xs text-white/40 mt-1">FastAPI · MongoDB · JWT · Cloudinary</p>
//           <p className="text-white/60 text-sm mt-3 leading-relaxed">
//             Contributed to the backend of a FastAPI-based REST API with JWT
//             authentication, MongoDB (via Motor) for data persistence, and
//             Cloudinary for image upload handling.
//           </p>
//         </motion.div>
//       </div>

//       <div>
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.6 }}
//           className="font-display font-bold text-3xl text-gradient mb-6"
//         >
//           Certifications
//         </motion.h2>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="rounded-2xl border border-border bg-panel/60 p-6 sm:p-8"
//         >
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
//             <h3 className="font-display font-semibold text-lg text-white">
//               Google AI Professional Certificate — Coursera
//             </h3>
//             <span className="text-cyan/80 font-mono text-sm">2026</span>
//           </div>
//           <p className="text-white/60 text-sm mt-3 leading-relaxed">
//             Covered foundations of AI/ML, prompt engineering, and responsible
//             AI practices.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import { HiOutlineBriefcase, HiOutlineAcademicCap } from "react-icons/hi";
import SectionHeading from "./SectionHeading";

const items = [
  {
    type: "experience",
    icon: HiOutlineBriefcase,
    title: "Backend Intern (Remote)",
    org: "ITVE Pvt Ltd",
    meta: "FastAPI · MongoDB · JWT · Cloudinary",
    period: "2 months",
    description:
      "Contributed to the backend of a FastAPI-based REST API with JWT authentication, MongoDB (via Motor) for data persistence, and Cloudinary for image upload handling.",
  },
  {
    type: "certification",
    icon: HiOutlineAcademicCap,
    title: "Google AI Professional Certificate",
    org: "Coursera",
    meta: "AI/ML foundations · Prompt engineering · Responsible AI",
    period: "2026",
    description:
      "Covered foundations of AI/ML, prompt engineering, and responsible AI practices.",
  },
];

export default function ExperienceCertifications() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
      <SectionHeading title="Experience & Credentials" />

      <div className="relative pl-8 sm:pl-10 mt-10">
        {/* Connecting timeline line */}
        <div className="absolute left-[11px] sm:left-[13px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-8">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-8 sm:-left-10 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-cyan/40 bg-panel">
                  <Icon className="text-cyan" size={13} />
                </div>

                <div className="rounded-2xl border border-border bg-panel/60 p-6 sm:p-8 transition-colors hover:border-cyan/30">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="font-display font-semibold text-lg text-white">
                      {item.title}{" "}
                      <span className="text-white/50 font-normal">— {item.org}</span>
                    </h3>
                    <span className="text-cyan/80 font-mono text-sm shrink-0">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-xs text-white/40 mt-1">{item.meta}</p>
                  <p className="text-white/60 text-sm mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: items.length * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-8 sm:-left-10 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-cyan/20 bg-panel">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan/60 animate-pulse" />
            </div>
            <div className="rounded-2xl border border-dashed border-border/60 p-6 sm:p-8">
              <p className="text-white/50 text-sm leading-relaxed">
                Currently open to internships and entry-level opportunities in
                full-stack and AI-integrated development.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}