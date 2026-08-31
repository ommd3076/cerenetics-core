import { HomeHero } from "@/components/home/HomeHero";
import { HomeSelectedWork } from "@/components/home/HomeSelectedWork";
import { HomeCapabilities } from "@/components/home/HomeCapabilities";
import { HomeIndustries } from "@/components/home/HomeIndustries";
import { HomeFinalContact } from "@/components/home/HomeFinalContact";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HomeHero />
      <HomeSelectedWork />
      <HomeCapabilities />
      <HomeIndustries />
      <HomeFinalContact />
    </div>
  );
}
