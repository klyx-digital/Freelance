import { Button } from "@/components/ui/button";
import { dmSerif } from "@/app/styles/fonts";
import { AuroraText } from "@/components/magicui/aurora-text";
import { MoveDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen  flex flex-col justify-center items-center ">
      <div className="max-w-5xl  text-center space-y-6 ">
        <h1 className={`${dmSerif.className} text-6xl  lg:text-8xl `}>
          Un site web à la hauteur de vos <AuroraText> ambitions</AuroraText>
        </h1>
        <p className=" text-lg sm:text-xl leading-relaxed">
          Je conçois des sites professionnels sur-mesure <br /> rapides,
          élégants et optimisés <br /> pour renforcer l’image de votre
          entreprise et attirer de nouveaux clients.
        </p>
        <Button href="/contact" color="blue">
          Discutons de votre projet
        </Button>
        <svg className="size-6 animate-bounce "></svg>
      </div>
    </section>
  );
}
