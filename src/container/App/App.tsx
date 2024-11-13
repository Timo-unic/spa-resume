import { CssBaseline } from '@mui/material'
import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import {
    createTheme,
    StyledEngineProvider,
    ThemeProvider,
} from '@mui/material/styles'

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
                <Header />
                <Main />
                <Footer />
            </ThemeProvider>
        </StyledEngineProvider>
    )
}
export default App
