import { Box } from '@mui/material'
import AppMenu from 'components/Menu/AppMenu'

type Props = {}
const AppMainLayout = (props: Props) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppMenu />
        </Box>
    )
}
export default AppMainLayout
