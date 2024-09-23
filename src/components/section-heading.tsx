import React, { ReactNode } from "react"



type SectionheaderProps={
    children: ReactNode;
}

export default function SectionHeading({ children }: SectionheaderProps){
    return(
        <h2 className="text-3xl font-medium capitalize mb-8 text-center">
            {children}
        </h2>
    )
}