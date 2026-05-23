"use client";

import CustomCursor from "@/components/CustomCursor";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
}
