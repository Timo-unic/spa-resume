import { Box, Button, TextField } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

type Props = {}
const FormDataApp = (props: Props) => {
    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    defaultValue="Name"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="E-mail"
                    defaultValue="E-mail"
                    type="email"
                />
                <TextField
                    required
                    id="outlined-textarea"
                    label="How can We Help You?"
                    placeholder="How can We Help You?"
                    multiline
                />
            </div>
            <Button
                variant="contained"
                size="large"
                color="warning"
                startIcon={<ExpandMoreIcon />}
                sx={{ marginTop: '50px' }}
            >
                LET`S TALK
            </Button>
        </Box>
    )
}
export default FormDataApp
