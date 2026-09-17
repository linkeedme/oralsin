import Reveal from "./Reveal";
import { flow } from "@/data/content";

export default function OperationalFlow() {
  return (
    <section className="bg-white py-24">
      <div className="container-tight">
        <Reveal>
          <span className="section-label">Fluxo operacional</span>
          <h2 className="mt-3 max-w-2xl text-3xl font-medium text-[var(--ink-strong)] sm:text-4xl">
            Do cadastro do paciente ao indicador de gestão
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="scroll-x mt-14 flex gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-6 lg:gap-3 lg:overflow-visible">
            {flow.map((f, i) => (
              <div key={f.step} className="relative min-w-[180px] flex-1 lg:min-w-0">
                <div className="rounded-xl2 border border-[var(--line)] bg-[var(--bg)] p-5">
                  <span className="font-display text-xs font-medium text-brand-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-sm font-semibold text-[var(--ink-strong)]">{f.step}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-[var(--ink-soft)]">{f.detail}</p>
                </div>
                {i < flow.length - 1 && (
                  <div className="absolute right-[-18px] top-1/2 hidden -translate-y-1/2 lg:block">
                    <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
                      <path d="M0 5H18M18 5L13 1M18 5L13 9" stroke="var(--line)" strokeWidth="1.5" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
