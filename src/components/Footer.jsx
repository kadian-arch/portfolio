import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import { Mail } from "lucide-react";
import { PROFILE } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-edge mt-10">
      <div className="container-x py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-black text-ink tracking-tight">{PROFILE.name}</p>
          <p className="text-[13px] text-faint mt-0.5">{PROFILE.role}</p>
        </div>

        <div className="flex items-center gap-4">
          <a href={`mailto:${PROFILE.email}`}
            className="text-muted hover:text-accent transition-colors" aria-label="Email">
            <Mail size={18} />
          </a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer"
            className="text-muted hover:text-accent transition-colors" aria-label="GitHub">
            <GitHubIcon size={18} />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"
            className="text-muted hover:text-accent transition-colors" aria-label="LinkedIn">
            <LinkedInIcon size={18} />
          </a>
        </div>
      </div>

      <div className="container-x pb-8 text-center sm:text-left">
        <p className="text-[12px] text-faint">
          &copy; {year} {PROFILE.name}. Built with React and Tailwind.
        </p>
      </div>
    </footer>
  );
}
