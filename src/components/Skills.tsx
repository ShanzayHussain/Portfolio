import { motion } from "framer-motion";
import {
  SiReact, SiVite, SiTypescript, SiJavascript, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiFastapi, SiDjango,
  SiMysql, SiPostgresql, SiMongodb, SiFirebase,
  SiPython, SiCplusplus,
  SiNumpy, SiPandas, SiScikitlearn,
  SiGit, SiGithub, SiSupabase, SiVercel, SiGooglecolab, SiPostman, SiFigma, SiCanvas,
} from "react-icons/si";
import { TbApi, TbBrandCSharp, TbRobotFace, TbMessageChatbot, TbTrain } from "react-icons/tb";
import SectionHeading from "./SectionHeading";
import type { IconType } from "react-icons";

type Skill = { name: string; icon: IconType };

const groups: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Vite", icon: SiVite },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Django", icon: SiDjango },
      { name: "REST APIs", icon: TbApi },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase Firestore", icon: SiFirebase },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "C++", icon: SiCplusplus },
      { name: "C#", icon: TbBrandCSharp },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "LLM Integration", icon: TbRobotFace },
      { name: "Prompt Engineering", icon: TbMessageChatbot },
      { name: "RAG", icon: TbApi },
      { name: "Embeddings", icon: SiNumpy },
      { name: "NumPy", icon: SiNumpy },
      { name: "Pandas", icon: SiPandas },
      { name: "Scikit-learn", icon: SiScikitlearn },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Supabase", icon: SiSupabase },
      { name: "Vercel", icon: SiVercel },
      { name: "Google Colab", icon: SiGooglecolab },
      { name: "Railway", icon: TbTrain },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: SiFigma },
      { name: "Canva", icon: SiCanvas },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
      <SectionHeading  title="Skills" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: gi * 0.05 }}
            className="rounded-2xl border border-border bg-panel/60 p-6"
          >
            <p className="text-xs font-mono tracking-[0.2em] text-white/40 mb-4">
              {group.title.toUpperCase()}
            </p>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    style={{ animationDelay: `${i * 0.25}s` }}
                    className="animate-float flex items-center gap-2 rounded-lg border border-border bg-ink/60 px-3 py-2 text-sm text-white/80 hover:border-cyan/50 hover:text-cyan transition-colors"
                  >
                    <Icon className="text-cyan/80" size={16} />
                    {skill.name}
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
