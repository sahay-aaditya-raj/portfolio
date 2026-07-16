import Header from "./components/Header";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import Image from "next/image";
import { profile, education, skills, projects, experience, leadership, awards, workshops } from "./data/content";

export default function Home() {
  return (
    <div id="top">
      <Header />
      <main className="section pt-24 md:pt-32">
        {/* Intro */}
        <section className="min-h-[85vh] flex items-center py-16 md:py-24" id="about">
          <div className="w-full grid md:grid-cols-12 gap-10 md:gap-12 items-center">
            <div className="md:col-span-7">
              <Reveal>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                  Hi, I'm<br />
                  <span className="text-foreground">{profile.name}</span>
                </h1>
              </Reveal>
              <Reveal className="mt-6">
                <p className="text-xl md:text-2xl opacity-80 font-medium">
                  {profile.role} · {profile.location}
                </p>
              </Reveal>
              {profile.positions?.length ? (
                <Reveal className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {profile.positions.map((p, i) => (
                      <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-full border border-black/15 dark:border-white/15 text-sm opacity-80">
                        {p.label}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ) : null}
              <Reveal className="mt-6">
                <h2 className="sr-only">About</h2>
                <p className="max-w-2xl text-balance opacity-70 leading-relaxed text-base md:text-lg">
                  {profile.summary}
                </p>
              </Reveal>
              <Reveal className="mt-8">
                <div className="flex flex-wrap gap-3">
                  {/* Contact Me — same border as GitHub/LinkedIn, but filled with inverted theme colors */}
<a
  href={`mailto:${profile.email}`}
  className="
    px-6
    py-3
    rounded-full
    border
    border-black/25
    dark:border-white/25
    bg-[var(--foreground)]
    text-[var(--background)]
    text-sm
    font-semibold
    transition-all
    duration-200
    hover:scale-[1.02]
    hover:opacity-90
    active:scale-95
  "
>
  Contact Me
</a>
                  {/* GitHub / LinkedIn — visible borders in both themes */}
                  {profile.links.github && (
                    <a href={profile.links.github} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-black/25 dark:border-white/25 bg-black/[0.04] dark:bg-white/[0.06] text-sm font-medium hover:border-black/45 dark:hover:border-white/45 transition">
                      GitHub
                    </a>
                  )}
                  {profile.links.linkedin && (
                    <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-black/25 dark:border-white/25 bg-black/[0.04] dark:bg-white/[0.06] text-sm font-medium hover:border-black/45 dark:hover:border-white/45 transition">
                      LinkedIn
                    </a>
                  )}
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal>
                <div className="mb-8 flex justify-center">
                  <Image
                    src="/profile.jpg"
                    alt={`${profile.name} photo`}
                    width={220}
                    height={220}
                    priority
                    className="rounded-full object-cover border-2 border-black/15 dark:border-white/15"
                  />
                </div>
              </Reveal>
              <div className="card p-8">
                <div className="text-sm uppercase tracking-widest opacity-50 font-semibold">Quick Stats</div>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold">7+</div>
                    <div className="opacity-60 text-sm mt-1">Projects</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold">2</div>
                    <div className="opacity-60 text-sm mt-1">Internships</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold">20+</div>
                    <div className="opacity-60 text-sm mt-1">Events Led</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 md:py-24">
          <div className="w-full">
            <Reveal>
              <h2 className="title-underline text-2xl sm:text-3xl font-semibold">Skills</h2>
            </Reveal>
            {(() => {
              const colorForLevel = (level) => {
                if (level === 2) return "bg-green-500";
                if (level === 1) return "bg-yellow-500";
                return "bg-orange-500";
              };
              return (
                <>
                  <div className="mt-4 flex flex-wrap items-center gap-5 text-sm opacity-80">
                    <div className="inline-flex items-center gap-2">
                      <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500" />
                      <span>Pro</span>
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500" />
                      <span>Intermediate</span>
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <span className="inline-block w-2.5 h-2.5 rounded-full bg-orange-500" />
                      <span>Beginner</span>
                    </div>
                  </div>

                  <div className="mt-8 space-y-8">
                    {skills.map((group, i) => (
                      <div key={i}>
                        <Reveal className="mb-3">
                          <h3 className="text-base font-semibold opacity-90">{group.category}</h3>
                        </Reveal>
                        <div className="flex flex-wrap gap-2">
                          {group.items.map((item, idx) => (
                            <Reveal key={idx} className="pop">
                              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/15 dark:border-white/15 text-sm hover:border-black/30 dark:hover:border-white/30 transition">
                                {item.name}
                                <span className={`ms-1 inline-block w-1.5 h-1.5 rounded-full ${colorForLevel(item.level)}`} />
                              </span>
                            </Reveal>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-16 md:py-24">
          <Reveal>
            <h2 className="title-underline text-2xl sm:text-3xl font-semibold">Education</h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {education.map((ed, i) => (
              <Reveal key={i}>
                <div className="card card-hover p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base font-semibold leading-snug">{ed.school}</h3>
                    <span className="text-xs opacity-60 shrink-0 mt-0.5">{ed.period}</span>
                  </div>
                  <p className="mt-2 opacity-80 text-sm">{ed.degree}</p>
                  <ul className="mt-3 list-disc ms-5 opacity-70 text-sm">
                    {ed.details?.map((d, idx) => <li key={idx}>{d}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 md:py-24">
          <Reveal>
            <h2 className="title-underline text-2xl sm:text-3xl font-semibold">Projects</h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p, i) => (
              <Reveal key={i}>
                <a href={p.link || "#"} target={p.link?.startsWith("http") ? "_blank" : undefined} className="block card card-hover p-6 h-full">
                  <h3 className="text-base font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-2 opacity-70 text-sm leading-relaxed">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags?.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-xs border border-black/15 dark:border-white/15 opacity-70">
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-16 md:py-24">
          <Reveal>
            <h2 className="title-underline text-2xl sm:text-3xl font-semibold">Experience</h2>
          </Reveal>
          <div className="mt-8 grid gap-4">
            {experience.map((e, i) => (
              <Reveal key={i}>
                <div className="card card-hover p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <h3 className="text-base font-semibold">{e.role} — {e.company}</h3>
                    <span className="text-xs opacity-60 shrink-0">{e.period}</span>
                  </div>
                  <ul className="mt-3 list-disc ms-5 opacity-70 text-sm leading-relaxed space-y-1">
                    {e.points?.map((pt, idx) => <li key={idx}>{pt}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="py-16 md:py-24">
          <Reveal>
            <h2 className="title-underline text-2xl sm:text-3xl font-semibold">Leadership</h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {leadership.map((l, i) => (
              <Reveal key={i}>
                <div className="card card-hover p-6 h-full">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <h3 className="text-base font-semibold">{l.role} — {l.org}</h3>
                    <span className="text-xs opacity-60 shrink-0">{l.period}</span>
                  </div>
                  <ul className="mt-3 list-disc ms-5 opacity-70 text-sm leading-relaxed space-y-1">
                    {l.points?.map((pt, idx) => <li key={idx}>{pt}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section id="awards" className="py-16 md:py-24">
          <Reveal>
            <h2 className="title-underline text-2xl sm:text-3xl font-semibold">Awards & Certifications</h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {awards.map((a, i) => (
              <Reveal key={i}>
                <div className="card p-6">
                  <div className="flex items-start justify-between gap-4">
                    {a.link ? (
                      <a href={a.link} target="_blank" rel="noreferrer" className="text-base font-semibold leading-snug underline decoration-black/20 dark:decoration-white/20 hover:decoration-black/60 dark:hover:decoration-white/60 transition">
                        {a.title}
                      </a>
                    ) : (
                      <h3 className="text-base font-semibold leading-snug">{a.title}</h3>
                    )}
                    <span className="text-xs opacity-60 shrink-0">{a.year}</span>
                  </div>
                  <p className="opacity-70 text-sm mt-1">{a.by}</p>
                  {a.notes && <p className="mt-2 opacity-70 text-sm">{a.notes}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Workshops */}
        <section id="workshops" className="py-16 md:py-24">
          <Reveal>
            <h2 className="title-underline text-2xl sm:text-3xl font-semibold">Workshops</h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {workshops.map((w, i) => (
              <Reveal key={i}>
                <div className="card p-6">
                  <div className="flex items-start justify-between gap-4">
                    {w.link ? (
                      <a href={w.link} target="_blank" rel="noreferrer" className="text-base font-semibold leading-snug underline decoration-black/20 dark:decoration-white/20 hover:decoration-black/60 dark:hover:decoration-white/60 transition">
                        {w.title}
                      </a>
                    ) : (
                      <h3 className="text-base font-semibold leading-snug">{w.title}</h3>
                    )}
                    <span className="text-xs opacity-60 shrink-0">{w.year}</span>
                  </div>
                  <p className="opacity-70 text-sm mt-1">{w.by}</p>
                  {w.notes && <p className="mt-2 opacity-70 text-sm">{w.notes}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}