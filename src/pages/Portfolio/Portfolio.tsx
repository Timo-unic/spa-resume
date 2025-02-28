import { IDataPortfolioItemProps } from 'utils/Models/dataPortfolioItemProps'
import { useParams } from 'react-router-dom'
import dataPortfolioItemsArray, {
    getPortfolioItemsObject,
} from 'utils/dataPortfolioItemsArray'
import { Box, Container } from '@mui/material'
import './Portfolio.scss'
import WorkListItem from 'pages/Work/WorkListItem'
import Grid from '@mui/material/Grid2'

type Props = {
    portfolioItemObject?: {
        [page: string]: IDataPortfolioItemProps
    }
}
const Portfolio = ({
    portfolioItemObject = getPortfolioItemsObject(dataPortfolioItemsArray),
}: Props) => {
    const { page } = useParams()

    return (
        <>
            <Container maxWidth={'xl'}>
                <Box className="portfolio-container">
                    <img
                        src={portfolioItemObject[page!].image}
                        alt={portfolioItemObject[page!].title}
                        className="portfolio-image"
                    />
                    <div className="portfolio-content">
                        <div className="portfolio-title">
                            {portfolioItemObject[page!].title}
                        </div>
                        <div className="portfolio-description">
                            {portfolioItemObject[page!].description}
                        </div>
                        <div className="portfolio-details">Project Details</div>
                        <div className="portfolio-details-skills">
                            Skills Needed:{' '}
                            <span className="portfolio-details-item-list">
                                {portfolioItemObject[page!].skills}
                            </span>
                        </div>
                        <div className="portfolio-details-categories">
                            Categories:{' '}
                            <span className="portfolio-details-item-list">
                                {portfolioItemObject[page!].categories}
                            </span>
                        </div>
                        <div className="portfolio-details-url">
                            Project URL:{' '}
                            <span className="portfolio-details-item-list">
                                {portfolioItemObject[page!].url}
                            </span>
                        </div>
                        <div className="portfolio-details-copyright">
                            Copyright:{' '}
                            <span className="portfolio-details-item-list">
                                {portfolioItemObject[page!].copyright}
                            </span>
                        </div>
                        <div className="portfolio-details-by">
                            By:{' '}
                            <span className="portfolio-details-item-list">
                                {portfolioItemObject[page!].by}
                            </span>
                        </div>
                    </div>
                </Box>
                <Box
                    sx={{
                        flexGrow: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        padding: '20px',
                    }}
                >
                    <Grid container spacing={{ md: 2 }} columns={{ md: 12 }}>
                        {dataPortfolioItemsArray.map(
                            ({ id, title, image, page }) => (
                                <Grid key={id} size={{ md: 2 }}>
                                    <WorkListItem
                                        page={page}
                                        title={title}
                                        image={image}
                                        id={id}
                                    />
                                </Grid>
                            )
                        )}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}
export default Portfolio
