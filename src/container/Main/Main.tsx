import { Box } from '@mui/material'
import Footer from 'container/Footer/Footer'
import About from 'pages/About/About'
import Contact from 'pages/Contact/Contact'
import Experience from 'pages/Experience/Experience'
import Home from 'pages/Home/Home'
import ListClients from 'pages/ListClients/ListClients'
import Skill from 'pages/Skill/Skill'
import WorkList from 'pages/Work/WorkList'

type Props = {}
const Main = (props: Props) => {
    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default' }}
        >
            <Home />
            <About />
            <WorkList />
            <Experience />
            <Skill />
            <ListClients />
            <Contact />
            <Footer />
        </Box>
    )
}
export default Main
