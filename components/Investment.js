import Reveal from "./Reveal";
import { investment } from "@/data/content";

export default function Investment() {
  return (
    <section id="investimento" className="bg-white py-24">
      <div className="container-tight">
        <Reveal>
          <span className="section-label">Investimento</span>
          <h2 className="mt-3 max-w-2xl text-3xl font-medium text-[var(--ink-strong)] sm:text-4xl">
            Três formas de estruturar o projeto
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {investment.options.map((opt, i) => (
            <Reveal key={opt.key} delay={i * 100}>
              <div
                className={`flex h-full flex-col rounded-xl2 border p-7 ${
                  opt.recommended
                    ? "border-brand-500 bg-brand-50 shadow-lift"
                    : "border-[var(--line)] bg-[var(--bg)]"
                }`}
              >
                {opt.recommended && (
                  <span className="mb-4 w-fit rounded-full bg-brand-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                    Recomendada
                  </span>
                )}
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ink-soft)]">
                  {opt.subtitle}
                </p>
                <h3 className="mt-1 text-xl font-medium text-[var(--ink-strong)]">{opt.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]">{opt.description}</p>

                <div className="mt-6 border-t border-black/5 pt-6">
                  <p className="font-display text-3xl font-medium text-[var(--ink-strong)] tabular-nums">
                    {opt.highlight}
                  </p>
                  <p className="mt-1 text-xs text-[var(--ink-soft)]">{opt.highlightLabel}</p>
                </div>

                <ul className="mt-5 space-y-2">
                  {opt.terms.map((t) => (
                    <li key={t} className="text-xs leading-relaxed text-[var(--ink-soft)]">
                      · {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-8 rounded-xl2 border border-[var(--line)] bg-[var(--bg)] p-7">
            <p className="text-sm font-semibold text-[var(--ink-strong)]">
              Mensalidade de suporte da plataforma
            </p>
            <p className="mt-2 font-display text-2xl font-medium text-brand-500 tabular-nums">
              {investment.support.price}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-[var(--ink-soft)]">
              {investment.support.detail}. {investment.support.grace}.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
