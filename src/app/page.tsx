import Image from "next/image";
import AnimatedWave from '../../public/svgs/waveFront.svg'
import NavBar from "@/components/NavBar";
import Body from "@/components/Body";

export default function Home() {
  return (
    <div className="w-full max-w-[1600px] mx-auto h-[8696px] bg-[#F5F9FF]">
      
      <NavBar/>
      <Body/>

      
    </div>
  );
}
