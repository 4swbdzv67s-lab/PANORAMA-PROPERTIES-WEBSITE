const mark = (
  <svg viewBox="0 0 100 70" fill="none" stroke="currentColor" strokeLinecap="round">
    <path d="M12 40 L40 14 M22 40 L44 20 M32 40 L48 26" strokeWidth="3" />
    <path d="M40 14 L68 40" strokeWidth="3" />
    <path d="M68 12 L68 40 L80 40 L80 8 L68 8" strokeWidth="3" strokeLinejoin="round" />
    <path d="M50 40 L50 52" strokeWidth="3" />
  </svg>
);

export function Logo({ size = "sm" }: { size?: "sm" | "lg" }) {
  if (size === "lg") {
    return (
      <div className="flex flex-col items-center text-[#d92b25]">
        <div className="h-24 w-32">{mark}</div>
        <div className="mt-4 text-4xl font-light tracking-[0.35em] text-white md:text-5xl">
          PANORAMA
        </div>
        <div className="mt-2 flex items-center gap-3 text-sm font-medium tracking-[0.5em]">
          <span className="h-px w-8 bg-[#d92b25]/60" />
          PROPERTIES
          <span className="h-px w-8 bg-[#d92b25]/60" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 text-[#d92b25]">
      <div className="h-9 w-12">{mark}</div>
      <div className="flex flex-col leading-none">
        <span className="text-lg font-light tracking-[0.25em] text-white">
          PANORAMA
        </span>
        <span className="mt-1 text-[10px] font-medium tracking-[0.4em] text-[#d92b25]">
          PROPERTIES
        </span>
      </div>
    </div>
  );
}
