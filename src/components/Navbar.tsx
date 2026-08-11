
import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState("about");

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-5 px-3 sm:px-4">
      <nav
        className="flex items-center gap-0.5 sm:gap-1 rounded-full border border-border bg-panel/70 backdrop-blur px-1.5 sm:px-2 py-1.5 sm:py-2 max-w-full overflow-x-auto [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={`shrink-0 whitespace-nowrap px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-sm font-medium transition-colors ${
              activeId === l.id
                ? "bg-cyan/15 text-cyan"
                : "text-white/60 hover:text-white"
            }`}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}