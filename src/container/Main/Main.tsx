import { Box } from '@mui/material'
import { MainContext } from 'context/mainContext'
import About from 'pages/About/About'
import Contact from 'pages/Contact/Contact'
import Experience from 'pages/Experience/Experience'
import Home from 'pages/Home/Home'
import ListClients from 'pages/ListClients/ListClients'
// import Skill from 'pages/Skill/Skill'
import WorkList from 'pages/Work/WorkList'
import { lazy, Suspense, useContext } from 'react'
import dataPortfolioItemsArray from 'utils/dataPortfolioItemsArray'

const LazySkill = lazy(() => import('pages/Skill/Skill'))

const Main = () => {
    const {
        homeRef,
        aboutRef,
        workRef,
        experienceRef,
        skillRef,
        clientsRef,
        contactRef,
        handleScrollToSection,
    } = useContext(MainContext)
    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default' }}
        >
            <div ref={homeRef}>
                <Home
                    handleScrollToSection={() =>
                        handleScrollToSection(aboutRef)
                    }
                />
            </div>
            <div ref={aboutRef}>
                <About
                    handleScrollToSection={() => handleScrollToSection(workRef)}
                />
            </div>
            <div ref={workRef}>
                <WorkList
                    data={dataPortfolioItemsArray}
                    handleScrollToSection={() =>
                        handleScrollToSection(experienceRef)
                    }
                />
            </div>
            <div ref={experienceRef}>
                <Experience
                    handleScrollToSection={() =>
                        handleScrollToSection(skillRef)
                    }
                />
            </div>
            <div ref={skillRef}>
                <Suspense>
                    <LazySkill
                        handleScrollToSection={() =>
                            handleScrollToSection(clientsRef)
                        }
                    />
                </Suspense>
            </div>
            <div ref={clientsRef}>
                <ListClients
                    handleScrollToSection={() =>
                        handleScrollToSection(contactRef)
                    }
                />
            </div>
            <div ref={contactRef}>
                <Contact />
            </div>
        </Box>
    )
}
export default Main
