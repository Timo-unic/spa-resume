import { Card, CardContent } from '@mui/material'

type Props = {
    image: string
    description: string
    skills: string
    categories: string
    url: string
    copyright: string
    by: string
}
const PortfolioItems = ({
    description,
    skills,
    categories,
    url,
    copyright,
    by,
}: Props) => {
    return (
        <>
            <Card variant="outlined">
                <CardContent>
                    <div className="project-title">Project Description</div>
                    <div className="project-description">{description}</div>
                    <div className="project-details">Project Details</div>
                    <div className="project-details-skills">
                        Skills Needed: {skills}
                    </div>
                    <div className="project-details-categories">
                        Categories: {categories}
                    </div>
                    <div className="project-details-url">
                        Project URL: {url}
                    </div>
                    <div className="project-details-copyright">
                        Copyright: {copyright}
                    </div>
                    <div className="project-details-by">By: {by}</div>
                </CardContent>
            </Card>
        </>
    )
}
export default PortfolioItems
