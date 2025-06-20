"use client";
import { useState } from "react";
import { ScratchToReveal } from "@/components/magicui/scratch-to-reveal";
import { Button } from "@/components/ui/button";

export function JeuxGratter() {
  const [card, setCard] = useState(false);
  const [audit, setAudit] = useState(false);
  const [analyse, setAnalyse] = useState(false);
  const [perdu, setPerdu] = useState(false);

  return (
    <section className="bg-[#020617] text-white px-4 py-12 md:py-24">
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-10">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Un petit coup de pouce pour votre succès en ligne à Brest !{" "}
        </h2>
        <p className="max-w-3xl  text-lg leading-relaxed">
          Pour vous remercier de votre visite, tentez votre chance ! Grattez une
          carte ci-dessous et découvrez immédiatement une ressource ou un
          service offert pour améliorer votre présence digitale. C'est gratuit,
          sans engagement, juste un cadeau de bienvenue !
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 py-8">
        <div className="flex flex-col items-center gap-4">
          {!card || audit ? (
            <ScratchToReveal
              width={250}
              height={250}
              minScratchPercentage={70}
              className="w-[85vw] max-w-[250px] flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
              gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
              onComplete={() => {
                setAudit(true);
                setCard(true);
              }}
            >
              <p className="px-4 text-black text-center text-sm leading-relaxed">
                Vous avez gagné un audit de performance gratuit ! Recevez une
                analyse personnalisée de la vitesse et de l’optimisation de
                votre site web.
              </p>
            </ScratchToReveal>
          ) : null}

          {audit && (
            <Button
              href="/contact"
              color="blue"
              className="text-sm md:text-base w-fit"
            >
              Je réclame mon audit
            </Button>
          )}
        </div>

        <div className="flex flex-col items-center gap-4">
          {!card || analyse ? (
            <ScratchToReveal
              width={250}
              height={250}
              minScratchPercentage={70}
              className="w-[85vw] max-w-[250px] flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
              gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
              onComplete={() => {
                setAnalyse(true);
                setCard(true);
              }}
            >
              <p className="px-4 text-black text-center text-sm leading-relaxed">
                Vous avez gagné une mini-analyse UX ! Je vous fais un retour en
                3 points sur votre site.
              </p>
            </ScratchToReveal>
          ) : null}

          {analyse && (
            <Button
              href="/contact"
              color="blue"
              className="text-sm md:text-base w-fit"
            >
              Je demande mon analyse UX
            </Button>
          )}
        </div>

        <div className="flex flex-col items-center gap-4">
          {!card || perdu ? (
            <ScratchToReveal
              width={250}
              height={250}
              minScratchPercentage={70}
              className="w-[85vw] max-w-[250px] flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
              gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
              onComplete={() => {
                setPerdu(true);
                setCard(true);
              }}
            >
              <p className="px-4 text-black text-center text-sm leading-relaxed">
                ❌ Pas de lot cette fois
              </p>
            </ScratchToReveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
