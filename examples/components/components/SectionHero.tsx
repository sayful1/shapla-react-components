import React  from "react";
import "./style.scss";
interface Props {
    children: React.ReactNode;
    heading?: string;
}
const SectionHero =({children,heading=""}:Props) => {
    return (
        <section className="section section-hero">
            <h1 className="section-hero__title">
                {heading}
            </h1>
            <div className="subtitle">
                {children}
            </div>
        </section>
    )
}
export default SectionHero
