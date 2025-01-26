import { BarChart } from '@mui/x-charts/BarChart'

type Props = {}

const BandSkills = (props: Props) => {
    return (
        <>
            <BarChart
                xAxis={[
                    {
                        id: 'barCategories',
                        data: [
                            'PHOTOSHOP',
                            'UX/UI DESIGN',
                            'HTML/CSS',
                            'ILLUSTRATOR',
                            'JAVASCRIPT',
                            'BRANDING',
                        ],
                        scaleType: 'band',
                    },
                ]}
                series={[
                    {
                        data: [85, 90, 78, 93, 85, 94],
                    },
                ]}
                width={700}
                height={300}
            />
        </>
    )
}
export default BandSkills
