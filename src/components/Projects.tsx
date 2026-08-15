import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import smartbudget from "../assets/project-smartbudget.png";
import interviewiq from "../assets/project-interviewiq.png";
import ragchatbot from "../assets/project-ragchatbot.png";
import resumeforge from "../assets/project-resumeforge.png";

const projects = [
  {
    title: "SmartBudget",
    tag: "AI-POWERED PERSONAL FINANCE & SPENDING RISK PLATFORM",
    image: smartbudget,
    description:
      "An end-to-end finance platform pairing budget tracking with ML-based overspending risk prediction, real-time analytics (spend pace, category breakdowns), behavioural insights by mood and weekday, and a context-aware AI assistant on Groq LLaMA 3.3 70B.",
    stack: ["React", "Vite", "TypeScript", "Express", "FastAPI", "scikit-learn", "Firebase", "Chart.js"],
    demo: "https://smart-budget-gules-ten.vercel.app/",
    code: "https://github.com/ShanzayHussain/Smart-Budget",
  },
  {
    title: "InterviewIQ",
    tag: "AI-POWERED MOCK INTERVIEW PLATFORM",
    image: interviewiq,
    description:
      "A full-stack AI interview platform shipped end-to-end — frontend, backend, and cloud deployment — with a Chart.js analytics dashboard tracking performance trends across sessions and speech recognition for realistic interview simulation.",
    stack: ["React", "Vite", "Express", "Supabase", "Groq AI", "Chart.js"],
    demo: "https://interview-iq-bay.vercel.app",
    code: "https://github.com/ShanzayHussain/Interview-IQ",
  },
  {
    title: "RAG Intelligence Chatbot",
    tag: "MULTIMODAL AI KNOWLEDGE ASSISTANT",
    image: ragchatbot,
    description:
      "A multimodal RAG chatbot with document and image uploads, persistent chat history, ChromaDB vector retrieval with similarity-threshold routing, vision-model image understanding at ingestion, and cross-conversation knowledge base search.",
    stack: ["React", "TypeScript", "FastAPI", "MongoDB Atlas", "ChromaDB", "Firebase Auth", "OpenAI"],
    demo: "https://rag-intelligence-chatbot-beta.vercel.app",
    code: "https://github.com/ShanzayHussain/Rag-Intelligence-Chatbot",
  },
  {
    title: "ResumeForge AI",
    tag: "AUTOMATED RESUME TAILORING PLATFORM — IN PROGRESS",
    image: resumeforge,
    description:
      "A full-stack platform that automates tailoring a resume to a specific job description via an n8n-orchestrated workflow — parsing the uploaded resume and JD, extracting key requirements, and generating a tailored, downloadable version. Currently in development.",
    stack: ["React", "TypeScript", "Firebase", "Docker", "n8n", "Express"],
    demo: "https://resume-forge-ai-five.vercel.app/",
    code: "https://github.com/ShanzayHussain/ResumeForgeAI",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
      <SectionHeading title="Projects" />
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            onClick={() => window.open(p.code, "_blank", "noopener,noreferrer")}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                window.open(p.code, "_blank", "noopener,noreferrer");
              }
            }}
            className="group rounded-2xl overflow-hidden border border-border bg-panel/60 flex flex-col transition-all hover:shadow-[0_0_40px_rgba(79,217,219,0.15)] hover:border-cyan/40 cursor-pointer"
          >
            <div className="h-40 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col gap-3 flex-1">
              <div>
                <h3 className="font-display font-semibold text-lg text-white">{p.title}</h3>
                <p className="text-[10px] tracking-[0.15em] text-cyan/70 mt-1">{p.tag}</p>
              </div>
              <p className="text-sm text-white/60 leading-relaxed flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] px-2.5 py-1 rounded-full border border-border text-white/50"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 pt-3">
                <a
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 text-center text-sm font-medium rounded-lg bg-cyan/90 text-ink py-2 hover:bg-cyan transition-colors"
                >
                  View project
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm font-medium rounded-lg border border-border px-4 py-2 text-white/70 hover:text-cyan hover:border-cyan/50 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}