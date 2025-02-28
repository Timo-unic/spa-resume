import './Footer.scss'
import YouTubeIcon from '@mui/icons-material/YouTube'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'

type Props = {}
const Footer = (props: Props) => {
    return (
        <div className="footer-container">
            <div>
                © 2025 • Mofey-Studio is a Website Builder for React-Typescript
                • All Rights Reserved • Developed by MofeyFusion{' '}
            </div>
            <div>
                <YouTubeIcon
                    color="warning"
                    fontSize="large"
                    sx={{
                        margin: '3px',
                        ':hover': { color: 'white' },
                        cursor: 'pointer',
                    }}
                />
                <FacebookIcon
                    color="warning"
                    fontSize="large"
                    sx={{
                        margin: '3px',
                        ':hover': { color: 'white' },
                        cursor: 'pointer',
                    }}
                />
                <InstagramIcon
                    color="warning"
                    fontSize="large"
                    sx={{
                        margin: '3px',
                        ':hover': { color: 'white' },
                        cursor: 'pointer',
                    }}
                />
                <XIcon
                    color="warning"
                    fontSize="large"
                    sx={{
                        margin: '3px',
                        ':hover': { color: 'white' },
                        cursor: 'pointer',
                    }}
                />
            </div>
        </div>
    )
}
export default Footer
