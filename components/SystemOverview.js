import Reveal from "./Reveal";
import { modules } from "@/data/content";

export default function SystemOverview() {
  const ring = modules.slice(0, 8);

  return (
    <section className="bg-[var(--bg)] py-24">
      <div className="container-tight">
        <Reveal>
          <span className="section-label">Uma plataforma, múltiplos processos</span>
          <h2 className="mt-3 max-w-2xl text-3xl font-medium text-[var(--ink-strong)] sm:text-4xl">
            Tudo derivado do paciente. Uma única operação.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 rounded-xl2 border border-[var(--line)] bg-white p-6 sm:p-10">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {ring.map((m) => (
                <div
                  key={m.name}
                  className="rounded-xl border border-[var(--line)] bg-[var(--bg)] p-4 text-center transition hover:border-brand-300 hover:shadow-soft"
                >
                  <p className="text-xs font-semibold leading-snug text-[var(--ink-strong)]">{m.name}</p>
                </div>
              ))}
              <div className="col-span-2 flex items-center justify-center rounded-xl border-2 border-dashed border-brand-300 bg-brand-50 p-4 text-center sm:col-span-1 lg:col-span-5 lg:mt-2">
                <p className="font-display text-base font-medium text-brand-600">
                  Sistema de Gestão OralSin
                </p>
              </div>
            </div>
            <p className="mt-6 text-center text-xs text-[var(--ink-soft)]">
              Cada módulo escreve e lê da mesma base de pacientes e casos — sem planilhas paralelas.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
