import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import './Header.scss'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'

type Props = {}
const Header = (props: Props) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className="app-bar">
                <Container>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Logo />
                        <Menu />
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}
export default Header
