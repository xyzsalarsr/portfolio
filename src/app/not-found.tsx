import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 | Salar Rismantab",
  description: "Uh oh! This page does not exist",
};

const Custom404 = () => (
  <div className="flex flex-col gap-2">
    <h1 className="text-3xl font-bold tracking-tight text-primary">404</h1>
    <p className="text-secondary max-w-sm">
      Uh oh! This page does not exists, maybe you clicked an old link or
      misspelled. Please try again…
    </p>
    <div className="h-2" />
    <Link href="/">
      Return home
    </Link>
  </div>
);

export default Custom404;
