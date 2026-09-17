import Reveal from "./Reveal";
import { findings } from "@/data/content";

export default function ProjectVision() {
  return (
    <section className="bg-white py-24">
      <div className="container-tight">
        <Reveal>
          <span className="section-label">O cenário hoje</span>
          <h2 className="mt-3 max-w-2xl text-3xl font-medium text-[var(--ink-strong)] sm:text-4xl">
            Não é falta de dado. É falta de estrutura, alerta e memória.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--ink)]">
            A gestão de casos da OralSin acontece inteiramente em planilhas — uma por dentista, uma por
            trabalho protético, uma por mês de intercorrências. Isso não é uma suposição: é o que os
            próprios dados mostram.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {findings.map((f, i) => (
            <Reveal key={f.label} delay={i * 80}>
              <div className="h-full rounded-xl2 border border-[var(--line)] bg-[var(--bg)] p-6">
                <p className="font-display text-4xl font-medium text-brand-500 tabular-nums">{f.value}</p>
                <p className="mt-3 text-sm font-medium leading-snug text-[var(--ink-strong)]">{f.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-[var(--ink-soft)]">{f.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-16 rounded-xl2 border border-brand-200 bg-brand-50 p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-500 text-sm font-semibold text-white">
                “
              </div>
              <div>
                <p className="text-lg leading-relaxed text-[var(--ink-strong)]">
                  <span className="font-medium">Betina (gestão):</span> &ldquo;O que precisa da minha
                  atenção essa semana?&rdquo;
                </p>
                <p className="mt-4 text-base leading-relaxed text-[var(--ink)]">
                  <span className="font-medium text-brand-600">Painel de Alertas:</span> &ldquo;3 casos
                  merecem atenção: um caso está na 3ª repetição da etapa de Prova — acima da média da
                  clínica; outro está pausado por inadimplência há 12 dias e tem uma reclamação aberta
                  ainda não resolvida; um terceiro não tem agendamento há 45 dias e não há nenhuma
                  consulta futura marcada.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
