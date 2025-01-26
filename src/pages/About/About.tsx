import { Button, Typography } from '@mui/material'
import imageAbout from 'assets/avada-resume-about.jpg'
import './About.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

type Props = {}
const About = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="div"
                className="about-container"
            >
                <div className="about-content">
                    <h2 className="about-content-title">About.</h2>
                    <h3 className="about-content-subtitle">
                        INSPIRED BY DIFFERENCE.
                    </h3>

                    <h4 className="about-content-intro">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed consectetur a nisl a tincidunt. Etiam placerat velit
                        sem, vel suscipit augue fermentum nec. Sociis natoque
                        penatibus et magnis dis.
                    </h4>
                    <p className="about-content-text">
                        Parturient montes, nascetur ridiculus mus. Maecenas ac
                        finibus turpis. Vivamus et elit in leo pretium pharetra.
                        Sed lobortis urna turpis, id ultricies dolor pharetra
                        ac. Proin suscipit odio non libero ullamcorper, sit amet
                        tincidunt lacus porta. Aenean sodales lectus ex, non
                        sagittis nibh ultricies at. Aliquam nec dolor posuere,
                        vulputate mauris at, fermentum Donec ligula metus,
                        hendrerit at malesuada vel, facilisis sit amet dui.
                        Aliquam erat volutpat. Nulla eget ornare dolor.
                        Pellentesque convallis dui ante, eu pretium ipsum
                        bibendum fermentum. Proin dui arcu, mattis non ultricies
                        ac, pellentesque eget ipsum. Nullam tincidunt orci in
                        interdum facilisis. Vestibulum eu neque et mauris
                        vestibulum pretium vel vitae enim. Vestibulum id ipsum
                        risus. Suspendisse lectus tortor, pretium ut orci vitae,
                        mollis iaculis risus.
                    </p>
                    <Button
                        variant="contained"
                        startIcon={<ExpandMoreIcon />}
                        sx={{ marginTop: '50px' }}
                    >
                        WORK
                    </Button>
                </div>
                <img src={imageAbout} alt="image_about" className="img-about" />
            </Typography>
        </>
    )
}
export default About
