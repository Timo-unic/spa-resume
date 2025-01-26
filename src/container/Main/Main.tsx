import About from 'pages/About/About'
import Experience from 'pages/Experience/Experience'
import Home from 'pages/Home/Home'
import Skill from 'pages/Skill/Skill'
import WorkList from 'pages/Work/WorkList'

type Props = {}
const Main = (props: Props) => {
    return (
        <>
            <Home />
            <About />
            <WorkList />
            <Experience />
            <Skill />
        </>
    )
}
export default Main
