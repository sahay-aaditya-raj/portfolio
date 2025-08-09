import Header from "./components/Header";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import Image from "next/image";
import { profile, education, skills, projects, experience, awards, workshops } from "./data/content";

export default function Home() {
  return (
    <div id="top">
      <Header />
  <main className="section py-10"  id="about">
        {/* Intro (Personal + About) */}
    <section className="min-h-screen flex items-center">
          <div className="w-full grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <Reveal>
                <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
                  Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">{profile.name}</span>
                </h1>
              </Reveal>
              <Reveal className="mt-4">
                <p className="text-lg opacity-90">
                  {profile.role} · {profile.location}
                </p>
              </Reveal>
              {profile.positions?.length ? (
                <Reveal className="mt-3">
                  <div className="flex flex-wrap gap-2">
                    {profile.positions.map((p, i) => (
                      <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs">
                        {p.label}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ) : null}
              {/* About inline so it's visible initially */}
      <Reveal className="mt-4">
                <h2 className="sr-only">About</h2>
                <p className="max-w-2xl text-balance opacity-80">
                  {profile.summary}
                </p>
              </Reveal>
      <Reveal className="mt-6">
                <div className="flex flex-wrap gap-3">
                  <a href={`mailto:${profile.email}`} className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/20">
                    Contact Me
                  </a>
                  {profile.links.github && (
                    <a href={profile.links.github} target="_blank" rel="noreferrer" className="px-5 py-2 rounded-full border border-white/15 hover:border-white/30 transition">
                      GitHub
                    </a>
                  )}
                  {profile.links.linkedin && (
                    <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="px-5 py-2 rounded-full border border-white/15 hover:border-white/30 transition">
                      LinkedIn
                    </a>
                  )}
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal>
                <div className="mb-4 flex justify-center">
                  <Image
                    src="/profile.jpg"
                    alt={`${profile.name} photo`}
                    width={192}
                    height={192}
                    priority
                    className="rounded-full object-cover border border-white/10 shadow-lg"
                  />
                </div>
              </Reveal>
              <div className="card card-hover p-8">
                <div className="text-sm uppercase tracking-widest opacity-60">Quick Stats</div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-semibold">5+</div>
                    <div className="opacity-70 text-sm">Projects</div>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold">1+</div>
                    <div className="opacity-70 text-sm">Years</div>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold">100%</div>
                    <div className="opacity-70 text-sm">Passion</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills - fullscreen with badge buttons + proficiency dots */}
        <section id="skills" className="min-h-screen flex items-center py-10">
          <div className="w-full">
            <Reveal>
              <h2 className="title-underline text-2xl sm:text-3xl font-semibold">Skills</h2>
            </Reveal>
            {(() => {
              const colorForLevel = (level) => (level === 2 ? "bg-green-500" : level === 1 ? "bg-yellow-400" : "bg-red-500");
              return (
                <>
                  {/* Legend */}
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm opacity-80">
                    <div className="inline-flex items-center gap-2">
                      <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500" />
                      <span>Pro</span>
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <span>Intermediate</span>
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500" />
                      <span>Beginner</span>
                    </div>
                  </div>

                  {/* Categories (Languages, Technologies, Other Technical Skills, Soft Skills) */}
                  <div className="mt-6 space-y-6">
                    {skills.map((group, i) => (
                      <div key={i}>
                        <Reveal className="mb-2">
                          <h3 className="text-lg font-semibold opacity-90">{group.category}</h3>
                        </Reveal>
                        <div className="flex flex-wrap gap-2">
                          {group.items.map((item, idx) => (
                            <Reveal key={idx} className="pop">
                              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 transition text-sm">
                                {item.name}
                                <span className={`ms-1 inline-block w-2.5 h-2.5 rounded-full ${colorForLevel(item.level)}`} />
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
  <section id="education" className="py-10">
          <Reveal>
            <h2 className="title-underline text-2xl sm:text-3xl font-semibold">Education</h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {education.map((ed, i) => (
              <Reveal key={i}>
                <div className="card card-hover p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold">{ed.school}</h3>
                    <span className="text-sm opacity-70">{ed.period}</span>
                  </div>
                  <p className="mt-2 opacity-90">{ed.degree}</p>
                  <ul className="mt-3 list-disc ms-5 opacity-80">
                    {ed.details?.map((d, idx) => <li key={idx}>{d}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

  {/* Education */}
        

        {/* Projects */}
  <section id="projects" className="py-10">
          <Reveal>
            <h2 className="title-underline text-2xl sm:text-3xl font-semibold">Projects</h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <Reveal key={i}>
                <a href={p.link || "#"} target={p.link?.startsWith("http") ? "_blank" : undefined} className="block card card-hover p-6 h-full">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 opacity-80">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags?.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-full text-xs bg-white/10">
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
  <section id="experience" className="py-10">
          <Reveal>
            <h2 className="title-underline text-2xl sm:text-3xl font-semibold">Experience</h2>
          </Reveal>
          <div className="mt-8 grid gap-6">
            {experience.map((e, i) => (
              <Reveal key={i}>
                <div className="card card-hover p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold">{e.role} — {e.company}</h3>
                    <span className="text-sm opacity-70">{e.period}</span>
                  </div>
                  <ul className="mt-3 list-disc ms-5 opacity-80">
                    {e.points?.map((pt, idx) => <li key={idx}>{pt}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Awards */}
  <section id="awards" className="py-10">
          <Reveal>
            <h2 className="title-underline text-2xl sm:text-3xl font-semibold">Awards</h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {awards.map((a, i) => (
              <Reveal key={i}>
                <div className="card p-6">
                  <div className="flex items-center justify-between gap-4">
                    {a.link ? (
                      <a href={a.link} target="_blank" rel="noreferrer" className="text-lg font-semibold underline decoration-white/30 hover:decoration-white">
                        {a.title}
                      </a>
                    ) : (
                      <h3 className="text-lg font-semibold">{a.title}</h3>
                    )}
                    <span className="text-sm opacity-70">{a.year}</span>
                  </div>
                  <p className="opacity-80">{a.by}</p>
                  {a.notes && <p className="mt-2 opacity-80">{a.notes}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Workshops */}
  <section id="workshops" className="py-10">
          <Reveal>
            <h2 className="title-underline text-2xl sm:text-3xl font-semibold">Workshops</h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {workshops.map((w, i) => (
              <Reveal key={i}>
                <div className="card p-6">
                  <div className="flex items-center justify-between gap-4">
                    {w.link ? (
                      <a href={w.link} target="_blank" rel="noreferrer" className="text-lg font-semibold underline decoration-white/30 hover:decoration-white">
                        {w.title}
                      </a>
                    ) : (
                      <h3 className="text-lg font-semibold">{w.title}</h3>
                    )}
                    <span className="text-sm opacity-70">{w.year}</span>
                  </div>
                  <p className="opacity-80">{w.by}</p>
                  {w.notes && <p className="mt-2 opacity-80">{w.notes}</p>}
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
