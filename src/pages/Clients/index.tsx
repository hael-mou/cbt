import CBTLogo from "@/assets/logo/CBTLogo";
import logo1 from "@/assets/Clients/Fichier 50.svg";
import logo2 from "@/assets/Clients/Fichier 70.svg";
import logo3 from "@/assets/Clients/Fichier 60.svg";
import logo4 from "@/assets/Clients/Fichier 150.svg";
import logo5 from "@/assets/Clients/Fichier 120.svg";
import logo6 from "@/assets/Clients/Fichier 100.svg";
import logo7 from "@/assets/Clients/Fichier 140.svg";
import logo8 from "@/assets/Clients/Fichier 90.svg";
import logo9 from "@/assets/Clients/Fichier 40.jpg";
import logo10 from "@/assets/Clients/Fichier 110.svg";
import logo11 from "@/assets/Clients/Fichier 80.svg";
import logo12 from "@/assets/Clients/Fichier 130.svg";
import logo13 from "@/assets/Clients/Fichier 160.svg";
import logo14 from "@/assets/Clients/Fichier 20.svg";
import { motion } from "framer-motion";

// data =========================================================================
const clents = [
    { src: logo1, w: "270px"},
    { src: logo2, w: "270px"},
    { src: logo3, w: "240px"},
    { src: logo4, w: "270px"},
    { src: logo5, w: "190px"},
    { src: logo6, w: "270px"},
    { src: logo7, w: "170px"},
    { src: logo8, w: "240px"},
    { src: logo9, w: "240px"},
    { src: logo10, w: "200px"},
    { src: logo11, w: "150px"},
    { src: logo12, w: "150px"},
    { src: logo13, w: "150px"},
    { src: logo14, w: "150px"},
]

// === Component ================================================================
const ClientPage = () => {
    return (
        <section className="w-full min-h-screen flex flex-col items-center overflow-auto bg-white text-[#9c5f3c] font-poppins text-center">
            {/* Header */}
            <header className="bg-[#9c5f3c] w-full h-[170px] flex justify-between items-center px-20 sticky top-0 z-10">
                <CBTLogo className="w-30 h-30" />
                <div className="flex flex-col items-end mt-3">
                    <h2 className="text-[#ffd1b7] font-medium text-[38px]">TOUR MAINSTREET</h2>
                    <h1 className="text-white font-bold text-[36px] -mt-4">CASA BUSINESS TOWERS</h1>
                </div>
            </header>

            {/* Grid Layout with animation */}
            <div className="w-[90%] h-[calc(100vh-170px)] px-10 py-20 grid gap-x-30 gap-y-24 justify-items-center"
                 style={{ gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))" }}>
                {clents.map((client, index) => (
                    <motion.div
                        key={index}
                        style={{ width: client.w }}
                        className="flex items-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2, delay: index * 0.05 }}
                    >
                        <img
                            className="object-contain w-full"
                            src={client.src}
                            alt={`Client ${index}`}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default ClientPage;
