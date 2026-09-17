import Reveal from "./Reveal";
import { scopeIncluded, scopeExcluded } from "@/data/content";

export default function Scope() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <div className="container-tight">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-xl2 border border-[var(--line)] bg-white p-7">
              <span className="section-label">Incluído no projeto</span>
              <ul className="mt-5 space-y-3">
                {scopeIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[var(--ink)]">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.4" />
                      <path
                        d="M6 10.2L8.8 13L14 7.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-xl2 border border-[var(--line)] bg-white p-7">
              <span className="section-label text-[var(--ink-soft)]">Fora do escopo atual</span>
              <ul className="mt-5 space-y-3">
                {scopeExcluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[var(--ink-soft)]">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-[var(--ink-soft)]" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M7 7L13 13M13 7L7 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-lg border border-dashed border-[var(--line)] p-4 text-xs leading-relaxed text-[var(--ink-soft)]">
                Construído para o presente. Preparado para evoluir — novas etapas poderão ser
                estruturadas conforme necessidade e escopo futuro, negociadas separadamente.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
