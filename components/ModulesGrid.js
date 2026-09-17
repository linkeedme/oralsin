import Reveal from "./Reveal";
import { modules } from "@/data/content";

export default function ModulesGrid() {
  return (
    <section id="modulos" className="bg-white py-24">
      <div className="container-tight">
        <Reveal>
          <span className="section-label">Módulos</span>
          <h2 className="mt-3 max-w-2xl text-3xl font-medium text-[var(--ink-strong)] sm:text-4xl">
            O que o sistema entrega
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 70}>
              <div className="flex h-full flex-col rounded-xl2 border border-[var(--line)] bg-[var(--bg)] p-6 transition hover:border-brand-300 hover:shadow-card">
                <h3 className="text-lg font-medium text-[var(--ink-strong)]">{m.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink)]">{m.description}</p>
                <ul className="mt-4 space-y-2">
                  {m.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[var(--ink-soft)]">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4 10.5L8 14.5L16 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-5">
                  <p className="rounded-lg bg-brand-50 px-3 py-2 text-xs font-medium text-brand-700">
                    {m.benefit}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
