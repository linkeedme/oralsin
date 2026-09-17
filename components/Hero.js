import Image from "next/image";
import { kpiSample } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)] pt-10 pb-24 sm:pt-14 sm:pb-32">
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-[0.10] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brand) 0%, transparent 70%)" }}
      />
      <div className="container-tight relative">
        <div className="flex items-center justify-between reveal">
          <div className="flex items-center gap-3">
            <Image src="/logo.webp" alt="OralSin Implantes" width={40} height={40} className="rounded-lg" />
            <span className="font-display text-lg font-medium text-[var(--ink-strong)]">OralSin</span>
          </div>
          <span className="hidden rounded-full border border-[var(--line)] bg-white px-4 py-1.5 text-xs font-medium text-[var(--ink-soft)] sm:inline-block">
            Proposta de sistema próprio · Linkeed
          </span>
        </div>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="reveal" style={{ animationDelay: "80ms" }}>
            <span className="section-label">Sistema próprio de gestão</span>
            <h1 className="mt-4 text-4xl font-medium leading-[1.08] text-[var(--ink-strong)] sm:text-5xl lg:text-[3.4rem]">
              Uma operação do tamanho da OralSin merece um sistema{" "}
              <span className="italic text-brand-500">feito para ela.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--ink)]">
              Proposta de desenvolvimento de uma plataforma própria que centraliza pacientes, casos,
              etapas de tratamento, protético e gestão de Volta Redonda e Barra Mansa — hoje espalhados
              em planilhas — em um único sistema.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#modulos"
                className="rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-card transition hover:bg-brand-600"
              >
                Conheça o projeto
              </a>
              <a
                href="#investimento"
                className="rounded-full border border-[var(--line)] bg-white px-7 py-3.5 text-sm font-semibold text-[var(--ink-strong)] transition hover:border-brand-300"
              >
                Ver investimento
              </a>
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: "180ms" }}>
            <div className="relative rounded-xl2 border border-[var(--line)] bg-white p-3 shadow-lift">
              <div className="flex items-center gap-1.5 border-b border-[var(--line)] px-2 pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--line)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--line)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--line)]" />
                <span className="ml-3 text-xs font-medium text-[var(--ink-soft)]">
                  Sistema OralSin · Painel Gerencial
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 p-3">
                {kpiSample.map((kpi) => (
                  <div key={kpi.label} className="rounded-xl border border-[var(--line)] bg-[var(--bg)] p-4">
                    <p className="text-xs font-medium text-[var(--ink-soft)]">{kpi.label}</p>
                    <p className="mt-2 font-display text-2xl font-medium text-[var(--ink-strong)] tabular-nums">
                      {kpi.value}
                    </p>
                    <p
                      className={`mt-1 text-xs font-medium ${
                        kpi.positive === true
                          ? "text-brand-600"
                          : kpi.positive === false
                          ? "text-[#b3492f]"
                          : "text-[var(--ink-soft)]"
                      }`}
                    >
                      {kpi.trend}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-[var(--ink-soft)]">
              Ilustrativo — dados de exemplo do painel proposto
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
