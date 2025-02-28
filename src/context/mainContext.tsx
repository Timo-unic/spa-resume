import React, { createContext, createRef, useRef } from 'react'

interface IMenuContext {
    refs: any
    homeRef: React.RefObject<HTMLDivElement>
    aboutRef: React.RefObject<HTMLDivElement>
    workRef: React.RefObject<HTMLDivElement>
    experienceRef: React.RefObject<HTMLDivElement>
    skillRef: React.RefObject<HTMLDivElement>
    clientsRef: React.RefObject<HTMLDivElement>
    contactRef: React.RefObject<HTMLDivElement>
    handleScrollToSection: (any: any) => void
}

export const MainContext = createContext<IMenuContext>({
    refs: [],
    homeRef: createRef<HTMLDivElement>(),
    aboutRef: createRef<HTMLDivElement>(),
    workRef: createRef<HTMLDivElement>(),
    experienceRef: createRef<HTMLDivElement>(),
    skillRef: createRef<HTMLDivElement>(),
    clientsRef: createRef<HTMLDivElement>(),
    contactRef: createRef<HTMLDivElement>(),
    handleScrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => {},
})

export const MainState = ({ children }: { children: React.ReactNode }) => {
    const homeRef = useRef<HTMLDivElement>(null)
    const aboutRef = useRef<HTMLDivElement>(null)
    const workRef = useRef<HTMLDivElement>(null)
    const experienceRef = useRef<HTMLDivElement>(null)
    const skillRef = useRef<HTMLDivElement>(null)
    const clientsRef = useRef<HTMLDivElement>(null)
    const contactRef = useRef<HTMLDivElement>(null)

    const refs = [
        homeRef,
        aboutRef,
        workRef,
        experienceRef,
        skillRef,
        clientsRef,
        contactRef,
    ]

    const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const handleScrollToSection = (
        sectionRef: React.RefObject<HTMLDivElement>
    ) => scrollToSection(sectionRef)

    return (
        <MainContext.Provider
            value={{
                refs,
                homeRef,
                aboutRef,
                workRef,
                experienceRef,
                skillRef,
                clientsRef,
                contactRef,
                handleScrollToSection,
            }}
        >
            {children}
        </MainContext.Provider>
    )
}

export {}
