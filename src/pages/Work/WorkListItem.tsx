import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { IDataPortfolioItemProps } from 'utils/Models/dataPortfolioItemProps'

function WorkListItem({ image, title, page }: IDataPortfolioItemProps) {
    return (
        <>
            <Card sx={{ position: 'relative' }}>
                <CardActionArea onClick={() => console.log({ page })}>
                    <Link to={`/portfolio-items/${page}`} className="work-link">
                        <CardMedia
                            sx={{ height: 195 }}
                            image={image}
                            title={title}
                        />
                        <CardContent
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                textAlign: 'center',
                                transform: 'translateY(-50%)',
                                width: '100%',
                                backgroundColor: 'rgba(254, 149, 3, 0.43)',
                            }}
                        >
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                className="work-title"
                                sx={{
                                    position: 'relative',
                                    color: 'white',
                                    fontWeight: 'bold',
                                }}
                            >
                                {title}
                            </Typography>
                        </CardContent>
                    </Link>
                </CardActionArea>
            </Card>
        </>
    )
}
export default WorkListItem
