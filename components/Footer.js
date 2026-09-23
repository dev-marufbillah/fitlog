import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell className="h-5 w-5 text-[#ccff00]" />
          <span className="font-[family-name:var(--font-oswald)] text-base font-bold tracking-wide">
            FITLOG
          </span>
        </Link>

        <p className="text-center text-xs text-gray-500 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}