import About from 'pages/About/About'
import Home from 'pages/Home/Home'
import WorkList from 'pages/Work/WorkList'

type Props = {}
const Main = (props: Props) => {
    return (
        <>
            <Home />
            <About />
            <WorkList />
        </>
    )
}
export default Main
