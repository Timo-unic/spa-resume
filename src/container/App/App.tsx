import { CssBaseline } from '@mui/material'
import {
    createTheme,
    StyledEngineProvider,
    ThemeProvider,
} from '@mui/material/styles'
import AppMainLayout from 'container/Main/AppMainLayout'

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
                <AppMainLayout />
            </ThemeProvider>
        </StyledEngineProvider>
    )
}
export default App
