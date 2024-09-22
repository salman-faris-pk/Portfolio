import ActiveSectionContextProvider from "./active-section";
import React from "react"



type ProvidersProps={
    children: React.ReactNode
}

export default function Providers({children}: ProvidersProps){
    return(
        <ActiveSectionContextProvider>
            {children}
        </ActiveSectionContextProvider>
    )
}