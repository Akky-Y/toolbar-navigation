"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function ToolbarButton({
  href,
  icon,
  title,
}: {
  href: string;
  icon: ReactNode;
  title: string;
}) {
  const pathname = usePathname();

  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className={cn(
        "hover:bg-accent/30 rounded-full",
        href === pathname && "ring-1 ring-primary",
      )}
    >
      <Link href={href}>
        <Slot className="size-5">{icon}</Slot>
        <span className="sr-only">{title}</span>
      </Link>
    </Button>
  );
}
