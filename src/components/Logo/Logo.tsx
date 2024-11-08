import Typography from '@mui/material/Typography'
import logo from 'assets/resume_logo.webp'

type Props = {}
const Logo = (props: Props) => {
    return (
        <>
            {' '}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img src={logo} alt="logo-resume" />
            </Typography>
        </>
    )
}
export default Logo
