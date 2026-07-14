export default function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-secondary transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white">
      {label}
    </span>
  );
}
