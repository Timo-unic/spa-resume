import { Button, Grid, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import imageWork from 'assets/works_bg_900x1600.jpg'
import './Work.scss'
import WorkListItem from './WorkListItem'
import worksArray from 'utils/worksArray'

type Props = {}

const WorkList = (props: Props) => {
    return (
        <>
            <Typography variant="h4" component="div" className="work-container">
                <div className="work-content">
                    <h2 className="work-content-title">Work.</h2>
                    <h3 className="work-content-subtitle">RECENT PROJECTS.</h3>
                    <Grid container spacing={3}>
                        {worksArray.map(({ id, title, image }, i) => (
                            <Grid item xs={12} sm={6} md={4} key={id}>
                                <WorkListItem title={title} image={image} />
                            </Grid>
                        ))}
                    </Grid>
                    <Button
                        variant="contained"
                        size="large"
                        color="warning"
                        startIcon={<ExpandMoreIcon />}
                        sx={{ marginTop: '50px' }}
                    >
                        EXPERIENCE
                    </Button>
                </div>
                <img src={imageWork} alt="image_work" className="img-work" />
            </Typography>
        </>
    )
}
export default WorkList
