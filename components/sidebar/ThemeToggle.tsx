import { THEME_MODES } from "@/constants";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/stores/sidebar-store";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  const { isMinimal } = useSidebarStore();

  return (
    <div
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className={cn(
        "p-2 rounded-lg flex items-center bg-gray-900 w-full cursor-pointer",
        isMinimal && "w-14 h-14 justify-center"
      )}
    >
      {isMinimal ? (
        <span>{theme === "dark" ? <Sun /> : <Moon />}</span>
      ) : (
        THEME_MODES.map(({ label, value }) => (
          <span
            key={value}
            className={cn(
              "flex items-center p-2 rounded-lg cursor-pointer px-7 w-full justify-center text-muted-foreground font-medium",
              theme === value && "bg-gray-950 text-white"
            )}
          >
            {value === "dark" ? <Moon /> : <Sun />}
            <span className="ml-2">{label}</span>
          </span>
        ))
      )}
    </div>
  );
};

export default ThemeToggle;
