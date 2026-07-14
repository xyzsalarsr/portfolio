import Image from "next/image";
import BlurFade from "./BlurFade";
import TechBadge from "./TechBadge";

export interface ExperienceItem {
  logo: string;
  title: string;
  employmentType?: string;
  startDate: string;
  endDate: string;
  location?: string;
  locationType?: string;
  description?: string[];
  skills?: string[];
}

export const experience: ExperienceItem[] = [
  {
    logo: "/logos/frontend-agency.svg",
    title: "Front-end Agency",
    employmentType: "Senior Software Engineer / Tech Lead",
    startDate: "2026",
    endDate: "Present",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
  },
  {
    logo: "/logos/menuva.svg",
    title: "MenuVa",
    employmentType: "Full-stack Developer / Founder",
    startDate: "2026",
    endDate: "Present",
    skills: ["Laravel", "MySQL", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    logo: "/logos/landix.svg",
    title: "Landix",
    employmentType: "Founder",
    startDate: "2023",
    endDate: "Present",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Motion"],
  },
  {
    logo: "/logos/zagreus.jpg",
    title: "Zagreus",
    employmentType: "Front-developer",
    startDate: "2021",
    endDate: "2023",
    skills: ["HTML", "CSS", "JS", "jQuery", "Bootstrap", "Rest API"],
  },
  {
    logo: "/logos/ponisha.svg",
    title: "Ponisha",
    employmentType: "Freelancer",
    startDate: "2018",
    endDate: "2021",
    skills: ["HTML", "CSS", "JS", "jQuery", "Bootstrap"],
  },
];

function Dates({ startDate, endDate }: { startDate: string; endDate: string }) {
  return (
    <p className="text-sm text-secondary">
      {startDate} – {endDate}
    </p>
  );
}

export default function WorkExperience({
  items = experience,
}: {
  items?: ExperienceItem[];
}) {
  return (
    <div className="divide-y divide-white/10">
      {items.map((item, i) => (
        <BlurFade key={item.title} delay={0.05 * i}>
          <div className="flex gap-4 py-6">
            <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <Image
                src={item.logo}
                alt={`${item.title} logo`}
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </span>

            <div className="flex-1 space-y-1">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-lg leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-sm text-secondary mt-1">
                    {item.employmentType ? ` ${item.employmentType}` : ""}
                  </p>
                </div>
                <Dates startDate={item.startDate} endDate={item.endDate} />
              </div>

              {item.skills && item.skills.length > 0 && (
                <div className="mt-3 flex flex-wrap jus gap-2">
                  {item.skills.map((skill) => (
                    <TechBadge key={skill} label={skill} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </BlurFade>
      ))}
    </div>
  );
}
