export default function MobileFirstResumeWebsite() {
  const openExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const openEmail = () => {
    window.location.href = "mailto:arifuzzaman.tanin@outlook.com";
  };

  const resumePdfUrl = "https://docs.google.com/document/d/1HGl_V5IOXMJ9cQ5qWeiQKNz_zBV2Q3R1sP8uRaG31eM/edit?usp=sharing";

  const skills = {
    Languages: ["C#", "Python", "JavaScript", "TypeScript", "Node.js"],
    "AI & LLM": [
      "OpenAI",
      "Azure OpenAI",
      "Gemini",
      "RAG Pipelines",
      "Prompt Engineering",
      "AI Automation",
    ],
    Frameworks: [
      ".NET Core",
      "ASP.NET",
      "Web API",
      "React",
      "Next.js",
      "Angular",
      "Vue.js",
      "Blazor",
    ],
    "API & Architecture": [
      "REST APIs",
      "GraphQL",
      "Microservices",
      "gRPC",
      "Distributed Systems",
    ],
    "Cloud & DevOps": [
      "Microsoft Azure",
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "GitHub Actions",
      "Azure DevOps",
    ],
    Databases: ["MS SQL Server", "MySQL", "Redis", "Elasticsearch", "NoSQL"],
    "Tools & Practices": [
      "Git",
      "Linux",
      "OOP",
      "Design Patterns",
      "Agile",
      "Code Reviews",
      "Technical Documentation",
    ],
  };

  const experience = [
    {
      role: "Full-Stack Developer",
      company: "ZONDA",
      location: "Remote, Ontario, Canada",
      period: "Jul 2023 - Present",
      points: [
        "Design and develop scalable SaaS applications using C#, .NET Core, React, Next.js, TypeScript, AWS, and Elasticsearch.",
        "Improved distributed search performance by 30% through Elasticsearch schema optimization and indexing strategies.",
        "Implemented REST APIs and microservices using ASP.NET Core and distributed system architecture.",
        "Led CI/CD automation using GitHub Actions, Docker, and AWS pipelines to improve deployment reliability.",
        "Mentored developers through code reviews, Git workflows, and clean architecture practices.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Petronas",
      location: "Remote, Ontario, Canada",
      period: "Nov 2022 - Jul 2023",
      points: [
        "Developed backend microservices using C#, .NET Core, Azure, and Kubernetes in a distributed cloud environment.",
        "Automated deployments with Azure DevOps pipelines, GitHub Actions, and Docker containers, reducing release cycle by 40%.",
        "Implemented secure coding standards and API security practices across ASP.NET Core services.",
        "Produced system architecture documentation and technical design documents for cloud-native applications.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Exabytes Limited",
      location: "Bangladesh",
      period: "Jul 2021 - Nov 2022",
      points: [
        "Built secure fintech SaaS platforms using C#, .NET Core, JavaScript frameworks, and cloud infrastructure.",
        "Improved frontend performance by 30% using React, Vue.js, and modern JavaScript optimization techniques.",
        "Reduced production security incidents by 40% through stronger architecture, validation layers, and API security.",
      ],
    },
    {
      role: "Software Engineer",
      company: "SIM Solution Limited",
      location: "Bangladesh",
      period: "Oct 2017 - Jun 2021",
      points: [
        "Designed enterprise SaaS platforms and healthcare systems using C#, ASP.NET, SQL Server, and modern web frameworks.",
        "Improved healthcare system accessibility by 30% through scalable architecture and database optimization.",
        "Built document archiving systems using .NET and SQL Server, reducing data retrieval time by 25%.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Primeasia University",
      location: "Bangladesh",
      period: "Feb 2017 - Oct 2017",
      points: [
        "Developed a University Management System using ASP.NET, Web API, and SQL Server.",
        "Improved operational efficiency by 20% through automation and workflow improvements.",
      ],
    },
  ];

  const navItems = ["About", "Skills", "Experience", "GitHub", "Education", "Contact"];
  const githubUsername = "arifuzzaman-tanin";
  const githubRepoName = "personal-profile";
  const githubGraphUrl = `https://ghchart.rshah.org/${githubUsername}`;
  const githubPagesUrl = `https://${githubUsername}.github.io/${githubRepoName}/`;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-20 mb-6 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 backdrop-blur">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Portfolio Resume</p>
              <h1 className="text-lg font-semibold sm:text-xl">Md Arifuzzaman Tanin</h1>
            </div>
            <nav className="flex flex-wrap gap-2 text-sm text-slate-300">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="rounded-full border border-white/10 px-3 py-1.5 transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <main className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-5 shadow-2xl sm:p-8">
            <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
              Full-Stack Developer • AI Integration
            </div>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
              Building practical software with <span className="text-cyan-300">.NET, React, Python</span>, and modern AI workflows.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Full-Stack Developer with 9+ years of experience delivering scalable applications across real estate, fintech, health, e-commerce, and education. Focused on APIs, cloud systems, microservices, and AI-powered product features.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["9+", "Years Experience"],
                ["5+", "Industries Served"],
                ["AI + SaaS", "Current Focus"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-bold text-cyan-300">{value}</div>
                  <div className="mt-1 text-sm text-slate-300">{label}</div>
                </div>
              ))}
            </div>

            <div id="contact" className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={openEmail}
                className="cursor-pointer rounded-2xl bg-cyan-400 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:opacity-90"
              >
                Email Me
              </button>
              <button
                type="button"
                onClick={() => openExternalLink("https://linkedin.com/in/tanin-arifuzzaman")}
                className="cursor-pointer rounded-2xl border border-white/10 px-4 py-3 text-center text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                LinkedIn
              </button>
              <button
                type="button"
                onClick={() => openExternalLink(`https://github.com/${githubUsername}`)}
                className="cursor-pointer rounded-2xl border border-white/10 px-4 py-3 text-center text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                GitHub
              </button>
              <button
                type="button"
                onClick={() => openExternalLink(resumePdfUrl)}
                className="cursor-pointer rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-center text-sm font-semibold text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-400/15"
              >
                Download Resume
              </button>
            </div>
          </section>

          <aside id="about" className="rounded-3xl border border-white/10 bg-slate-900 p-5 shadow-2xl sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">About</p>
            <h3 className="mt-3 text-2xl font-semibold">Professional Summary</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Experienced in C#, .NET, Python, JavaScript, cloud platforms, and modern frontend development. Recently focused on OpenAI, Azure OpenAI, Gemini, RAG pipelines, and automation workflows for real-world products.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-medium text-cyan-300">Location</p>
              <p className="mt-1 text-slate-300">London, ON, Canada</p>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-medium text-cyan-300">Core Strengths</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Full-stack development, API design, microservices, cloud deployment, search optimization, CI/CD, and practical AI enablement.
              </p>
            </div>
          </aside>
        </main>

        <section id="skills" className="mt-6 rounded-3xl border border-white/10 bg-slate-900 p-5 shadow-2xl sm:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Skills</p>
            <h3 className="mt-2 text-2xl font-semibold">Technical Expertise</h3>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h4 className="text-sm font-semibold text-cyan-300">{category}</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="mt-6 rounded-3xl border border-white/10 bg-slate-900 p-5 shadow-2xl sm:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Experience</p>
          <h3 className="mt-2 text-2xl font-semibold">Professional Journey</h3>

          <div className="mt-6 space-y-4">
            {experience.map((job) => (
              <article key={`${job.company}-${job.period}`} className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">
                      {job.role} <span className="text-cyan-300">@ {job.company}</span>
                    </h4>
                    <p className="text-sm text-slate-400">{job.location}</p>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{job.period}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-cyan-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="github" className="mt-6 rounded-3xl border border-white/10 bg-slate-900 p-5 shadow-2xl sm:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">GitHub</p>
          <h3 className="mt-2 text-2xl font-semibold">Contribution Graph</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            A quick look at my GitHub contribution activity.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6">
            <div className="flex w-full overflow-x-auto lg:justify-center">
              <img
                src={githubGraphUrl}
                alt={`${githubUsername} GitHub contribution graph`}
                className="min-w-[760px] max-w-none rounded-xl border border-white/10 bg-slate-950 p-3 lg:max-w-4xl"
                loading="lazy"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => openExternalLink(`https://github.com/${githubUsername}`)}
                className="cursor-pointer rounded-2xl border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                View GitHub Profile
              </button>
            </div>
          </div>
        </section>

        <section id="education" className="mt-6 rounded-3xl border border-white/10 bg-slate-900 p-5 shadow-2xl sm:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Education</p>
          <h3 className="mt-2 text-2xl font-semibold">Academic Background</h3>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
            <h4 className="text-lg font-semibold">Bachelor of Science in Computer Science</h4>
            <p className="mt-2 text-slate-300">American International University - Bangladesh</p>
            <p className="mt-1 text-sm text-slate-400">2013 - 2016</p>
          </div>
        </section>
      </div>
    </div>
  );
}
