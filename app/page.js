import Image from "next/image";
import Slider from "./src/components/Slider";
import AboutSlider from "./src/components/AboutSlider";

export default function Home() {
  return (
    <div>
   <Slider></Slider>

   <AboutSlider></AboutSlider>
    </div>
  );
}
