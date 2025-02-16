import { Typography } from '@mui/material'
import imageContact from 'assets/contact_bg.jpg'
import './Contact.scss'

import FormDataApp from 'components/FormDataApp/FormDataApp'

type Props = {}
const Contact = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="div"
                className="contact-container"
            >
                <div className="contact-content">
                    <h2 className="contact-content-title">Contact.</h2>
                    <h3 className="contact-content-subtitle">LET’S TALK.</h3>

                    <h4 className="contact-content-intro">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed consectetur a nisl a tincidunt. Etiam placerat velit
                        sem, vel suscipit augue fermentum nec. Sociis natoque
                        penatibus et magnis dis.
                    </h4>
                    <FormDataApp />
                </div>
                <img
                    src={imageContact}
                    alt="image_contact"
                    className="img-contact"
                />
            </Typography>
        </>
    )
}
export default Contact
