"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HoverDropdownProps = {
  label: string;
  items: { label: string; href: string }[];
};

const HoverDropdown = ({ label, items }: HoverDropdownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="text-white hover:text-gray-400 text-lg font-normal"
          >
            {label} ▼
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="bottom"
          align="start"
          className={cn(
            "mt-2 w-48 bg-black text-white shadow-xl border border-purple-400 dark:border-neutral-800 rounded-xl"
          )}
        >
          {items.map((item, index) => (
            <DropdownMenuItem
              key={index}
              asChild
              className={cn(
                "w-full px-3 py-2 rounded-md cursor-pointer transition-colors",
                // visible highlight using data-[highlighted] for Radix support
                "hover:bg-purple-500 hover:text-white",
                "focus:bg-purple-500 focus:text-white",
                "data-[highlighted]:bg-purple-500 data-[highlighted]:text-white"
              )}
            >
              <Link href={item.href} className="block w-full">
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default HoverDropdown;
