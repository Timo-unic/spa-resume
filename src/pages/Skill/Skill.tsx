import { Button, Typography } from '@mui/material'
import imageSkill from 'assets/skill_bg.jpg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import './Skill.scss'
import SkillsProgress from 'components/Band/SkillsProgress'
import dataSkill from 'utils/dataSkill'

const Skill = () => {
    return (
        <>
            <Typography
                variant="h4"
                component="div"
                className="skill-container"
            >
                <div className="skill-content">
                    <h2 className="skill-content-title">Skills.</h2>
                    <h3 className="skill-content-subtitle">
                        RESULTS DRIVEN DESIGN.
                    </h3>

                    <h4 className="skill-content-intro">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed consectetur a nisl a tincidunt. Etiam placerat velit
                        sem, vel suscipit augue fermentum nec. Sociis natoque
                        penatibus et magnis dis.
                    </h4>
                    {dataSkill.map((skill) => (
                        <SkillsProgress
                            key={skill.key}
                            label={skill.label ?? 'Unknown Skill'}
                            value={skill.value}
                        />
                    ))}
                    <h5 className="skill-content-item">
                        THE USER MUST COME FIRST.
                    </h5>
                    <p className="skill-content-text">
                        Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat
                        facere possimus, omnis voluptas assumenda est, omnis
                        dolor repellendus. Temporibus autem quibusdam et aut
                        officiis debitis aut rerum necessitatibus repudiandae et
                        molestiae.
                    </p>
                    <Button
                        variant="contained"
                        size="large"
                        color="warning"
                        startIcon={<ExpandMoreIcon />}
                        sx={{ marginTop: '30px' }}
                    >
                        CLIENTS
                    </Button>
                </div>
                <img src={imageSkill} alt="image_skill" className="img-skill" />
            </Typography>
        </>
    )
}
export default Skill

/* <SkillsProgress label="PHOTOSHOP" value={85} />
<SkillsProgress label="UX/UI DESIGN" value={90} />
<SkillsProgress label="HTML/CSS" value={78} />
<SkillsProgress label="ILLUSTRATOR" value={93} />
<SkillsProgress label="JAVASCRIPT" value={85} />
<SkillsProgress label="BRANDING" value={95} /> */
