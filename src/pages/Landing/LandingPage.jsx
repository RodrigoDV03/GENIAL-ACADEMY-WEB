import "./LandingPage.css";
import {Footer} from "../../components/Footer";
import {PresentationSection} from "./components/Presentation";
import {FunctionSection} from "./components/Functions";
import {UniversitiesSection} from "./components/Universities";
import {TutorialSection} from "./components/Tutorial";
import {MemberShipSection} from "./components/MemberShip";
import {FaqSection} from "./components/Faq";
import { NavBarL } from "../../components/NavBarLanding/NavBarL";

export const LandingPage = () => {

    return (
        <div>
            <NavBarL/>
            <div className="content">
                <PresentationSection></PresentationSection>
                <FunctionSection></FunctionSection>
                <UniversitiesSection></UniversitiesSection>
                <TutorialSection></TutorialSection>
                <MemberShipSection></MemberShipSection>
                <FaqSection></FaqSection>
                <Footer/>
            </div>
        </div>
    )
};