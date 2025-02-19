import { Button, Container, Typography } from '@mui/material'
import './Home.scss'
import 'animate.css'
import home from 'assets/home_bg.jpg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

type Props = {
    handleScrollToSection: () => void
}
const Home = ({ handleScrollToSection }: Props) => {
    return (
        <div id="home">
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
                    <h6>JONNY SMOOTH • WEB DESIGNER</h6>
                    <Button
                        onClick={() => handleScrollToSection()}
                        variant="contained"
                        size="large"
                        color="warning"
                        startIcon={<ExpandMoreIcon />}
                    >
                        LEARN MORE
                    </Button>
                </Typography>
            </Container>
        </div>
    )
}
export default Home
