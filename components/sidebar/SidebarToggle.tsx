"use client";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/stores/sidebar-store";
import React from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import Image from "next/image";

const SidebarToggle = () => {
  const { isMinimal, handleChangeSidebar, handleOpenOrClose } =
    useSidebarStore();

  return (
    <div>
      <div
        className={cn("cursor-pointer hidden", "lg:block")}
        onClick={handleChangeSidebar}
        is-navbar-minimal={isMinimal ? "true" : undefined}
      >
        <Image src={`/icons/menu-${isMinimal ? "open" : "close"}.svg`} width={24} height={24} alt="navbar icon" />
        <Button variant="ghost" size="icon" className="lg:hidden">
          <X />
        </Button>
      </div>
    </div>
  );
};

export default SidebarToggle;
