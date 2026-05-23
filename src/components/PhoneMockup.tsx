"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Wifi, Signal, Battery, Bell, Terminal, Navigation, ShieldCheck, Sparkles, Activity } from "lucide-react";

interface PhoneMockupProps {
  src?: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  children?: React.ReactNode;
}

// Sleek Simulated App UI representing his actual high-fidelity React Native projects!
function FallbackAppUI() {
  const [eta, setEta] = useState(12);
  const [logs, setLogs] = useState<string[]>([
    "GET /api/v1/glv/route - 200 OK",
    "GET /api/v1/ntss/billing - 200 OK"
  ]);

  // Small micro-animation simulating real API polling/logging in transit
  useEffect(() => {
    const interval = setInterval(() => {
      setEta((prev) => (prev > 1 ? prev - 1 : 12));
      
      const endpoints = [
        "GET /api/v1/glv/tracking - 200 OK",
        "GET /api/v1/ntss/rooms - 200 OK",
        "POST /api/v1/analytics - 201 Created",
        "PUT /api/v1/user/location - 200 OK"
      ];
      const randomEndpoint = endpoints[Math.floor(Math.random() * endpoints.length)];
      setLogs((prev) => [randomEndpoint, prev[0]]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-[#07060f] text-white flex flex-col justify-between p-3.5 relative overflow-hidden font-sans select-none">
      {/* Dynamic ambient color glows */}
      <div className="absolute w-28 h-28 rounded-full bg-indigo-500/10 blur-2xl -top-6 -right-6 pointer-events-none" />
      <div className="absolute w-32 h-32 rounded-full bg-pink-500/10 blur-2xl -bottom-6 -left-6 pointer-events-none" />

      {/* Top Status Bar mock - Clean, rounded layout */}
      <div className="flex justify-between items-center text-[8px] text-zinc-400 font-semibold px-2 pt-2.5 z-10">
        <span>09:41 AM</span>
        <div className="flex items-center gap-1">
          <Signal className="w-2.5 h-2.5 text-zinc-400" />
          <Wifi className="w-3 h-3 text-zinc-400" />
          <Battery className="w-4 h-4 text-zinc-400" />
        </div>
      </div>

      {/* App Header */}
      <div className="flex justify-between items-center mt-2 px-1.5 z-10">
        <div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-[7.5px] text-zinc-400 uppercase tracking-widest font-bold font-mono">React Native Client</p>
          </div>
          <h4 className="text-xs font-black tracking-tight text-white flex items-center gap-1.5 mt-0.5">
            ydanh-dev <Sparkles className="w-3 h-3 text-indigo-400 animate-pulse" />
          </h4>
        </div>
        <div className="relative w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
          <Bell className="w-3 h-3 text-indigo-400" />
          <span className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-pink-500" />
        </div>
      </div>

      {/* App Main Body - Simulated Live Dashboard */}
      <div className="flex-1 my-2 flex flex-col gap-2 overflow-hidden justify-center px-0.5">
        
        {/* Project Card 1: GreenLeaf Vietnam (GLV) */}
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-10 h-10 bg-indigo-500/10 blur-md rounded-full" />
          
          <div className="flex justify-between items-center mb-1">
            <div className="flex items-center gap-1">
              <span className="text-[7.5px] font-extrabold px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400 font-mono">GLV</span>
              <h5 className="text-[9.5px] font-bold text-white">GreenLeaf Vietnam</h5>
            </div>
            <span className="text-[7px] px-1.5 py-0.2 rounded bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-mono font-extrabold animate-pulse">
              IN TRANSIT
            </span>
          </div>

          <p className="text-[7.5px] text-zinc-400 line-clamp-1">Route: HCMC Terminal 1 → Binh Duong</p>
          
          {/* Progress bar representing actual route status */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-indigo-500 rounded-full animate-pulse" />
            </div>
            <span className="text-[7px] font-bold font-mono text-zinc-400">ETA: {eta}m</span>
          </div>
        </div>

        {/* Project Card 2: Nhà Trọ Sạch Sẽ (NTSS) */}
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-10 h-10 bg-pink-500/10 blur-md rounded-full" />
          
          <div className="flex justify-between items-center mb-1">
            <div className="flex items-center gap-1">
              <span className="text-[7.5px] font-extrabold px-1.5 py-0.5 rounded bg-pink-500/20 text-pink-400 font-mono">NTSS</span>
              <h5 className="text-[9.5px] font-bold text-white">Nhà Trọ Sạch Sẽ</h5>
            </div>
            <span className="text-[7px] px-1.5 py-0.2 rounded bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-mono font-extrabold">
              PAID
            </span>
          </div>

          <p className="text-[7.5px] text-zinc-400 line-clamp-1">Serviced Room #302 • Power: 145 kWh</p>
          
          <div className="flex items-center gap-1.5 mt-2 text-[7px] text-zinc-400 font-mono">
            <ShieldCheck className="w-3 h-3 text-emerald-400 animate-bounce" />
            <span>React Query Cached • Zustand State</span>
          </div>
        </div>

        {/* Console: Real Developer Network Logs */}
        <div className="p-2.5 rounded-xl bg-black/40 border border-zinc-800/80 font-mono text-[6.5px] relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-1 mb-1.5">
            <div className="flex items-center gap-1">
              <Terminal className="w-2.5 h-2.5 text-indigo-400" />
              <span className="text-zinc-500 uppercase font-black tracking-widest text-[6px]">Axios HTTP Logger</span>
            </div>
            <Activity className="w-2 h-2 text-indigo-500 animate-pulse" />
          </div>

          <div className="space-y-1 text-zinc-400">
            {logs.map((log, index) => (
              <div key={index} className="flex justify-between items-center overflow-hidden">
                <span className="text-zinc-400 tracking-tight truncate">{log.split(" - ")[0]}</span>
                <span className="text-emerald-400 font-bold ml-1">{log.split(" - ")[1]}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Simulated React Native Tab Bar - Floating Premium Tab Navigation */}
      <div className="pt-2.5 border-t border-white/5 flex items-center justify-around text-zinc-500 text-[8px] z-10 px-1 mb-1">
        <div className="flex flex-col items-center gap-0.5 text-indigo-400 cursor-pointer font-bold">
          <Navigation className="w-3.5 h-3.5" />
          <span>GLV Map</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 hover:text-white transition-colors cursor-pointer font-semibold">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span>Rooms</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 hover:text-white transition-colors cursor-pointer font-semibold">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
}

export default function PhoneMockup({
  src,
  alt = "App screenshot",
  className,
  width = 280,
  height = 560,
  children,
}: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative mx-auto perspective-1000",
        className
      )}
      style={{ width, height: height + 60 }}
    >
      {/* Phone frame */}
      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-zinc-800 to-zinc-950 shadow-2xl" />
      {/* Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-zinc-900 rounded-full z-20" />
      {/* Screen area */}
      <div
        className="absolute inset-[8px] rounded-[2.5rem] overflow-hidden bg-zinc-100 dark:bg-[#0a0a0f]"
      >
        {children ? (
          children
        ) : src ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 400px"
          />
        ) : (
          <FallbackAppUI />
        )}
      </div>
      {/* Side buttons */}
      <div className="absolute left-[-3px] top-28 w-1 h-10 bg-zinc-700 rounded-l-sm" />
      <div className="absolute left-[-3px] top-44 w-1 h-16 bg-zinc-700 rounded-l-sm" />
      <div className="absolute right-[-3px] top-36 w-1 h-12 bg-zinc-700 rounded-r-sm" />
    </div>
  );
}
