import { Card, CardContent, CardMedia, Typography } from '@mui/material'

type Props = {
    title: string
    image: string
}
function WorkListItem({ title, image }: Props) {
    return (
        <>
            <Card>
                <CardMedia
                    sx={{ height: 195 }}
                    image={image}
                    title="Book Cover"
                />
                <CardContent>
                    <Typography
                        variant="h5"
                        component="div"
                        className="work-title"
                    >
                        {title}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}
export default WorkListItem
