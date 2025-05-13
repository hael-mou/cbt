
import CBTLogoAnimation from "@/assets/Intro/CBTLogo.mp4";

export const Intro = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[99]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-auto min-w-full min-h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
          >
            <source src={CBTLogoAnimation} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    );
}