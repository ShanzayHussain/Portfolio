import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import avatarSkeleton from "../assets/avatar-normal.png";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-24">
      <SectionHeading title="Contact" />
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border bg-panel/60 p-8 flex flex-col justify-between gap-8"
        >
          <p className="text-white/70 leading-relaxed">
            Open to internships, freelance builds and AI-integrated product
            work.
          </p>
          <div className="space-y-4 text-sm">
            <a
              // href="mailto:hussain.shanzay2005@gmail.com"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hussain.shanzay2005@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/70 hover:text-cyan transition-colors"
            >
              <HiOutlineMail className="text-cyan" size={18} />
              hussain.shanzay2005@gmail.com
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
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/shanzay-hussain-437044325"
              target="_blank"
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-white/70 hover:text-cyan hover:border-cyan/50 transition-colors"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/ShanzayHussain"
              target="_blank"
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-white/70 hover:text-cyan hover:border-cyan/50 transition-colors"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-border overflow-hidden min-h-[280px]"
        >
          <img src={avatarSkeleton} alt="" className="w-full h-full object-cover object-top" />
        </motion.div>
      </div>

      <p className="text-center text-white/30 text-xs mt-20">
        © {new Date().getFullYear()} Shanzay Hussain. 
      </p>
    </section>
  );
}
