import Reveal from "./Reveal";
import { investment } from "@/data/content";

export default function Investment() {
  const { bonus } = investment;

  return (
    <section id="investimento" className="bg-white py-24">
      <div className="container-tight">
        <Reveal>
          <span className="section-label">Investimento</span>
          <h2 className="mt-3 max-w-2xl text-3xl font-medium text-[var(--ink-strong)] sm:text-4xl">
            Condições de pagamento
          </h2>
          <p className="mt-4 max-w-xl text-sm text-[var(--ink-soft)]">{investment.intro}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {investment.options.map((opt, i) => (
            <Reveal key={opt.key} delay={i * 100}>
              <div className="flex h-full flex-col rounded-xl2 border border-[var(--line)] bg-[var(--bg)] p-7">
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

                {opt.terms.length > 0 && (
                  <ul className="mt-5 space-y-2">
                    {opt.terms.map((t) => (
                      <li key={t} className="text-xs leading-relaxed text-[var(--ink-soft)]">
                        · {t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-6 flex flex-col gap-5 rounded-xl2 border border-brand-200 bg-brand-50 p-7 sm:flex-row sm:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                <rect x="3" y="8" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                <rect x="2" y="5.5" width="16" height="2.5" rx="1" stroke="currentColor" strokeWidth="1.6" />
                <path d="M10 5.5V17" stroke="currentColor" strokeWidth="1.6" />
                <path
                  d="M10 5.5C10 5.5 9 2.5 7 2.8c-1.6.3-1.4 2.7 3 2.7zM10 5.5c0 0 1-3 3-2.7 1.6.3 1.4 2.7-3 2.7z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <span className="section-label">{bonus.label}</span>
              <h3 className="mt-1 text-xl font-medium text-[var(--ink-strong)]">{bonus.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--ink)]">{bonus.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {bonus.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-medium text-brand-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-6 rounded-xl2 border border-[var(--line)] bg-[var(--bg)] p-7">
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
