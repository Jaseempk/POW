import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <Features />
    </div>
  );
}