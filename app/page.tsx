import { SectionCard } from "@/components/section-card";
import {
  guidingLine,
  heroContent,
  introBlocks,
  questionPrompts,
  sections,
  synthesisPoints
} from "@/data/siteContent";

export default function Home() {
  return (
    <main className="min-h-screen bg-page-gradient px-4 py-6 text-slate sm:px-6 sm:py-8 lg:px-10">
      <div className="mx-auto w-full max-w-[78rem] overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 shadow-panel backdrop-blur">
        <section className="hero-shell relative isolate overflow-hidden px-5 pb-12 pt-14 sm:px-10 sm:pb-16 sm:pt-20 lg:px-16">
          <div className="hero-aura hero-aura-left" aria-hidden="true" />
          <div className="hero-aura hero-aura-right" aria-hidden="true" />
          <div className="hero-ring hero-ring-left" aria-hidden="true" />
          <div className="hero-ring hero-ring-top" aria-hidden="true" />
          <div className="hero-ring hero-ring-right" aria-hidden="true" />
          <div className="hero-core hero-core-left" aria-hidden="true" />
          <div className="hero-core hero-core-right" aria-hidden="true" />

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/78 sm:text-sm sm:tracking-[0.34em]">
              {heroContent.eyebrow}
            </p>
            <h1 className="mt-4 font-display text-[2.35rem] font-bold leading-[0.95] tracking-tight text-white sm:mt-5 sm:text-5xl sm:leading-tight lg:text-[3.45rem]">
              {heroContent.title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-[1.02rem] leading-7 text-white/86 sm:mt-6 sm:max-w-2xl sm:text-lg sm:leading-8">
              {heroContent.subtitle}
            </p>
          </div>
        </section>

        <div className="px-3 pb-10 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
          <div className="mx-auto w-full max-w-5xl lg:max-w-[70%]">
            <section className="-mt-7 rounded-[1.75rem] bg-white px-5 py-7 shadow-[0_22px_65px_rgba(94,109,161,0.16)] sm:-mt-10 sm:rounded-[2rem] sm:px-8 sm:py-10 lg:px-12 lg:py-11">
              <p className="pt-2 text-sm font-semibold uppercase tracking-[0.24em] text-accent sm:pt-2 sm:tracking-[0.28em]">
                Practical Guide
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-[2.15rem] font-bold leading-[1.02] tracking-tight text-ink sm:text-4xl lg:text-[2.85rem]">
                Phylogenetic Literacy, Genomics, and Bioinformatics: A Practical Guide for
                Medical Students
              </h2>

              <div className="mt-7 grid gap-5 sm:mt-8 sm:gap-6 lg:grid-cols-2">
                {introBlocks.map((block) => (
                  <article
                    key={block.title}
                    className="rounded-[1.5rem] bg-[#f7f9ff] px-4 py-5 sm:rounded-[1.75rem] sm:px-7 sm:py-7"
                  >
                    <h3 className="font-display text-[1.45rem] font-bold text-ink sm:text-[1.7rem]">
                      {block.title}
                    </h3>
                    <div className="mt-3 space-y-3 sm:mt-4 sm:space-y-4">
                      {block.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="max-w-[34rem] text-[0.98rem] leading-7 text-slate sm:text-[1.05rem]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <div className="mt-8 space-y-6 sm:mt-12 sm:space-y-8">
              {sections.map((section) => (
                <SectionCard key={section.id} section={section} />
              ))}
            </div>

            <section className="mt-8 space-y-6 sm:mt-12 sm:space-y-8">
              <article className="rounded-[1.75rem] bg-[#253765] px-5 py-6 text-white shadow-sm sm:rounded-[2rem] sm:px-8 sm:py-10">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffc6aa]">
                  Big Picture
                </p>
                <h2 className="mt-3 max-w-xl font-display text-[1.7rem] font-bold leading-tight tracking-tight sm:text-[2.35rem]">
                  A Simple Way to Connect These Concepts
                </h2>
                <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-white/84 sm:mt-5 sm:text-lg sm:leading-8">
                  If the terminology feels dense, keep the connection simple:
                </p>
                <ul className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
                  {synthesisPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-[0.98rem] leading-7 text-white/90 sm:text-lg sm:leading-8"
                    >
                      <span
                        className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-[1.35rem] border border-white/15 bg-white/8 px-4 py-4 text-[0.98rem] leading-7 text-white sm:mt-8 sm:rounded-[1.5rem] sm:px-5 sm:py-5 sm:text-lg sm:leading-8">
                  {guidingLine}
                </p>
              </article>

              <article className="rounded-[1.75rem] border border-slate-200 bg-white px-5 py-6 sm:rounded-[2rem] sm:px-8 sm:py-10">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
                  Use This Next
                </p>
                <h2 className="mt-3 max-w-lg font-display text-[1.7rem] font-bold leading-tight tracking-tight text-ink sm:text-[2.35rem]">
                  Best Places to Check Depending on Your Question
                </h2>
                <ul className="mt-5 grid gap-4 sm:mt-6 sm:gap-5 lg:grid-cols-2">
                  {questionPrompts.map((prompt) => (
                    <li
                      key={prompt.question}
                      className="rounded-[1.2rem] bg-[#f8faff] px-4 py-4 transition hover:bg-[#eef3ff] sm:rounded-[1.4rem]"
                    >
                      <p className="text-[0.98rem] font-semibold leading-7 text-ink sm:text-base">
                        {prompt.question}
                      </p>
                      <a
                        href={prompt.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mt-2 inline-flex text-[0.98rem] leading-7 text-slate underline decoration-[#c1cbe8] decoration-2 underline-offset-4 transition hover:text-accent hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 sm:text-base"
                      >
                        Go to {prompt.destination}
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
