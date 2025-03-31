import "./ArrowLink.css"
import * as React from "react";

export type ArrowLinkProps = {
    children: React.ReactNode;
    href: string;
}


const ArrowLink: React.FC<ArrowLinkProps> = ({ children, href }) => (
    <a href={href} className={"arrow-link"}>
        { children }
        <span className={"arrow"}></span>
    </a>
)

export default ArrowLink;