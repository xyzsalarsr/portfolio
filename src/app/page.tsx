import Image from "next/image";

import BlurFade from "@/components/BlurFade";
import WorkExperience from "@/components/WorkExperience";
import ProjectCard from "@/components/ProjectCard";
import TechBadge from "@/components/TechBadge";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";
import { TextAnimate } from "@/components/ui/text-animate";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Motion",
  "shadcn/ui",
  "Laravel",
  "PHP",
  "MySQL",
  "REST APIs",
  "Git",
];

export default function Home() {
  const projects = [
    {
      title: "Landix",
      description:
        "A UI component library built on shadcn/ui, Next.js, and Motion. You pay once and it's yours for good, licensed through Gumroad and served from a self-hosted registry.",
      image: "/projects/landix.png",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Motion"],
      href: "https://landix.design",
    },
    {
      title: "Frontendagency",
      description:
        "We build interfaces that hold up. Fast, accessible, and built to scale. Send us a design and we'll turn it into production-ready code.",
      image: "/projects/frontendagency.png",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Motion"],
      href: "https://frontendagency.org/",
    },
    {
      title: "MenuVa",
      description:
        "Turn your paper menu into an interactive digital one in minutes. Update it in real time, drag and drop items around, and let customers pull it up instantly with a custom QR code.",
      image: "/projects/menuva.png",
      tech: [
        "Laravel",
        "PHP",
        "MySQL",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
      href: "https://menuva.shop",
    },
        {
      title: "forgelink",
      description:
       "We build production-ready MVPs in 2 to 4 weeks. Fixed price, solid tech stack, ready for real users.",
      image: "/projects/forgelink.png",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Motion"],
      href: "https://forgelink.co/",
    },
    {
      title: "Pipekala",
      description:
        "Pipekala is part of the Foolentin Holding Group. They supply and distribute industrial, construction, and facility equipment.",
      image: "/projects/pipekala.png",
      tech: ["HTML", "CSS", "JS", "Bootstarp"],
      href: "https://www.pipekala.com/",
    },
  ];
  return (
    <div className="flex flex-col gap-16 md:gap-16">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-4">
          <div className="flex flex-col gap-5 sm:flex-row sm:justify-between sm:gap-2">
            <div className="order-2 flex flex-1 flex-col space-y-1.5 sm:order-1">
              <div className="flex">
                <span className="inline-flex items-center gap-5 text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  <TextAnimate animation="blurInUp" by="character" once>
                    Hi, I&apos;m Salar
                  </TextAnimate>{" "}
                  <Image
                    className="h-12 w-12 "
                    alt="wave"
                    src="/wave.png"
                    width={600}
                    height={600}
                  />
                </span>
              </div>
              <div className="flex">
                <span className="inline-block max-w-150 mt-3 md:text-xl">
                  a full stack developer who builds fast, clean, and
                  well-crafted products
                </span>
              </div>
            </div>
            <div className="order-1 sm:order-2">
              <div>
                <span className="relative flex size-28 shrink-0 overflow-hidden rounded-full border">
                  <Image
                    className="aspect-square h-full w-full"
                    alt="Salar Rismantab"
                    src="/salar.jpg"
                    width={600}
                    height={600}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <div className="flex flex-col gap-8">
        <span className="inline-block w-max rounded-lg bg-white/10 px-4 py-3 font-bold">
          About
        </span>
        <div className="space-y-4">
         <BlurFade delay={0.05}>
            <p className=" text-secondary text-justify">
              I build things across the whole stack,
              Laravel APIs on one side, React interfaces on the other. I like
              shipping fast and I like shipping clean, and I&apos;d rather
              have something live and working today than something perfect
              next month. It&apos;s not done until the code, the UI, and the
              little details all feel right.
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <p className=" text-secondary">
              These days I&apos;m mostly heads down on{" "}
              <span className="font-medium text-white">Landix</span>, a UI
              component library. I handle pretty much everything on both,
              building, designing, and figuring out how to get people to use
              them.
            </p>
          </BlurFade>
        </div>
      </div>

      {/* Work Experience */}
      <div className="flex flex-col gap-2">
        <span className="inline-block w-max rounded-lg bg-white/10 px-4 py-3 font-bold">
          Work Experience
        </span>
        <WorkExperience />
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-8">
        <span className="inline-block w-max rounded-lg bg-white/10 px-4 py-3 font-bold">
          Skills
        </span>
        <BlurFade>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <TechBadge key={skill} label={skill} />
            ))}
          </div>
        </BlurFade>
      </div>

      {/* Latest Projects */}
      <div className="flex flex-col gap-8">
        <h3 className="text-2xl font-bold tracking-tight">
          Check out my latest work
        </h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <BlurFade key={project.title} delay={0.08 * i}>
              <ProjectCard project={project} />
            </BlurFade>
          ))}
        </div>
      </div>

      <p className="text-center text-2xl mt-10">
        <span className="text-zinc-300">Want to connect?</span> Say hello on
        <Link
          href="https://x.com/salarbuilds"
          className=" underline ml-1 font-bold"
        >
          X
        </Link>
      </p>

      <Navigation />
    </div>
  );
}
