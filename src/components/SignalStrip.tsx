import { Braces, CheckCircle2, GitBranch, Radio } from "lucide-react";

export default function SignalStrip() {
  return (
    <div className="border-y border-white/10 bg-[#0b1015]">
      <div className="mx-auto flex max-w-7xl items-center gap-5 overflow-x-auto px-4 py-2 font-mono text-[9px] text-zinc-500 sm:px-6">
        <span className="flex shrink-0 items-center gap-2 text-emerald-400"><Radio className="size-3" /> workspace.ready</span>
        <span className="flex shrink-0 items-center gap-2"><GitBranch className="size-3" /> master</span>
        <span className="flex shrink-0 items-center gap-2"><Braces className="size-3" /> TypeScript strict</span>
        <span className="flex shrink-0 items-center gap-2"><CheckCircle2 className="size-3" /> build passing</span>
        <span className="ml-auto shrink-0 text-amber-300">portfolio@production</span>
      </div>
    </div>
  );
}
