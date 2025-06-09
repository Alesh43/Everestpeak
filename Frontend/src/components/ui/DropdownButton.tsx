"use client";
import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "./button";
import Link from "next/link";

export function DropdownButton({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string }[];
}) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="ghost" className="text-white hover:text-gray-300">
          {label} ▼
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-50 min-w-[180px] rounded-md border border-gray-200 bg-white p-1 shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
          sideOffset={5}
        >
          {items.map((item, index) => (
            <DropdownMenu.Item
              key={index}
              className="w-full px-3 py-2 text-sm rounded-md cursor-pointer transition-colors duration-150
                         bg-white text-black hover:bg-blue-600 hover:text-white
                         data-[highlighted]:bg-blue-600 data-[highlighted]:text-white"
              asChild
            >
              <Link href={item.href} className="block w-full">
                {item.label}
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
