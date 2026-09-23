import Image from "next/image";
import { ArrowDown } from "lucide-react";

const buttonClass =
  "mt-7 inline-flex items-center gap-2 rounded-md bg-[#ccff00] px-5 py-3 text-xs font-bold uppercase tracking-wide text-black transition hover:brightness-110";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
      <div className="grid items-center gap-8 rounded-2xl border border-white/5 bg-[#14151a] px-6 py-10 sm:px-10 md:grid-cols-2 md:py-14">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#ccff00]">
            Workout Library
          </p>

          <h1 className="mt-4 font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase leading-[1.05] sm:text-5xl lg:text-6xl">
            Train with intent. Log every set.
          </h1>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-400 sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <a href="#library" className={buttonClass}>
            Browse Workouts
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/hero.png"
            alt="Workout machine illustration"
            width={520}
            height={520}
            priority
            className="h-auto w-full max-w-[280px] object-contain sm:max-w-[360px] md:max-w-[420px]"
          />
        </div>
      </div>
    </section>
  );
}