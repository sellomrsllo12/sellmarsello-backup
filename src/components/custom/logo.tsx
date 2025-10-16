import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <h1 className={cn("!font-bold !tracking-wider text-3xl", className)}>
      AgRimbun
    </h1>
  );
}
