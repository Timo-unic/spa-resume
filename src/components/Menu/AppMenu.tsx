import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import WorkIcon from '@mui/icons-material/Work'
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction'
import AssessmentIcon from '@mui/icons-material/Assessment'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import CallIcon from '@mui/icons-material/Call'
import Logo from 'components/Logo/Logo'
import './AppBarMenu.scss'
import Footer from 'container/Footer/Footer'
import About from 'pages/About/About'
import Contact from 'pages/Contact/Contact'
import Experience from 'pages/Experience/Experience'
import Home from 'pages/Home/Home'
import ListClients from 'pages/ListClients/ListClients'
import Skill from 'pages/Skill/Skill'
import WorkList from 'pages/Work/WorkList'
import { useRef } from 'react'
import { Box } from '@mui/material'
import { NavLink } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

const drawerItems = [
    {
        text: 'Home',
        icon: <HomeIcon className="icon-style" />,
        path: '/',
        refitem: 'homeRef',
    },
    {
        text: 'About',
        icon: <PersonIcon className="icon-style" />,
        path: 'about',
        refitem: 'aboutRef',
    },
    {
        text: 'Work',
        icon: <WorkIcon className="icon-style" />,
        path: 'work',
        refitem: 'workRef',
    },
    {
        text: 'Experience',
        icon: <BatchPredictionIcon className="icon-style" />,
        path: 'experience',
        refitem: 'experienceRef',
    },
    {
        text: 'Skill',
        icon: <AssessmentIcon className="icon-style" />,
        path: 'skill',
        refitem: 'skillRef',
    },
    {
        text: 'Clients',
        icon: <FavoriteBorderOutlinedIcon className="icon-style" />,
        path: 'clients',
        refitem: 'clientsRef',
    },
    {
        text: 'Contact',
        icon: <CallIcon className="icon-style" />,
        path: 'contact',
        refitem: 'contactRef',
    },
]

const drawerWidth = 240
const AppMenu = () => {
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
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: '#232a34',
                        color: '#fff',
                        overflow: 'auto',
                    },
                }}
                variant="permanent"
            >
                <Logo />
                <Toolbar />
                <List>
                    {drawerItems.map(({ text, icon, path, refitem }, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton
                                className="list-item-btn"
                                onClick={() =>
                                    handleScrollToSection(refs[index])
                                }
                            >
                                <NavLink
                                    style={{ textDecorationLine: 'none' }}
                                    to={path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'list-item-btn-style-active'
                                            : 'list-item-btn-style'
                                    }
                                >
                                    <ListItemIcon className="list-item-icon">
                                        {icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        className="list-item-text"
                                        primary={text}
                                    />
                                </NavLink>
                            </ListItemButton>

                            <Divider />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
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
                        handleScrollToSection={() =>
                            handleScrollToSection(workRef)
                        }
                    />
                </div>
                <div ref={workRef}>
                    <WorkList
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
                    <Skill
                        handleScrollToSection={() =>
                            handleScrollToSection(clientsRef)
                        }
                    />
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

                <Footer />
            </Box>
        </Box>
    )
}
export default AppMenu
