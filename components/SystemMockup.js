import Reveal from "./Reveal";
import { funnelSample } from "@/data/content";

const alerts = [
  {
    sev: "crit",
    title: "3ª repetição na etapa de Prova",
    detail: "Acima da média da clínica · Dra. Bruna",
  },
  {
    sev: "warn",
    title: "Pausado por inadimplência há 12 dias",
    detail: "Reclamação em aberto ainda não resolvida",
  },
  {
    sev: "info",
    title: "Sem agendamento há 45 dias",
    detail: "Nenhuma consulta futura marcada",
  },
];

export default function SystemMockup() {
  const max = Math.max(...funnelSample.map((f) => f.value));

  return (
    <section className="bg-[var(--bg)] py-24">
      <div className="container-tight">
        <Reveal>
          <span className="section-label">É assim que vai funcionar</span>
          <h2 className="mt-3 max-w-2xl text-3xl font-medium text-[var(--ink-strong)] sm:text-4xl">
            O painel que substitui a planilha
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 [perspective:1800px]">
            <div className="mx-auto max-w-4xl rounded-2xl border border-[var(--line)] bg-[#1b2426] p-2.5 shadow-lift [transform:rotateX(3deg)]">
              <div className="flex items-center gap-1.5 px-3 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#4a5558]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#4a5558]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#4a5558]" />
                <span className="ml-3 rounded-md bg-[#28343699] px-3 py-1 text-[11px] text-[#a9b6b9]">
                  app.oralsin.com.br/painel
                </span>
              </div>
              <div className="grid gap-3 rounded-xl bg-white p-4 sm:grid-cols-[200px_1fr] sm:gap-0 sm:overflow-hidden sm:rounded-xl sm:p-0">
                {/* sidebar */}
                <div className="hidden border-r border-[var(--line)] bg-[var(--bg)] px-4 py-5 sm:block">
                  <p className="mb-4 text-[11px] font-semibold uppercase tracking-wide text-[var(--ink-soft)]">
                    OralSin
                  </p>
                  {["Painel", "Pacientes", "Casos", "Protético", "Agenda", "Relatórios"].map((item, idx) => (
                    <div
                      key={item}
                      className={`mb-1 rounded-lg px-3 py-2 text-xs font-medium ${
                        idx === 0 ? "bg-brand-500 text-white" : "text-[var(--ink)]"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* main */}
                <div className="p-4 sm:p-6">
                  <p className="text-sm font-medium text-[var(--ink-strong)]">
                    Painel gerencial · Volta Redonda
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                      ["Casos ativos", "128"],
                      ["Retrabalho médio", "1,4x"],
                      ["Sem agendamento", "9"],
                      ["SLA médio", "42d"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-lg border border-[var(--line)] p-3">
                        <p className="text-[10px] font-medium text-[var(--ink-soft)]">{label}</p>
                        <p className="mt-1 font-display text-lg font-medium tabular-nums text-[var(--ink-strong)]">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-3 lg:grid-cols-[1.2fr_1fr]">
                    <div className="rounded-lg border border-[var(--line)] p-4">
                      <p className="text-xs font-semibold text-[var(--ink-strong)]">
                        Funil de tratamento
                      </p>
                      <div className="mt-3 space-y-2">
                        {funnelSample.map((f) => (
                          <div key={f.label}>
                            <div className="flex justify-between text-[10px] text-[var(--ink-soft)]">
                              <span>{f.label}</span>
                              <span className="tabular-nums">{f.value}</span>
                            </div>
                            <div className="mt-1 h-2 w-full rounded-full bg-[var(--bg)]">
                              <div
                                className="h-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600"
                                style={{ width: `${(f.value / max) * 100}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-lg border border-[var(--line)] p-4">
                      <p className="text-xs font-semibold text-[var(--ink-strong)]">
                        Precisa da sua atenção
                      </p>
                      <div className="mt-3 space-y-2">
                        {alerts.map((a) => (
                          <div
                            key={a.title}
                            className={`rounded-md border-l-2 p-2 ${
                              a.sev === "crit"
                                ? "border-[#c63d3d] bg-[#fdecec]"
                                : a.sev === "warn"
                                ? "border-brand-500 bg-brand-50"
                                : "border-[#3974d8] bg-[#edf4ff]"
                            }`}
                          >
                            <p className="text-[11px] font-semibold text-[var(--ink-strong)]">{a.title}</p>
                            <p className="text-[10px] text-[var(--ink-soft)]">{a.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-[var(--ink-soft)]">
            Interface conceitual do sistema proposto — dados ilustrativos
          </p>
        </Reveal>
      </div>
    </section>
  );
}
