import { Button, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import imageExperience from 'assets/experience_bg.jpg'
import './Experience.scss'

type Props = {}
const Experience = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="div"
                className="experience-container"
            >
                <div className="experience-content">
                    <h2 className="experience-content-title">
                        Work <br /> Skills.
                    </h2>
                    <h3 className="experience-content-subtitle">
                        GREAT DESIGN MATTERS.
                    </h3>

                    <h4 className="experience-content-intro">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed consectetur a nisl a tincidunt. Etiam placerat velit
                        sem, vel suscipit augue fermentum nec. Sociis natoque
                        penatibus et magnis dis.
                    </h4>
                    <span className="experience-content-item">
                        01. DIGITAL.
                    </span>
                    <p className="experience-content-text">
                        Ut enim ad minima veniam, quis nostrum exercitationem
                        ullam corporis suscipit laboriosam, nisi ut aliqui. Quos
                        dolores et quas molestias un occaecati.
                    </p>
                    <span className="experience-content-item">
                        02. BRANDING.
                    </span>
                    <p className="experience-content-text">
                        Nam ante mauris, cursus ut nisl vitae, scelerisque
                        tincidunt turpis. In pulvinar est sit amet massa gravida
                        blandit.
                    </p>
                    <span className="experience-content-item">
                        03. MARKETING.
                    </span>
                    <p className="experience-content-text">
                        Phasellus pharetra est varius sagittis consectetur.
                        Etiam libero lorem, scelerisque eget tristique mattis
                        metus sit amet pulvinar vitae, finibus nec eros.
                    </p>
                    <Button
                        variant="contained"
                        size="large"
                        color="warning"
                        startIcon={<ExpandMoreIcon />}
                        sx={{ marginTop: '20px' }}
                        className="btn-pages"
                    >
                        SKILL
                    </Button>
                </div>
                <img
                    src={imageExperience}
                    alt="image_experience"
                    className="img-experience"
                />
            </Typography>
        </>
    )
}
export default Experience
