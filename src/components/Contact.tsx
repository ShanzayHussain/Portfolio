// import { motion } from "framer-motion";
// import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
// import { FaLinkedin, FaGithub } from "react-icons/fa";
// import SectionHeading from "./SectionHeading";

// export default function Contact() {
//   return (
//     <section id="contact" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-24">
//       <SectionHeading title="Contact" />
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-60px" }}
//         transition={{ duration: 0.6 }}
//         className="rounded-2xl border border-border bg-panel/60 p-8 sm:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10"
//       >
//         <div className="flex flex-col gap-4">
//           <p className="text-white/70 leading-relaxed max-w-md">
//             Open to internships, freelance builds and AI-integrated product
//             work.
//           </p>
//           <div className="space-y-4 text-sm">
//             <a
//               href="https://mail.google.com/mail/?view=cm&fs=1&to=hussain.shanzay2005@gmail.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 text-white/70 hover:text-cyan transition-colors"
//             >
//               <HiOutlineMail className="text-cyan" size={18} />
//               hussain.shanzay2005@gmail.com
//             </a>
//             <a
//               href="tel:+923431887854"
//               className="flex items-center gap-3 text-white/70 hover:text-cyan transition-colors"
//             >
//               <HiOutlinePhone className="text-cyan" size={18} />
//               +92 343 1887854
//             </a>
//             <div className="flex items-center gap-3 text-white/70">
//               <HiOutlineLocationMarker className="text-cyan" size={18} />
//               Karachi, Pakistan
//             </div>
//           </div>
//         </div>

//         <div className="flex gap-3 md:flex-col md:items-end">
//           <a
//             href="https://www.linkedin.com/in/shanzay-hussain-437044325"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-white/70 hover:text-cyan hover:border-cyan/50 transition-colors"
//           >
//             <FaLinkedin /> LinkedIn
//           </a>
//           <a
//             href="https://github.com/ShanzayHussain"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-white/70 hover:text-cyan hover:border-cyan/50 transition-colors"
//           >
//             <FaGithub /> GitHub
//           </a>
//         </div>
//       </motion.div>

//       <p className="text-center text-white/30 text-xs mt-20">
//         © {new Date().getFullYear()} Shanzay Hussain.
//       </p>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const EMAIL = "hussain.shanzay2005@gmail.com";

export default function Contact() {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      e.preventDefault();
      window.location.href = `mailto:${EMAIL}`;
    }
    // Desktop: let the default href (Gmail web compose) handle it
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-24">
      <SectionHeading title="Contact" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-border bg-panel/60 p-8 sm:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10"
      >
        <div className="flex flex-col gap-4">
          <p className="text-white/70 leading-relaxed max-w-md">
            Open to internships, freelance builds and AI-integrated product
            work.
          </p>
          <div className="space-y-4 text-sm">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
              onClick={handleEmailClick}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/70 hover:text-cyan transition-colors"
            >
              <HiOutlineMail className="text-cyan" size={18} />
              {EMAIL}
            </a>
            <a
              href="tel:+923431887854"
              className="flex items-center gap-3 text-white/70 hover:text-cyan transition-colors"
            >
              <HiOutlinePhone className="text-cyan" size={18} />
              +92 343 1887854
            </a>
            <div className="flex items-center gap-3 text-white/70">
              <HiOutlineLocationMarker className="text-cyan" size={18} />
              Karachi, Pakistan
            </div>
          </div>
        </div>

        <div className="flex gap-3 md:flex-col md:items-end">
          <a
            href="https://www.linkedin.com/in/shanzay-hussain-437044325"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-white/70 hover:text-cyan hover:border-cyan/50 transition-colors"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/ShanzayHussain"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-white/70 hover:text-cyan hover:border-cyan/50 transition-colors"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </motion.div>

      <p className="text-center text-white/30 text-xs mt-20">
        © {new Date().getFullYear()} Shanzay Hussain.
      </p>
    </section>
  );
}