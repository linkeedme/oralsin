import Reveal from "./Reveal";
import { phases, investment } from "@/data/content";

export default function ImplementationTimeline() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <div className="container-tight">
        <Reveal>
          <span className="section-label">Implementação</span>
          <h2 className="mt-3 max-w-2xl text-3xl font-medium text-[var(--ink-strong)] sm:text-4xl">
            Roadmap em 4 fases, cada uma entregando valor por si só
          </h2>
          <p className="mt-4 max-w-xl text-sm text-[var(--ink-soft)]">
            Projeto completo: {investment.totalDays}. A Fase 1 já substitui a planilha mais crítica —
            cadastro e acompanhamento de caso.
          </p>
        </Reveal>

        <div className="scroll-x mt-14 flex gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible">
          {phases.map((p, i) => (
            <Reveal key={p.number} delay={i * 90} className="min-w-[260px] lg:min-w-0">
              <div className="flex h-full flex-col rounded-xl2 border border-[var(--line)] bg-white p-6">
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-medium text-brand-500">{p.number}</span>
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-semibold text-brand-700">
                    {p.duration}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-medium text-[var(--ink-strong)]">{p.name}</h3>
                <ul className="mt-4 space-y-1.5">
                  {p.items.map((item) => (
                    <li key={item} className="text-xs leading-relaxed text-[var(--ink-soft)]">
                      · {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
