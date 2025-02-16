import Typography from '@mui/material/Typography'
import logo from 'assets/resume_logo.webp'
import './Logo.scss'

type Props = {}
const Logo = (props: Props) => {
    return (
        <>
            <Typography
                variant="inherit"
                component="div"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img src={logo} alt="logo-resume" className="img-logo" />
            </Typography>
        </>
    )
}
export default Logo
