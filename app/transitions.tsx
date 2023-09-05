"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type PropsWithChildren } from "react";

declare global {
  interface Document {
    /**
     * Temporary type for view-transitions because there is still no official type for it.
     */
    startViewTransition?(updateDOM?: () => Promise<void>): void;
  }
}

export default function Transitions({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const firstTimeRun = useRef(true);

  useEffect(() => {
    async function viewTransitions() {
      if (!document.startViewTransition) return;

      document.startViewTransition();
    }

    if (firstTimeRun.current) {
      firstTimeRun.current = false;
    } else {
      viewTransitions();
    }
  }, [pathname]);

  return children;
}
