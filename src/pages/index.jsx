import { AboutRAF26 } from "../components/section/About"
import { Accommodations } from "../components/section/Accommodations"
import { ContactRAF26 } from "../components/section/ContactRAF26"
import HeroRAF26 from "../components/section/Hero"
import { ModalitesPayementsRAF } from "../components/section/ModalitesPaiements"
import { ObjectivesRAF26 } from "../components/section/Objectives"
import { PricingRAF26 } from "../components/section/PricingRAF26"
import { MissionProgram } from "../components/section/ProgramRAF26"
import RefundPolicy from "../components/section/RefundPolicy"
import { AfterRAF } from "../components/section/missionRaf2"

export const Home = () => {
    return (
        <>
            <HeroRAF26 />
            <AboutRAF26 />
            <ObjectivesRAF26 />
            <AfterRAF />
            <MissionProgram />
            <PricingRAF26 />
            <Accommodations />
            <ModalitesPayementsRAF />
            <RefundPolicy />
            <ContactRAF26 />
        </>
    )
}