import Image from "next/image";
import MyWork from "./home/work";
import Profile from "./home/sello";
import SkillDrawer from "./home/skilldrawer";
import LeftDrawer from "./home/leftDrawer";
import HeroSection from "./home/ScrollNama";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen w-screen">
      <main className="flex flex-col row-start-2 items-center sm:items-start relative w-full">
        <HeroSection/>
        <Profile/>
        <MyWork />       
        <SkillDrawer/> 
        <LeftDrawer/>
        
      </main>
    </div>
  );
}
