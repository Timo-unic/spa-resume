import { Button, Container, Typography } from '@mui/material'
import './Home.scss'
import 'animate.css'
import home from 'assets/home_bg.jpg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <Typography component="div" className="home-image-container">
                <img src={home} alt="image_home" className="img-home" />
            </Typography>
            <Container className="home-title-container">
                <Typography
                    variant="h3"
                    component="div"
                    className="animate__zoomIn"
                >
                    {' '}
                    <h2>
                        CLEAR THINKING <br /> MADE VISUAL.
                    </h2>
                    <h4>JONNY SMOOTH • WEB DESIGNER</h4>
                    <Button variant="contained" startIcon={<ExpandMoreIcon />}>
                        LEARN MORE
                    </Button>
                </Typography>
            </Container>
        </>
    )
}
export default Home
