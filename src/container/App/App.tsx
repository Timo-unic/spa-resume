import { CssBaseline } from '@mui/material'
import {
    createTheme,
    StyledEngineProvider,
    ThemeProvider,
} from '@mui/material/styles'
import AppMenu from 'components/Menu/AppMenu'

type Props = {}

const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat, sans-serif',
    },
})
const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppMenu />
            </ThemeProvider>
        </StyledEngineProvider>
    )
}
export default App
