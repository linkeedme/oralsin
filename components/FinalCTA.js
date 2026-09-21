import Image from "next/image";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-600 py-24 text-white">
      <div
        className="pointer-events-none absolute -bottom-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
      />
      <div className="container-tight relative text-center">
        <Reveal>
          <span className="section-label text-white/80">Próximos passos</span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-medium leading-tight sm:text-4xl">
            Uma nova estrutura para a gestão da OralSin
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-white/80">
            Definir a forma de pagamento, assinar o escopo da Fase 1 e começar pelo que já resolve o
            problema mais crítico: cadastro e acompanhamento de caso.
          </p>
          <a
            href="mailto:davi@linkeed.com.br?subject=Avan%C3%A7ar%20com%20o%20projeto%20OralSin"
            className="mt-9 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-brand-700 shadow-lift transition hover:bg-brand-50"
          >
            Avançar com o projeto
          </a>
        </Reveal>
      </div>

      <div className="container-tight relative mt-20 flex flex-col items-center gap-3 border-t border-white/15 pt-8 text-xs text-white/70 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logo.webp" alt="OralSin" width={22} height={22} className="rounded" />
          <span>Proposta preparada para OralSin Implantes</span>
        </div>
        <span>Linkeed · Davi Torres — davi@linkeed.com.br · Proposta válida por 15 dias</span>
      </div>
    </section>
  );
}
