const signals = [
  "React Native",
  "Flutter",
  "Mobile Architecture",
  "Design Systems",
  "API Integration",
  "Performance",
  "Product Thinking",
];

export default function SignalStrip() {
  return (
    <div className="signal-strip relative overflow-hidden border-y border-white/6 bg-[#08080e] py-3">
      <div className="signal-marquee flex w-max items-center">
        {[...signals, ...signals].map((signal, index) => (
          <div key={`${signal}-${index}`} className="flex items-center gap-5 px-5 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
            <span className="size-1 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,.9)]" />
            {signal}
          </div>
        ))}
      </div>
    </div>
  );
}
