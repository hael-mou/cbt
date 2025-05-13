import image1 from "@/assets/Imgs/image1.jpg";
import CBTLogo from "@/assets/logo/CBTLogo";
import { PageLayout } from "./PageLayout"
import { FadeInText } from "./utils"
import { motion } from "framer-motion";

export const Page1 = () => {
  const contentSection = (
    <>
      <CBTLogo className="lg:w-[15vw] lg:h-[15vw] lg:mb-[3vw] w-40 h-40 mt-10 mb-3" />
  
      <FadeInText delay={0.2} className="font-bold lg:text-[3vw] text-[38px]">
        OUVERTURE DE FIT BY CBT
      </FadeInText>
  
      <FadeInText delay={0.4} className="text-[#ffd1b7] lg:text-[2.9vw] lg:-mt-[0.7vw] text-[28px] -mt-1">
        LA SALLE DE SPORT
      </FadeInText>
  
      <FadeInText delay={0.6} className="text-[#ffd1b7] lg:text-[2.9vw] lg:-mt-[1.2vw] text-[28px] -mt-2">
        DE CASA BUSINESS TOWERS
      </FadeInText>
  
      <FadeInText
        delay={0.8}
        className="lg:text-[2.6vw] text-[26px] lg:max-w-[40vw] font-medium leading-[3vw] lg:mt-[2vw] mt-6"
      >
        Fit by CBT est désormais ouverte !
      </FadeInText>
  
      <FadeInText delay={1.0} className="lg:text-[1.35vw] text-[16.8px] text-[#ffd1b7] lg:mt-[1.2vw] mt-1">
        Votre nouveau spot fitness est prêt à vous accueillir.
      </FadeInText>
  
      <FadeInText delay={1.2} className="lg:text-[1.35vw] text-[19px] font-bold lg:mt-[2vw] mt-5">
        Horaires : Lundi - Vendredi | 7h - 21h
      </FadeInText>
  
      <FadeInText
        delay={1.4}
        className="lg:text-[1vw] text-[13.5px] lg:max-w-[32vw] text-[#ffd1b7] font-light leading-[1.8vw] lg:mt-[1vw] mt-2 mb-10"
      >
        Pour plus d'informations, rendez-vous à l'accueil de votre salle de sport.
      </FadeInText>
    </>
  );
  

  const imageSection = (
    <motion.img 
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, }}
        src={image1 || "/placeholder.svg"} alt="Salle de sport" className="w-full h-full object-cover" 
    />
  )

  return <PageLayout contentSection={contentSection} imageSection={imageSection} />
}
