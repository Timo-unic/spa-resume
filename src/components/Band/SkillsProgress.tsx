import React from 'react'
import LinearProgress, {
    LinearProgressProps,
} from '@mui/material/LinearProgress'
import { Box, Typography } from '@mui/material'
import { IDataSkillProps } from 'utils/Models/dataSkillProps'

function LinearProgressWithLabel(
    props: LinearProgressProps & { value: number; label: string }
) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                marginBottom: '10px',
            }}
        >
            <Box sx={{ width: '100%', mr: 1 }}>
                <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', fontSize: '16px' }}
                >
                    {props.label}
                    {`  - ${Math.round(props.value)}%`}
                </Typography>
                <LinearProgress
                    variant="determinate"
                    {...props}
                    sx={{
                        width: '100%',
                        height: '10px',
                        color: 'orange',
                    }}
                />
            </Box>
        </Box>
    )
}

const SkillsProgress = ({ value, label }: IDataSkillProps) => {
    const [progress, setProgress] = React.useState(10)

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress >= value ? value : prevProgress + 1
            )
        }, 50)

        return () => {
            clearInterval(timer)
        }
    }, [value])

    return <LinearProgressWithLabel value={progress} label={label || 'Skill'} />
}
export default SkillsProgress
