import { Box } from '@mui/material'
import AppMenu from 'components/Menu/AppMenu'
import Footer from 'container/Footer/Footer'

type Props = {}
const AppMainLayout = (props: Props) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <AppMenu />
            <Footer />
        </Box>
    )
}
export default AppMainLayout
