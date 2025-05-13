
import type { ReactNode } from "react"

// === styles ===================================================================
const pageContainerClassName = `w-full h-screen bg-white grid gap-2 text-white 
                                font-poppins text-center grid-cols-1 
                                lg:grid-cols-2`;

const contentSectionClassName = `bg-[#9c5f3c] w-full h-full lg:col-start-2 
                                 lg:row-start-1 flex flex-col justify-center 
                                 items-center`;


const imageSectionClassName = ` w-full h-full lg:col-start-1 overflow-hidden 
                                lg:row-start-1`;

// === types ====================================================================
type PageLayoutProps = {
  contentSection: ReactNode
  imageSection: ReactNode
}

// === component ================================================================
export const PageLayout: React.FC<PageLayoutProps> = ({
    contentSection,
    imageSection
}) => (

    <div className={pageContainerClassName}>
        <section className={contentSectionClassName}>
            {contentSection}
        </section>
        <section className={imageSectionClassName}>
            {imageSection}
        </section>
    </div>
);
