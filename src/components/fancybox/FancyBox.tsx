"use client";

import { useRef, useEffect, PropsWithChildren } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import type { FancyboxOptions } from "@fancyapps/ui";

interface Props {
  delegate?: string;
  options?: Partial<FancyboxOptions>;
}

export default function Fancybox({
  delegate = "[data-fancybox]",
  options = {},
  children,
}: PropsWithChildren<Props>) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  }, [delegate, options]);

  return <div ref={containerRef}>{children}</div>;
}
