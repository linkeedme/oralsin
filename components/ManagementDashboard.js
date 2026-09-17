import Reveal from "./Reveal";

const rework = [
  { name: "Dra. Bruna", pct: 34 },
  { name: "Dr. Eduardo", pct: 18 },
  { name: "Dra. Camila", pct: 11 },
];

function Ring({ pct, size = 76 }) {
  const r = (size - 8) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--line)" strokeWidth="6" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="#106934"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text
        x="50%"
        y="52%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="15"
        fontWeight="600"
        fill="var(--ink-strong)"
      >
        {pct}%
      </text>
    </svg>
  );
}

export default function ManagementDashboard() {
  return (
    <section className="bg-white py-24">
      <div className="container-tight">
        <Reveal>
          <span className="section-label">Visão da gestão</span>
          <h2 className="mt-3 max-w-2xl text-3xl font-medium text-[var(--ink-strong)] sm:text-4xl">
            Retrabalho, SLA e ocorrências — visíveis, não escondidos numa célula
          </h2>
          <p className="mt-4 max-w-xl text-sm text-[var(--ink-soft)]">
            Indicadores ilustrativos — os KPIs reais nascem da base de casos e etapas já em uso.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="h-full rounded-xl2 border border-[var(--line)] bg-[var(--bg)] p-6">
              <p className="text-sm font-semibold text-[var(--ink-strong)]">Retrabalho por dentista</p>
              <div className="mt-5 flex flex-wrap gap-6">
                {rework.map((d) => (
                  <div key={d.name} className="flex flex-col items-center gap-2">
                    <Ring pct={d.pct} />
                    <span className="text-xs font-medium text-[var(--ink)]">{d.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-xl2 border border-[var(--line)] bg-[var(--bg)] p-6">
              <p className="text-sm font-semibold text-[var(--ink-strong)]">
                Etapas com maior concentração de retrabalho
              </p>
              <div className="mt-5 space-y-4">
                {[
                  ["Prova sem barra", 52],
                  ["Prova sobre barra", 39],
                  ["Moldagem", 6],
                  ["Confecção", 3],
                ].map(([label, pct]) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs text-[var(--ink-soft)]">
                      <span>{label}</span>
                      <span className="tabular-nums">{pct}%</span>
                    </div>
                    <div className="mt-1.5 h-2.5 w-full rounded-full bg-white">
                      <div
                        className="h-2.5 rounded-full bg-brand-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 rounded-lg bg-brand-50 px-3 py-2 text-xs font-medium text-brand-700">
                91% do retrabalho real da OralSin está concentrado nessas duas etapas
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
