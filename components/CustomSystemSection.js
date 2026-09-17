import Reveal from "./Reveal";

export default function CustomSystemSection() {
  return (
    <section className="bg-[#141d20] py-24 text-white">
      <div className="container-tight">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="section-label text-brand-300">Uma operação. Uma fonte de verdade.</span>
            <h2 className="mt-3 text-3xl font-medium leading-tight sm:text-4xl">
              Em vez de adaptar a operação a uma ferramenta genérica, o sistema parte dos processos
              reais da OralSin.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/70">
              Cada módulo desta proposta responde a um problema documentado nas próprias planilhas da
              clínica — não a uma lista genérica de features de &ldquo;software para clínica
              odontológica&rdquo;. É uma plataforma construída para aderir à operação, não o contrário.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Aderência", "Cada módulo nasce de um problema real, já mapeado nos dados da clínica"],
                ["Centralização", "Paciente, caso, protético e ocorrência num único lugar, sem planilha paralela"],
                ["Controle", "Perfis de acesso por função — cada pessoa vê só o que precisa"],
                ["Evolução", "Base multi-unidade, pronta para crescer sem retrabalho técnico"],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-xl2 border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-brand-300">{title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-white/70">{desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
