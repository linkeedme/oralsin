"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { faq } from "@/data/content";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="container-tight">
        <Reveal>
          <span className="section-label">Perguntas frequentes</span>
          <h2 className="mt-3 max-w-2xl text-3xl font-medium text-[var(--ink-strong)] sm:text-4xl">
            O que a OralSin pode querer saber antes de decidir
          </h2>
        </Reveal>

        <div className="mt-12 max-w-2xl divide-y divide-[var(--line)] border-t border-b border-[var(--line)]">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-[var(--ink-strong)]">{item.q}</span>
                  <svg
                    className="h-4 w-4 shrink-0 text-brand-500 transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "220px" : "0px" }}
                >
                  <p className="pb-5 text-sm leading-relaxed text-[var(--ink-soft)]">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
