import Link from "next/link";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "@/components/motionprimitives/morphing-dialog";
import { PlusIcon } from "lucide-react";

export default function Projet() {
  return (
    <section className="px-4  sm:px-6 md:px-8 max-w-6xl mx-auto o">
      <div>
        <h2 className="text-4xl md:text-6xl font-bold max-w-6xl text-center p-4 mb-12">
          Voici quelques exemples de projets réalisés récemment.
        </h2>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12  ">
        <MorphingDialog
          transition={{
            type: "spring",
            bounce: 0.05,
            duration: 0.25,
          }}
        >
          <MorphingDialogTrigger
            style={{
              borderRadius: "12px",
            }}
            className="flex w-full flex-col overflow-hidden border border-zinc-950/10 bg-white mx-auto hover:outline"
          >
            <MorphingDialogImage
              src="/Booki.webp"
              alt="Site vitrine pour une agence de voyage"
              className="h-48 w-full object-cover"
            />
            <div className="flex grow flex-row items-end justify-between px-3 py-2 mx-auto">
              <div>
                <MorphingDialogTitle className="text-zinc-950 text-center mx-auto">
                  Booki
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700  ">
                  Site vitrine pour une agence de voyage
                </MorphingDialogSubtitle>
              </div>
              <div className="p-1 bg-zinc-200 rounded-md hover:bg-zinc-200 transition ml-2">
                <PlusIcon size={15} />
              </div>
            </div>
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <MorphingDialogContent
              style={{
                borderRadius: "24px",
              }}
              className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
            >
              <MorphingDialogImage
                src="/Booki.webp"
                alt="Site vitrine pour une agence de voyage"
                className="h-full w-full"
              />
              <div className="p-6 space-y-2">
                <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
                  Booki
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400 ">
                  Site vitrine pour une agence de voyage
                </MorphingDialogSubtitle>
                <MorphingDialogDescription
                  disableLayoutAnimation
                  variants={{
                    initial: { opacity: 0, scale: 0.8, y: 100 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.8, y: 100 },
                  }}
                >
                  <p>
                    <span className="font-semibold">Objectif client :</span>
                    Améliorer la visibilité de l’agence grâce à une landing page
                    moderne et responsive.
                  </p>
                  <p>
                    <span className="font-semibold ">Bénéfice</span> Un site
                    vitrine clair, professionnel, et prêt à convertir les
                    visiteurs.
                  </p>
                  <Link
                    href="https://klyx-digital.github.io/Booki/"
                    className="mt-2 text-blue-400"
                    target="_blank"
                  >
                    Lien vers le site
                  </Link>
                </MorphingDialogDescription>
              </div>
              <MorphingDialogClose className="text-zinc-50" />
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </MorphingDialog>

        <MorphingDialog
          transition={{
            type: "spring",
            bounce: 0.05,
            duration: 0.25,
          }}
        >
          <MorphingDialogTrigger
            style={{
              borderRadius: "12px",
            }}
            className="flex w-full  flex-col overflow-hidden border border-zinc-950/10 bg-white mx-auto hover:outline"
          >
            <MorphingDialogImage
              src="/Architect.png"
              alt="Portfolio dynamique pour architecte"
              className="h-48 w-full object-cover"
            />
            <div className="flex grow flex-row items-end justify-between px-3 py-2 mx-auto">
              <div>
                <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50">
                  Sophie Bluel
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                  Portfolio dynamique pour architecte
                </MorphingDialogSubtitle>
              </div>
              <div className="p-1 bg-zinc-200 rounded-md hover:bg-zinc-200 transition ml-2">
                <PlusIcon size={15} />
              </div>
            </div>
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <MorphingDialogContent
              style={{
                borderRadius: "24px",
              }}
              className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
            >
              <MorphingDialogImage
                src="/Architect.png"
                alt="Portfolio dynamique pour architecte"
                className="h-full w-full"
              />
              <div className="p-6 space-y-2">
                <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
                  Sophie Bluel
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                  Portfolio dynamique pour architecte
                </MorphingDialogSubtitle>
                <MorphingDialogDescription
                  disableLayoutAnimation
                  variants={{
                    initial: { opacity: 0, scale: 0.8, y: 100 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.8, y: 100 },
                  }}
                >
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold ">Bénéfice</span> Un
                      portfolio simple à mettre à jour, élégant, et facile à
                      utiliser.
                    </p>
                  </div>
                </MorphingDialogDescription>
              </div>
              <MorphingDialogClose className="text-zinc-50" />
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </MorphingDialog>

        <MorphingDialog
          transition={{
            type: "spring",
            bounce: 0.05,
            duration: 0.25,
          }}
        >
          <MorphingDialogTrigger
            style={{
              borderRadius: "12px",
            }}
            className="flex w-full  flex-col overflow-hidden border border-zinc-950/10 bg-white mx-auto hover:outline"
          >
            <MorphingDialogImage
              src="/Kasa.png"
              alt="Application React pour plateforme de location"
              className="h-48 w-full object-cover"
            />
            <div className="flex grow flex-row items-end justify-between px-3 py-2 mx-auto">
              <div>
                <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50">
                  Kasa
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                  Application React pour plateforme de location
                </MorphingDialogSubtitle>
              </div>
              <div className="p-1 bg-zinc-200 rounded-md hover:bg-zinc-200 transition ml-2">
                <PlusIcon size={15} />
              </div>
            </div>
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <MorphingDialogContent
              style={{
                borderRadius: "24px",
              }}
              className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
            >
              <MorphingDialogImage
                src="/Kasa.png"
                alt="Application React pour plateforme de location"
                className="h-full w-full"
              />
              <div className="p-6 space-y-2">
                <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
                  Kasa
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                  Application React pour plateforme de location
                </MorphingDialogSubtitle>
                <MorphingDialogDescription
                  disableLayoutAnimation
                  variants={{
                    initial: { opacity: 0, scale: 0.8, y: 100 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.8, y: 100 },
                  }}
                >
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">Secteur :</span>Immobilier
                    </p>
                    <p>
                      <span className="font-semibold ">Bénéfice</span> Un site
                      rapide, agréable à naviguer et facilement extensible.
                    </p>
                  </div>
                  <Link
                    href="https://klyx-digital.github.io/Kasa/"
                    className="mt-2 text-blue-400"
                    target="_blank"
                  >
                    Lien vers le site
                  </Link>
                </MorphingDialogDescription>
              </div>
              <MorphingDialogClose className="text-zinc-50" />
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </MorphingDialog>

        <MorphingDialog
          transition={{
            type: "spring",
            bounce: 0.05,
            duration: 0.25,
          }}
        >
          <MorphingDialogTrigger
            style={{
              borderRadius: "12px",
            }}
            className="flex w-full  flex-col overflow-hidden border border-zinc-950/10 bg-white mx-auto hover:outline"
          >
            <MorphingDialogImage
              src="/Monvieuxgrimoire.png"
              alt="API sécurisée pour site de notation de livres"
              className="h-48 w-full object-cover"
            />
            <div className="flex grow flex-row items-end justify-between px-3 py-2 mx-auto">
              <div>
                <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50">
                  Mon Vieux Grimoire
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                  API sécurisée pour site de notation de livres
                </MorphingDialogSubtitle>
              </div>
              <div className="p-1 bg-zinc-200 rounded-md hover:bg-zinc-200 transition ml-2">
                <PlusIcon size={15} />
              </div>
            </div>
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <MorphingDialogContent
              style={{
                borderRadius: "24px",
              }}
              className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
            >
              <MorphingDialogImage
                src="/Monvieuxgrimoire.png"
                alt="API sécurisée pour site de notation de livres"
                className="h-full w-full"
              />
              <div className="p-6 space-y-2">
                <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
                  Mon Vieux Grimoire
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                  API sécurisée pour site de notation de livres
                </MorphingDialogSubtitle>
                <MorphingDialogDescription
                  disableLayoutAnimation
                  variants={{
                    initial: { opacity: 0, scale: 0.8, y: 100 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.8, y: 100 },
                  }}
                >
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">Secteur :</span>Culture /
                      Édition
                    </p>
                    <p>
                      <span className="font-semibold">Objectif client :</span>
                      Créer un système sécurisé pour gérer les livres et leurs
                      notations.
                    </p>
                    <p>
                      <span className="font-semibold ">Bénéfice</span> Une base
                      technique fiable et sécurisée, prête à alimenter une
                      interface utilisateur.
                    </p>
                  </div>
                </MorphingDialogDescription>
              </div>
              <MorphingDialogClose className="text-zinc-50" />
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </MorphingDialog>
      </div>
    </section>
  );
}
