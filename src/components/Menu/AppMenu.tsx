import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import WorkIcon from '@mui/icons-material/Work'
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction'
import AssessmentIcon from '@mui/icons-material/Assessment'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import CallIcon from '@mui/icons-material/Call'
import Main from 'container/Main/Main'
import Logo from 'components/Logo/Logo'
import './AppBarMenu.scss'

const drawerItems = [
    {
        text: 'Home',
        icon: <HomeIcon className="icon-style" />,
        path: '/',
    },
    {
        text: 'About',
        icon: <PersonIcon className="icon-style" />,
        path: '/about',
    },
    {
        text: 'Work',
        icon: <WorkIcon className="icon-style" />,
        path: '/work',
    },
    {
        text: 'Experience',
        icon: <BatchPredictionIcon className="icon-style" />,
        path: '/experience',
    },
    {
        text: 'Skill',
        icon: <AssessmentIcon className="icon-style" />,
        path: '/skill',
    },
    {
        text: 'Clients',
        icon: <FavoriteBorderOutlinedIcon className="icon-style" />,
        path: '/clients',
    },
    {
        text: 'Contact',
        icon: <CallIcon className="icon-style" />,
        path: '/contact',
    },
]

const drawerWidth = 240
const AppMenu = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: '#232a34',
                        color: '#fff',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Logo />
                <Toolbar />
                <Divider />
                <List>
                    {drawerItems.map(({ text, icon }) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton className="list-item-btn">
                                <ListItemIcon className="list-item-icon">
                                    {icon}
                                </ListItemIcon>
                                <ListItemText
                                    className="list-item-text"
                                    primary={text}
                                />
                            </ListItemButton>
                            <Divider />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main />
        </Box>
    )
}
export default AppMenu
