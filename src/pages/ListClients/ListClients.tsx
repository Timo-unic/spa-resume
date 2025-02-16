import { Button, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import imageListClients from 'assets/testimonial_bg.jpg'
import imageListClientOne from 'assets/testimonial-1.jpg'
import imageListClientTwo from 'assets/testimonial-2.jpg'
import imageListClientThree from 'assets/testimonial-3.jpg'
import './ListClients.scss'

type Props = {}
const ListClients = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="div"
                className="list-client-container"
            >
                <div className="list-client-content">
                    <h2 className="list-client-content-title">Clients.</h2>
                    <h3 className="list-client-content-subtitle">
                        MAKE A DIFFERENCE.
                    </h3>

                    <h4 className="list-client-content-intro">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed consectetur a nisl a tincidunt. Etiam placerat velit
                        sem, vel suscipit augue fermentum nec. Sociis natoque
                        penatibus et magnis dis.
                    </h4>
                    <div className="list-client-content-item">
                        <div className="list-client-content-item-image">
                            <img
                                src={imageListClientOne}
                                alt="OXANA GRAND"
                                title="OXANA GRAND"
                            />
                            <span>OXANA GRAND</span>
                        </div>

                        <h5 className="list-client-content-item-text">
                            “Phasellus vulputate turpis tincidunt, aliquam quam
                            in, accumsan massa. Donec feugiat ultrices molestie
                            etiam venenatis.”
                        </h5>
                    </div>
                    <div className="list-client-content-item">
                        <div className="list-client-content-item-image">
                            <img
                                src={imageListClientTwo}
                                alt="HANNAH THOMPSON"
                                title="HANNAH THOMPSON"
                            />
                            <span>HANNAH THOMPSON</span>
                        </div>
                        <h5 className="list-client-content-item-text">
                            “Phasellus vulputate turpis tincidunt, aliquam quam
                            in, accumsan massa. Donec feugiat ultrices molestie
                            etiam venenatis.”
                        </h5>
                    </div>
                    <div className="list-client-content-item">
                        <div className="list-client-content-item-image">
                            <img
                                src={imageListClientThree}
                                alt="EMILY ROSE"
                                title="EMILY ROSE"
                            />
                            <span>EMILY ROSE</span>
                        </div>
                        <h5 className="list-client-content-item-text">
                            “Phasellus vulputate turpis tincidunt, aliquam quam
                            in, accumsan massa. Donec feugiat ultrices molestie
                            etiam venenatis.”
                        </h5>
                    </div>
                </div>
                <img
                    src={imageListClients}
                    alt="image_list_client"
                    className="img-list-client"
                />
            </Typography>
            <Button
                variant="contained"
                size="large"
                color="warning"
                startIcon={<ExpandMoreIcon />}
                sx={{
                    borderRadius: 0,
                    width: '100%',
                    height: '100px',
                    fontSize: '20px',
                }}
                className="btn-pages"
            >
                GET IN TOUCH
            </Button>
        </>
    )
}
export default ListClients
