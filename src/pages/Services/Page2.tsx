
import image2 from "@/assets/Imgs/image2.jpg"
import CBTLogo from "@/assets/logo/CBTLogo"
import { PageLayout } from "./PageLayout"
import { FadeInText } from "./utils"
import { motion } from "framer-motion"

export const Page2 = () => {
  const contentSection = (
    <>
        <CBTLogo className="lg:w-[15vw] lg:h-[15vw] lg:mb-[3vw] w-40 h-40 mt-10 mb-3" />
        <FadeInText
            delay={0.2}
            className="font-bold lg:text-[3.7vw] text-[38px]"
        >
            SALLES DE RÉUNIONS
        </FadeInText>

        <FadeInText
            delay={0.4}
            className="text-[#ffd1b7] lg:text-[3.11vw] lg:max-w-[40vw] lg:leading-[3.5vw] leading-[30px] lg:-mt-[0.4vw] text-[28px] -mt-1"
        >
          Disponibles à la location
          au Business Center
        </FadeInText>
  
        <FadeInText
            delay={0.8}
            className="lg:text-[1.36vw] text-[17px] lg:max-w-[37vw] max-w-[610px] font-medium text-justify
                     text-[#ffd1b7] lg:leading-[1.8vw] leading-[20px] lg:mt-[2vw] mt-7 "
            style={{ textAlignLast: "center" }}
        >
            Le Business Center de Casa Business Towers vous offre un cadre prestigieux pour toutes vos réunions et
            évènements, avec 5 salles de réunion dotées d'une capacité de 14 à 20 personnes.
        </FadeInText>

        <FadeInText delay={1.0} className="lg:text-[1.4vw] text-[18px] font-bold lg:mt-[2vw] mt-7">
            Découvrez notre Business Center :
        </FadeInText>
  
        <FadeInText delay={1.2} className="lg:text-[1.4vw] text-[18px] font-bold lg:-mt-[0.3vw] -mt-2">
          l'espace idéal pour vos événements professionnels
        </FadeInText>
        <FadeInText delay={1.4} className="lg:text-[1.15vw] text-[14.8px] text-[#ffd1b7] lg:-mt-[0.2vw] mb-10">
            Pour plus d'informations, veuillez contacter l'accueil de votre tour
        </FadeInText>
    </>
  )

  const imageSection = (
    <motion.img 
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, }}
        src={image2 || "/placeholder.svg"} alt="Business Center" className="w-full h-full object-cover"
    />
  )

  return <PageLayout contentSection={contentSection} imageSection={imageSection} />
}
