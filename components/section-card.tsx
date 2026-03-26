import type { ContentSection } from "@/types/content";

type SectionCardProps = {
  section: ContentSection;
};

export function SectionCard({ section }: SectionCardProps) {
  return (
    <section
      id={section.id}
      className="rounded-[1.75rem] border border-slate-200/80 bg-white/80 px-4 py-6 shadow-sm backdrop-blur sm:rounded-[2rem] sm:px-8 sm:py-10 lg:px-10"
      aria-labelledby={`${section.id}-title`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
        Core Concept
      </p>
      <h2
        id={`${section.id}-title`}
        className="mt-3 max-w-2xl font-display text-[1.7rem] font-bold leading-tight tracking-tight text-ink sm:text-[2.35rem]"
      >
        {section.title}
      </h2>

      <div className="mt-5 space-y-6 sm:space-y-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg font-semibold text-ink">What It Is</h3>
            {section.intro.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-[36rem] text-[0.98rem] leading-7 text-slate sm:text-[1.05rem]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg font-semibold text-ink">Why It Matters</h3>
            {section.whyItMatters.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-[36rem] text-[0.98rem] leading-7 text-slate sm:text-[1.05rem]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-[1.35rem] bg-mist px-4 py-5 sm:rounded-[1.75rem] sm:px-6 sm:py-6">
            <h3 className="text-lg font-semibold text-ink">A Few Terms to Know</h3>
            <dl className="mt-4 space-y-4 sm:mt-5">
              {section.definitions.map((definition) => (
                <div key={definition.term}>
                  <dt className="font-semibold text-ink">{definition.term}</dt>
                  <dd className="mt-1 text-[0.985rem] leading-7 text-slate">
                    {definition.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-[1.35rem] border border-[#ffd6c0] bg-[#fff7f1] px-4 py-5 sm:rounded-[1.75rem] sm:px-6 sm:py-6">
            <h3 className="text-lg font-semibold text-ink">Helpful Resources</h3>
            <ul className="mt-4 space-y-4 sm:mt-5">
              {section.resources.map((resource) => (
                <li key={resource.href}>
                  <a
                    className="inline-flex text-[0.985rem] font-semibold leading-7 text-ink transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
                    href={resource.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {resource.label}
                  </a>
                  <p className="mt-1 text-[0.985rem] leading-7 text-slate">{resource.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
